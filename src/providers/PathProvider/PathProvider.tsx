import React from "react";

import { FileInfo, PathContextTypes } from "./PathContext.types";

export const PathContext = React.createContext<PathContextTypes | null>(null);

export const PathProvider = ({ children }: { children: React.ReactNode }) => {
    const [baseUserPath] = React.useState<string>(window.api.baseUserPath());
    const [currentPath, setCurrentPath] = React.useState<string>(baseUserPath);
    const [history, setHistory] = React.useState<string[]>([baseUserPath]);
    const [historyIndex, setHistoryIndex] = React.useState<number>(0);

    const getFilesInCurrentPath = async (): Promise<FileInfo[]> => {
        const files = await window.api.directoryContents(currentPath);
        return files;
    };

    const getFilesInPath = async (path: string): Promise<FileInfo[]> => {
        const files = await window.api.directoryContents(path);
        return files;
    };

    const changeCurrentPath = (newPath: string) => {
        if (newPath === currentPath) return;
        if (historyIndex !== history.length - 1) {
            setHistory((prev) => [...prev.slice(0, historyIndex + 1), newPath]);
        } else {
            setHistory((prev) => [...prev, newPath]);
        }
        setHistoryIndex((prev) => prev + 1);
        setCurrentPath(newPath);
    };

    const openFile = (path: string) => {
        window.api.openFile(path);
    };

    const goBack = () => {
        if (!canGoBack) return;
        const newPath = history[historyIndex - 1];
        setHistoryIndex((prev) => prev - 1);
        setCurrentPath(newPath);
    };

    const goForward = () => {
        if (!canGoForward) return;
        const newPath = history[historyIndex + 1];
        setHistoryIndex((prev) => prev + 1);
        setCurrentPath(newPath);
    };
    const goUp = () => {
        if (!canGoUp) return;
        const newPath = currentPath.split("\\").slice(0, -1).join("\\");
        changeCurrentPath(newPath);
    };
    const canGoUp = currentPath !== "C:\\";
    const canGoBack = history.length > 1 && historyIndex !== 0;
    const canGoForward = history.length > 1 && historyIndex !== history.length - 1;

    return (
        <PathContext.Provider
            value={{
                currentPath,
                changeCurrentPath,
                goBack,
                goUp,
                canGoUp,
                canGoBack,
                canGoForward,
                goForward,
                pathHistory: history,
                currentHistoryIndex: historyIndex,
                baseUserPath,
                getFilesInCurrentPath,
                getFilesInPath,
                openFile,
            }}
        >
            {children}
        </PathContext.Provider>
    );
};
