import { Box } from "@chakra-ui/react";
import React from "react";

const BaseLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <Box minH={"100vh"} overflow={"hidden"}>
            {children}
        </Box>
    );
};

export default BaseLayout;
