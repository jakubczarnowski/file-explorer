import { Stack, StackItem } from "@chakra-ui/react";
import React from "react";
import FastAccessTab from "./FastAccessTab";
import { usePathContext } from "../../hooks/usePathContext";

const CommonRoutes = () => {
    const { commonRoutes } = usePathContext();
    return (
        <Stack mx={2}>
            {Object.entries(commonRoutes).map(([key, path]) => (
                <StackItem key={key}>
                    <FastAccessTab path={path}>{key}</FastAccessTab>
                </StackItem>
            ))}
        </Stack>
    );
};

export default CommonRoutes;
