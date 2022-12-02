import { Box, Icon, Text } from "@chakra-ui/react";
import React from "react";

import { Props } from "./File.types";

const File = ({ name, icon, onDoubleClick, onRightClick, iconColor }: Props) => {
    return (
        <Box
            w={"100px"}
            h={"116px"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            borderRadius={"md"}
            flexDir={"column"}
            _hover={{ backgroundColor: "hover" }}
            p={2}
            m={2}
            onClick={(e) => e.type === "contextmenu" && onRightClick && onRightClick()}
            onDoubleClick={() => onDoubleClick && onDoubleClick()}
        >
            <Icon color={iconColor || "gray"} as={icon} w={"75px"} h={"75px"} mb={2} />

            <Text pointerEvents={"none"} unselectable={"on"} fontSize={"sm"} fontWeight={"semibold"}>
                {name}
            </Text>
        </Box>
    );
};

export default File;
