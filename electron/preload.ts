import { contextBridge } from "electron";
import { filesEnpoints } from "./filesApi";
import * as titlebarEndpoints from "./titlebar";

contextBridge.exposeInMainWorld("api", { ...filesEnpoints });
contextBridge.exposeInMainWorld("windowControl", { ...titlebarEndpoints });
