import { Box, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { IconType } from "../../shared/types";

type Props = {
    name: string;
    icon: IconType;
    onDoubleClick?: () => void;
    onRightClick?: () => void;
};

const File = ({ name, icon, onDoubleClick, onRightClick }: Props) => {
    return (
        <Box
            maxW={"100px"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            flexDir={"column"}
            p={2}
            onClick={(e) => e.type === "contextmenu" && onRightClick && onRightClick()}
            onDoubleClick={() => onDoubleClick && onDoubleClick()}
        >
            <Icon as={icon} w={"55px"} h={"55px"} mb={5} />
            <Text fontSize={{ sm: "sm", md: "lg" }} fontWeight={"semibold"}>
                {name}
            </Text>
        </Box>
    );
};

export default File;
