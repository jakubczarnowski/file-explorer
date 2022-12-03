import * as remote from "@electron/remote";
const win = remote.getCurrentWindow();
function closeWindow() {
    win.close();
}
function minimizeWindow() {
    win.minimize();
}
function maximizeWindow() {
    win.isMaximized() ? win.unmaximize() : win.maximize();
}
export { closeWindow, minimizeWindow, maximizeWindow };
