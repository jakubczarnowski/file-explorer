import { FileInfo } from "../providers/PathProvider/PathContext.types";

declare global {
    interface Window {
        api: {
            currentDirectory: () => string;
            directoryContents: (path: string) => Promise<FileInfo[]>;
            baseUserPath: () => string;
        };
    }
}
