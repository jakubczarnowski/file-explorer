import path from "path";
import { app, BrowserWindow } from "electron";
import isDev from "electron-is-dev";
// the app breaks on current electron version when using import even with file set as module, i've got no time to figure out why, so i'm using require instead

// // eslint-disable-next-line @typescript-eslint/no-var-requires
// const path = require("path");
// // eslint-disable-next-line @typescript-eslint/no-var-requires
// const { app, BrowserWindow } = require("electron");
// // eslint-disable-next-line @typescript-eslint/no-var-requires
// const isDev = require("electron-is-dev");

function createWindow() {
    // Create the browser window.
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            preload: `${__dirname}/preload.js`,
        },
    });
    win.setMenuBarVisibility(false);

    // and load the index.html of the app.
    // win.loadFile("index.html");
    win.loadURL(isDev ? "http://localhost:3000" : `file://${path.join(__dirname, "../build/index.html")}`);
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
