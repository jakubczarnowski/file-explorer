export type FileInfo = {
    name: string;
    path: string;
    isDirectory: boolean;
};
// TODO: Implement the methods
export type PathContextTypes = {
    currentPath: string;
    changeCurrentPath: (newPath: string) => void;
    getFilesInCurrentPath?: () => Promise<FileInfo[]>;
    getFilesInPath?: (path: string) => Promise<FileInfo[]>;
    goBack?: () => void;
    goForward?: () => void;
    pathHistory?: string[];
    pathHistoryWithFiles?: FileInfo[][];
    currentHistoryIndex?: number;
};
