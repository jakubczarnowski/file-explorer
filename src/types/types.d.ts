export {};

declare global {
    interface Window {
        api: {
            currentDirectory: () => string;
            directoryContents: (path: string) => string[];
        }; // whatever type you want to give. (any,number,float etc)
    }
}
