import { Flex, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { MdClose, MdMinimize } from "react-icons/md";
import { VscChromeMaximize } from "react-icons/vsc";

const TitleBar = () => {
    const minimize = () => {
        window.windowControl.minimize();
    };
    const maximize = () => {
        window.windowControl.maximize();
    };
    const close = () => {
        window.windowControl.close();
    };
    return (
        <Flex
            id="drag-region"
            position={"fixed"}
            justifyContent={"space-between"}
            backgroundColor={"background"}
            style={{ MozWindowDragging: "drag" }}
            h={"32px"}
            zIndex={10}
            w={"100vw"}
            ml={2}
            p={2}
        >
            <Text userSelect={"none"}>File Explorer</Text>
            <Flex alignItems={"center"} mr={"30px"} gap={"10px"}>
                <Icon
                    onClick={minimize}
                    w={"20px"}
                    h={"20px"}
                    _hover={{ bgColor: "#FFF" }}
                    borderRadius={"md"}
                    as={MdMinimize}
                />
                <Icon
                    onClick={maximize}
                    w={"20px"}
                    h={"20px"}
                    _hover={{ bgColor: "hover" }}
                    borderRadius={"md"}
                    as={VscChromeMaximize}
                />
                <Icon
                    onClick={() => close()}
                    w={"20px"}
                    h={"20px"}
                    _hover={{ bgColor: "hover" }}
                    borderRadius={"md"}
                    as={MdClose}
                />
            </Flex>
        </Flex>
    );
};

export default TitleBar;
