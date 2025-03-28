const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
  getVideos: () => ipcRenderer.invoke("get-videos"),
  getVideoMetadata: (path: string) => ipcRenderer.invoke("get-video-metadata", path),
  saveText: (data: {filename: string, text: string}) => ipcRenderer.invoke("save-text", data),
  loadTextFiles: () => ipcRenderer.invoke("load-text-files"),
  readTextFile: (filePath: string) => ipcRenderer.invoke("read-text-file", filePath),
  getPdfs: () => ipcRenderer.invoke("get-pdfs"),

  authenticateUser: (username:string, password:string) => ipcRenderer.invoke('authenticateUser', username, password),
  setAuthenticatedUser: (username:string) => ipcRenderer.invoke('setAuthenticatedUser', username),
  getAuthenticatedUser: () => ipcRenderer.invoke('getAuthenticatedUser'),
  logoutUser: () => ipcRenderer.invoke('logoutUser'),

  openVideoFolder: () => ipcRenderer.invoke("open-video-folder"),
});
