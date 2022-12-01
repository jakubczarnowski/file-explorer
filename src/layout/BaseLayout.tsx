import { Box } from "@chakra-ui/react";
import React from "react";

const BaseLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <Box
            minW={"100vw"}
            minH={"100vh"}
            backgroundColor={"#D3D0CB"}
            display={"flex"}
            flexDir={"row"}
            alignItems={"stretch"}
        >
            {children}
        </Box>
    );
};

export default BaseLayout;
