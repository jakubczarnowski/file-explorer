import { contextBridge } from "electron";
import { endpoints } from "./filesApi";
contextBridge.exposeInMainWorld("api", { ...endpoints });
