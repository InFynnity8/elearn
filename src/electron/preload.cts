const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
  // Videos
  getVideos: (lang: string) => ipcRenderer.invoke("get-videos", lang),
  openVideoFolder: () => ipcRenderer.invoke("open-video-folder"),

  // PDFs
  getPdfs: () => ipcRenderer.invoke("get-pdfs"),
  openPdfFolder: () => ipcRenderer.invoke("open-pdf-folder"),

  // Notes
  saveText: (data: { filename: string; text: string }) => ipcRenderer.invoke("save-text", data),
  loadTextFiles: () => ipcRenderer.invoke("load-text-files"),
  readTextFile: (filePath: string) => ipcRenderer.invoke("read-text-file", filePath),
  deleteTextFile: (filePath: string) => ipcRenderer.invoke("delete-text-file", filePath),
  openNotesFolder: () => ipcRenderer.invoke("open-notes-folder"),

  // Authentication
  authenticateUser: (username: string, password: string) => ipcRenderer.invoke("authenticateUser", username, password),
  setAuthenticatedUser: (username: string) => ipcRenderer.invoke("setAuthenticatedUser", username),
  getAuthenticatedUser: () => ipcRenderer.invoke("getAuthenticatedUser"),
  logoutUser: () => ipcRenderer.invoke("logoutUser"),
});