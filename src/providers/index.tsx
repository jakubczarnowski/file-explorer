import { ChakraProvider, theme } from "@chakra-ui/react";
import React from "react";
import { PathProvider } from "./PathProvider/PathProvider";

const Providers = ({ children }: { children: React.ReactNode }) => {
    return (
        <ChakraProvider theme={theme}>
            <PathProvider>{children}</PathProvider>
        </ChakraProvider>
    );
};

export default Providers;
