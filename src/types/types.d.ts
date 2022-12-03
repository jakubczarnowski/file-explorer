import { FileInfo } from "../providers/PathProvider/PathContext.types";

declare global {
    interface Window {
        api: {
            currentDirectory: () => string;
            directoryContents: (path: string, search: string) => Promise<FileInfo[]>;
            baseUserPath: () => string;
            openFile: (path: string) => void;
            getCommonRoutes: CommonRoutes;
        };
        windowControl: {
            minimize: () => void;
            maximize: () => void;
            close: () => void;
        };
    }
}
