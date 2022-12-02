import { FileInfo } from "./../../src/providers/PathProvider/PathContext.types";
import * as fs from "fs";
import os from "os";
import { shell } from "electron";

const directoryContents = async (path: string): Promise<FileInfo[]> => {
    return new Promise((resolve, reject) => {
        fs.readdir(path, (err, files) => {
            if (err) {
                reject(err.message);
            }
            resolve(
                files.map((file) => {
                    const filePath = `${path}/${file}`;
                    const isDirectory = fs.lstatSync(filePath).isDirectory();
                    return { name: file, path: filePath, isDirectory };
                })
            );
        });
    });
};
const openFile = (path: string) => {
    shell.openPath(path);
};
const baseUserPath = () => os.homedir();

const currentDirectory = () => {
    return process.cwd();
};

export { directoryContents, currentDirectory, baseUserPath, openFile };
