import { app, BrowserWindow, ipcMain } from "electron";
import path from "path";
import { isDev } from "./util.js";
import fs from "fs";
import { getNotePath, getPreloadPath, getVideoPath } from "./pathResolver.js";
import ffmpeg from "fluent-ffmpeg";

app.on("ready", () => {
  // create a new window
  const mainWindow = new BrowserWindow({
    minWidth: 800,
    height: 600,
    autoHideMenuBar: true,
    webPreferences: {
      webSecurity: false,
      nodeIntegration: true,
      preload: getPreloadPath(),
    },
  });

  // load url in development mode and static file in productin mode
  if (isDev()) {
    mainWindow.loadURL("http://localhost:5123");
  } else {
    mainWindow.loadFile(path.join(app.getAppPath(), "/dist-react/index.html"));
  }

  // API requests

  // fetch videos
  ipcMain.handle("get-videos", async () => {
    const videoFolder = path.join(getVideoPath(), "videos");
    const files = fs
      .readdirSync(videoFolder)
      .filter((file) => file.endsWith(".mp4"));
    return files.map((file) => ({
      name: file,
      path: `file://${path.join(videoFolder, file)}`, // Create full path
    }));
  });

  // get video metadata
  ipcMain.handle("get-video-metadata", async (event, videoPath) => {
    return new Promise((resolve, reject) => {
      ffmpeg.ffprobe(videoPath, (err, metadata) => {
        if (err) {
          reject(err);
        } else {
          resolve({
            duration: metadata.format.duration,
            title: metadata.format.tags?.title || path.basename(videoPath),
          });
        }
      });
    });
  });

  // save note
  ipcMain.handle("save-text", async (_, data) => {
    const { filename, text } = data; // Extract filename and text
    if (!filename) return null;
    const notesFolder = path.join(getNotePath(), "notes");
    const savePath = path.join(notesFolder, filename + ".txt");
    fs.writeFileSync(savePath, text, "utf-8");
    return savePath;
  });

  // Load all saved text files
  ipcMain.handle("load-text-files", async () => {
    try {
      const directory = path.join(getNotePath(), "notes");
      const files = fs
        .readdirSync(directory)
        .filter((file) => file.endsWith(".txt"));
      return files.map((file) => ({
        name: file,
        path: path.join(directory, file),
      }));
    } catch (error) {
      return [];
    }
  });

  // Read a text file
  ipcMain.handle("read-text-file", async (_, filePath) => {
    try {
      const text = fs.readFileSync(filePath, "utf-8");
      return { success: true, text };
    } catch (error) {
      return { success: false, error: (error as Error).message };
    }
  });
});
