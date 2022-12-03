import { Flex, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { MdClose, MdMinimize } from "react-icons/md";
import { VscChromeMaximize } from "react-icons/vsc";

const TitleBar = () => {
    const minimize = () => {
        window.windowControl.minimizeWindow();
    };
    const maximize = () => {
        window.windowControl.maximizeWindow();
    };
    const close = () => {
        window.windowControl.closeWindow();
    };
    return (
        <Flex
            className="draggable"
            top={"0px"}
            position={"fixed"}
            justifyContent={"space-between"}
            backgroundColor={"background"}
            h={"32px"}
            zIndex={10}
            w={"100vw"}
            ml={2}
            p={2}
        >
            <Text userSelect={"none"}>File Explorer</Text>

            <Flex alignItems={"center"} mr={"30px"} gap={"10px"} className="notDraggable">
                <Icon
                    _hover={{ backgroundColor: "hover" }}
                    onClick={minimize}
                    w={"20px"}
                    h={"20px"}
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
