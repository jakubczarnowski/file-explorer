import { ChakraProvider as ChakraProviderBase, ColorModeScript } from "@chakra-ui/react";
import React from "react";
import { theme } from "./theme";

const ChakraProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <ChakraProviderBase theme={theme}>
            <ColorModeScript initialColorMode={theme.config.initialColorMode} />
            {children}
        </ChakraProviderBase>
    );
};

export default ChakraProvider;
