import { useContext } from "react";
import { PathContext } from "../providers/PathProvider/PathProvider";

export const usePathContext = () => {
    const path = useContext(PathContext);
    if (!path) {
        throw new Error("usePathContext must be used within a PathProvider");
    }
    return { path };
};
