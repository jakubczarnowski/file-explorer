import { FileInfo } from "./../../src/providers/PathProvider/PathContext.types";
import * as fs from "fs";
import os from "os";
import { shell } from "electron";
import * as remote from "@electron/remote";

const DOWNLOADS_PATH = remote.app.getPath("downloads");
const DOCUMENTS_PATH = remote.app.getPath("documents");
const DESKTOP_PATH = remote.app.getPath("desktop");

const commonRoutes = {
    Downloads: DOWNLOADS_PATH,
    Documents: DOCUMENTS_PATH,
    Desktop: DESKTOP_PATH,
};

const directoryContents = async (path: string, search: string): Promise<FileInfo[]> => {
    return new Promise((resolve, reject) => {
        // Adding \\ for reading drive paths
        path = path.endsWith("\\") ? path : path + "\\";
        fs.readdir(path, (err, files) => {
            if (err) {
                reject(err.message);
            }
            resolve(
                files
                    .filter((val) => val.toLowerCase().includes(search))
                    .map((file) => {
                        const filePath = `${path}\\${file}`;
                        try {
                            const isDirectory = fs.lstatSync(filePath).isDirectory();
                            return { name: file, path: filePath, isDirectory };
                        } catch {
                            return { name: file, path: filePath, isDirectory: false };
                        }
                    })
            );
        });
    });
};
const openFile = (path: string) => {
    shell.openPath(path);
};
const getCommonRoutes = () => {
    return commonRoutes;
};
const baseUserPath = () => os.homedir();

const currentDirectory = () => {
    return process.cwd();
};

export { directoryContents, currentDirectory, baseUserPath, openFile, getCommonRoutes };
