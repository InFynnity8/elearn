import {app, BrowserWindow, ipcMain} from 'electron';
import path from 'path';
import {isDev} from './util.js';
import fs from "fs";
import { getPreloadPath, getVideoPath } from './pathResolver.js';

app.on('ready', () => {
  const mainWindow = new BrowserWindow({
    minWidth: 800,
    height: 600, 
    autoHideMenuBar: true,
    webPreferences: {
      webSecurity: false, 
      nodeIntegration: true,
      preload: getPreloadPath()
    },
  });

  if (isDev()) {
    mainWindow.loadURL('http://localhost:5123');
  }else {

    mainWindow.loadFile(path.join(app.getAppPath(), '/dist-react/index.html'));
  } 

  ipcMain.handle("get-videos", async () => {
    const videoFolder = path.join(getVideoPath(), "videos"); 
    const files = fs.readdirSync(videoFolder).filter((file) => file.endsWith(".mp4"));
    return files.map((file) => ({
      name: file,
      path: `file://${path.join(videoFolder, file)}`, // Create full path
    }));
});
});