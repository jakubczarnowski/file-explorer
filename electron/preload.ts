import * as fs from "fs";
import { contextBridge } from "electron";

const directoryContents = async (path: string) => {
    const results = await fs.readdirSync(path);
    return results;
};

const currentDirectory = () => {
    return process.cwd();
};

contextBridge.exposeInMainWorld("api", { directoryContents, currentDirectory });
