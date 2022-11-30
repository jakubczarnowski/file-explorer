import React from "react";
import { PathContextTypes } from "./PathContext.types";

export const PathContext = React.createContext<PathContextTypes | null>(null);

export const PathProvider = ({ children }: { children: React.ReactNode }) => {
    const [currentPath, setCurrentPath] = React.useState<string>("");

    const changeCurrentPath = (newPath: string) => {
        setCurrentPath(newPath);
    };
    return <PathContext.Provider value={{ currentPath, changeCurrentPath }}>{children}</PathContext.Provider>;
};
