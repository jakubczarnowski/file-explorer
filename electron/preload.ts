import { contextBridge } from "electron";
import { endpoints } from "./filesApi";
import { handleTitleBar } from "./tiltlebar";
contextBridge.exposeInMainWorld("api", { ...endpoints });
handleTitleBar();
