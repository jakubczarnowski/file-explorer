import { ChakraProvider as ChakraProviderBase, ColorModeScript } from "@chakra-ui/react";
import React from "react";
import { theme } from "./";

const ChakraProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <ChakraProviderBase theme={theme}>
            <ColorModeScript initialColorMode={"dark"} />
            {children}
        </ChakraProviderBase>
    );
};

export default ChakraProvider;
