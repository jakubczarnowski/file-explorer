import React, { useEffect, useState } from "react";

import { CommonRoutes, FileInfo, PathContextTypes } from "./PathContext.types";

export const PathContext = React.createContext<PathContextTypes | null>(null);

export const PathProvider = ({ children }: { children: React.ReactNode }) => {
    const [baseUserPath] = React.useState<string>(window.api.baseUserPath());
    const [currentPath, setCurrentPath] = React.useState<string>(baseUserPath);
    const [history, setHistory] = React.useState<string[]>([baseUserPath]);
    const [historyIndex, setHistoryIndex] = React.useState<number>(0);
    const [commonRoutes] = React.useState<CommonRoutes>(window.api.getCommonRoutes());
    const [search, setSearch] = useState<string>("");
    const [files, setFiles] = useState<FileInfo[] | null>(null);

    useEffect(() => {
        getFilesInCurrentPath()
            .then((files) => setFiles(files))
            .catch(() => setFiles(null));
    }, [currentPath, search]);

    const getFilesInCurrentPath = async (): Promise<FileInfo[]> => {
        const files = await window.api.directoryContents(currentPath, search);
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

    const canGoUp = currentPath.split("\\").length !== 1;
    const canGoBack = history.length > 1 && historyIndex !== 0;
    const canGoForward = history.length > 1 && historyIndex !== history.length - 1;

    return (
        <PathContext.Provider
            value={{
                currentPath,
                changeCurrentPath,
                goBack,
                goUp,
                files,
                canGoUp,
                canGoBack,
                canGoForward,
                goForward,
                commonRoutes,
                pathHistory: history,
                currentHistoryIndex: historyIndex,
                baseUserPath,
                setSearchValue: setSearch,
                openFile,
            }}
        >
            {children}
        </PathContext.Provider>
    );
};
