import { app, BrowserWindow, ipcMain, shell } from "electron";
import path from "path";
import { isDev } from "./util.js";
import fs from "fs";
import { getNotePath, getPreloadPath, getVideoPath, getPdfPath } from "./pathResolver.js";
// import ffmpeg from "fluent-ffmpeg";
// import bcrypt from 'bcryptjs';
import { authenticateUser } from "./auth.js";


// const password = 'admin';  // Replace with actual password
// bcrypt.hash(password, 10, (err, hash) => {
//     if (err) console.error(err);
//     else console.log('Hashed Password:', hash);
// }); 

function ensureDirectoriesExist() {
  const videoFolder = path.join(getVideoPath(), "videos");
  const pdfFolder = path.join(getPdfPath(), "books");

  [videoFolder, pdfFolder].forEach((folder) => {
    if (!fs.existsSync(folder)) {
      fs.mkdirSync(folder, { recursive: true });
      console.log(`Created directory: ${folder}`);
    }
  });
}

app.on("ready", () => {
  // create a new window
  ensureDirectoriesExist();
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

  ipcMain.handle("get-videos", async () => {
    try {
      const videoFolder = path.join(getVideoPath(), "videos");
  
      const files = fs.readdirSync(videoFolder).filter((file) => file.endsWith(".mp4"));
  
      return files.map((file) => ({
        name: file,
        path: `file://${path.join(videoFolder, file)}`,
      }));
    } catch (error) {
      console.error("Error fetching videos:", error);
      return [];
    }
  });

  // get video metadata
  // ipcMain.handle("get-video-metadata", async (event, videoPath) => {
  //   return new Promise((resolve, reject) => {
  //     ffmpeg.ffprobe(videoPath, (err, metadata) => {
  //       if (err) {
  //         reject(err);
  //       } else {
  //         resolve({
  //           duration: metadata.format.duration,
  //           title: metadata.format.tags?.title || path.basename(videoPath),
  //         });
  //       }
  //     });
  //   });
  // });

  // save note
  ipcMain.handle("save-text", async (_, data) => {
    const { filename, text } = data; // Extract filename and text
    if (!filename) return null;
    const notesFolder = path.join(getNotePath(), "notes");
    if (!fs.existsSync(notesFolder)) {
      fs.mkdirSync(notesFolder, { recursive: true });
    }
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


// Function to get all PDFs
ipcMain.handle("get-pdfs", async () => {
  try {
    const pdfDirectory = path.join(getPdfPath(), "books");

    const files = fs.readdirSync(pdfDirectory).filter((file) => file.endsWith(".pdf"));
    return files.map((file) => ({
      name: file,
      path: path.join(pdfDirectory, file),
    }));
  } catch (error) {
    console.error("Error reading PDF files:", error);
    return [];
  }
});


// Handle authentication via IPC
ipcMain.handle('authenticateUser', async (event, username:string, password:string) => {
  return await authenticateUser(username, password);
});

// Handle session storage in IPC
let authenticatedUser: string | null = null;

ipcMain.handle('setAuthenticatedUser', (event, username) => {
  authenticatedUser = username;
});

ipcMain.handle('getAuthenticatedUser', () => {
  return authenticatedUser;
});

ipcMain.handle('logoutUser', () => {
  authenticatedUser = null;
});



ipcMain.handle("open-video-folder", async () => {
  const videoFolder = getVideoPath();
  shell.openPath(videoFolder); // Opens the folder in the OS file explorer
});

