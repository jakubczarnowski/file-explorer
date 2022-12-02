import React from "react";
import { PathContextTypes } from "./PathContext.types";

export const PathContext = React.createContext<PathContextTypes | null>(null);

export const PathProvider = ({ children }: { children: React.ReactNode }) => {
    const [currentPath, setCurrentPath] = React.useState<string>("C:/");
    const getDirectoryContent = async (path: string) => {
        return await window.api.directoryContents(path);
    };
    getDirectoryContent(currentPath);
    const changeCurrentPath = (newPath: string) => {
        setCurrentPath(newPath);
    };
    return <PathContext.Provider value={{ currentPath, changeCurrentPath }}>{children}</PathContext.Provider>;
};
