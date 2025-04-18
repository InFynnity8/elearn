import { app, BrowserWindow, ipcMain, shell } from "electron";
import path from "path";
import { isDev } from "./util.js";
import fs from "fs";
import {
  getPreloadPath,
  // getVideoPath,
  // getPdfPath,
} from "./pathResolver.js";
// import ffmpeg from "fluent-ffmpeg";
// import bcrypt from 'bcryptjs';
import { authenticateUser } from "./auth.js";

// const password = 'admin';  // Replace with actual password
// bcrypt.hash(password, 10, (err, hash) => {
//     if (err) console.error(err);
//     else console.log('Hashed Password:', hash);
// });

// Get the user's documents folder
function getUserDataPath(subFolder: string) {
  return path.join(app.getPath("documents"), "eClassroom", subFolder);
}

// Get paths for different directories
function getVideoPath() {
  return getUserDataPath("videos");
}

function getPdfPath() {
  return getUserDataPath("books");
}

function getNotePath() {
  return getUserDataPath("notes");
}

// Ensure all necessary directories exist
function ensureDirectories() {
  [getVideoPath(), getPdfPath(), getNotePath()].forEach((folder) => {
    if (!fs.existsSync(folder)) {
      fs.mkdirSync(folder, { recursive: true });
    }
  });
}

app.on("ready", () => {
  ensureDirectories();

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

  // Load the application
  if (isDev()) {
    mainWindow.loadURL("http://localhost:5123");
  } else {
    mainWindow.loadFile(path.join(app.getAppPath(), "/dist-react/index.html"));
  }
});

// Fetch videos
ipcMain.handle("get-videos", async (_, lang) => {
  const videoFolder = getVideoPath();
  try {
    const files = fs.readdirSync(videoFolder).filter((file) => file.endsWith(`${lang}.mp4`));
    return files.map((file) => ({
      name: file,
      path: `file://${path.join(videoFolder, file)}`,
    }));
  } catch (error) {
    console.error("Error reading videos:", error);
    return [];
  }
});

// Fetch PDFs
ipcMain.handle("get-pdfs", async () => {
  const pdfFolder = getPdfPath();
  try {
    const files = fs.readdirSync(pdfFolder).filter((file) => file.endsWith(".pdf"));
    return files.map((file) => ({
      name: file,
      path: path.join(pdfFolder, file),
    }));
  } catch (error) {
    console.error("Error reading PDFs:", error);
    return [];
  }
});

// Save a note
ipcMain.handle("save-text", async (_, data) => {
  const { filename, text } = data;
  if (!filename) return null;

  const notesFolder = getNotePath();
  const savePath = path.join(notesFolder, filename + ".txt");

  try {
    fs.writeFileSync(savePath, text, "utf-8");
    return savePath;
  } catch (error) {
    console.error("Error saving note:", error);
    return null;
  }
});

// Load all saved text files
ipcMain.handle("load-text-files", async () => {
  try {
    const directory = getNotePath();
    if (!fs.existsSync(directory)) {
      return [];
    }

    const files = fs.readdirSync(directory).filter((file) => file.endsWith(".txt"));
    return files.map((file) => ({
      name: file,
      path: path.join(directory, file),
    }));
  } catch (error) {
    console.error("Error loading text files:", error);
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

// delete a text file
ipcMain.handle("delete-text-file", async (_, filePath) => {
  try {
    await fs.promises.rm(filePath, { force: true }); // wait for deletion
    return { success: "Successfully deleted" }; // ✅ return plain object only
  } catch (error) {
    return { success: "Can't delete this file", error: (error as Error).message };
  }
});

// Handle authentication via IPC
ipcMain.handle("authenticateUser", async (_, username: string, password: string) => {
  return await authenticateUser(username, password);
});

// Handle session storage in IPC
let authenticatedUser: string | null = null;

ipcMain.handle("setAuthenticatedUser", (_, username) => {
  authenticatedUser = username;
});

ipcMain.handle("getAuthenticatedUser", () => {
  return authenticatedUser;
});

ipcMain.handle("logoutUser", () => {
  authenticatedUser = null;
});

// Open video folder
ipcMain.handle("open-video-folder", async () => {
  shell.openPath(getVideoPath());
});

// Open PDF folder
ipcMain.handle("open-pdf-folder", async () => {
  shell.openPath(getPdfPath());
});

// Open Notes folder
ipcMain.handle("open-notes-folder", async () => {
  shell.openPath(getNotePath());
});
