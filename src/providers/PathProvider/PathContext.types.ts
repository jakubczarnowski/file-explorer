export type FileInfo = {
    name: string;
    path: string;
    isDirectory: boolean;
};
export type CommonRoutes = {
    Downloads: string;
    Documents: string;
    Desktop: string;
};

// TODO: Implement the methods
export type PathContextTypes = {
    currentPath: string;
    changeCurrentPath: (newPath: string) => void;
    openFile: (path: string) => void;
    goBack: () => void;
    files: FileInfo[] | null;
    goForward: () => void;
    goUp: () => void;
    canGoUp: boolean;
    canGoForward: boolean;
    canGoBack: boolean;
    commonRoutes: CommonRoutes;
    setSearchValue: (value: string) => void;
    addFavoritePath?: (path: string) => void;
    removeFavoritePath?: (path: string) => void;
    favoritePaths?: string[];
    isFavoritePath?: (path: string) => boolean;
    baseUserPath: string;
};
