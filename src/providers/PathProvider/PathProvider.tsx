import React from "react";
import { FileInfo, PathContextTypes } from "./PathContext.types";

export const PathContext = React.createContext<PathContextTypes | null>(null);

export const PathProvider = ({ children }: { children: React.ReactNode }) => {
    const [baseUserPath] = React.useState<string>(window.api.baseUserPath());
    const [currentPath, setCurrentPath] = React.useState<string>(baseUserPath);

    const getFilesInCurrentPath = async (): Promise<FileInfo[]> => {
        const files = await window.api.directoryContents(currentPath);
        return files;
    };
    const getFilesInPath = async (path: string): Promise<FileInfo[]> => {
        const files = await window.api.directoryContents(path);
        return files;
    };
    getFilesInCurrentPath();
    const changeCurrentPath = (newPath: string) => {
        setCurrentPath(newPath);
    };
    return (
        <PathContext.Provider
            value={{ currentPath, changeCurrentPath, baseUserPath, getFilesInCurrentPath, getFilesInPath }}
        >
            {children}
        </PathContext.Provider>
    );
};
