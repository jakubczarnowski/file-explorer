import path from "path";
import { app, BrowserWindow } from "electron";
import isDev from "electron-is-dev";
import * as remoteMain from "@electron/remote/main";

remoteMain.initialize();
if (require("electron-squirrel-startup")) app.quit();
function createWindow() {
    // Create the browser window.
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        frame: false,
        icon: path.join(__dirname, "assets/icon.jpg"),
        webPreferences: {
            nodeIntegration: true,
            preload: `${__dirname}/preload.js`,
        },
    });
    win.setMenuBarVisibility(false);
    remoteMain.enable(win.webContents);

    // and load the index.html of the app.
    // win.loadFile("index.html");
    win.loadURL(
        isDev ? "http://localhost:3000" : "file://" + path.join(__dirname.replace("\\", "/"), "/../index.html")
    );
    // Open the DevTools.
    if (isDev) {
        win.webContents.openDevTools({ mode: "detach" });
    }
}
// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bars to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});

app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});
