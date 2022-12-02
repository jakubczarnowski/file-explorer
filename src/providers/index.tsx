import React from "react";
import { ChakraProvider } from "./ChakraProvider";
import { PathProvider } from "./PathProvider";

const Providers = ({ children }: { children: React.ReactNode }) => {
    return (
        <ChakraProvider>
            <PathProvider>{children}</PathProvider>
        </ChakraProvider>
    );
};

export default Providers;
