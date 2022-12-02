import { Box, Icon, Text } from "@chakra-ui/react";
import React from "react";

import { Props } from "./File.types";

const File = ({ name, icon, onDoubleClick, iconColor }: Props) => {
    return (
        <Box
            w={"100px"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            borderRadius={"md"}
            flexDir={"column"}
            _hover={{ backgroundColor: "hover" }}
            p={2}
            m={2}
            textAlign={"center"}
            onDoubleClick={() => onDoubleClick && onDoubleClick()}
        >
            <Icon color={iconColor} as={icon} w={"75px"} h={"75px"} mb={2} />
            <Text w={"100%"} noOfLines={2} sx={{ userSelect: "none" }} fontSize={"sm"} fontWeight={"semibold"}>
                {name}
            </Text>
        </Box>
    );
};

export default File;
