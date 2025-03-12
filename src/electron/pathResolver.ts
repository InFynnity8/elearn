import { app } from "electron";
import { isDev } from "./util.js";
import path from "path";

export function getPreloadPath() {
return path.join(
    app.getAppPath(),
    isDev() ? '.' : '..',
    "/dist-electron/preload.cjs"
)
}

export function getVideoPath() {
return path.join(
    app.getAppPath(),
    isDev() ? '.' : '..',
    "/dist-electron"
)
}
export function getNotePath() {
return path.join(
    app.getAppPath(),
    isDev() ? '.' : '..',
    "/dist-electron"
)
}