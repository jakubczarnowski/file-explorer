import { HStack, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { FaArrowLeft, FaArrowRight, FaArrowUp } from "react-icons/fa";

import { usePathContext } from "../../hooks/usePathContext";
import Pathbar from "./Pathbar";
import Searchbar from "./Searchbar";

const MenuBar = () => {
    const { goUp, goBack, goForward, canGoBack, canGoForward, canGoUp } = usePathContext();

    return (
        <HStack align={"center"} justify={"space-around"} p={2} gap={"5px"} mt={"32px"}>
            <MenuIcon icon={FaArrowLeft} onClick={() => goBack()} disabled={!canGoBack} />
            <MenuIcon icon={FaArrowRight} onClick={() => goForward()} disabled={!canGoForward} />
            <MenuIcon icon={FaArrowUp} onClick={() => goUp()} disabled={!canGoUp} />
            <Pathbar />
            <Searchbar />
        </HStack>
    );
};

type MenuIconProps = {
    icon: IconType;
    onClick?: () => void;
    disabled?: boolean;
};
const MenuIcon = ({ icon, onClick, disabled }: MenuIconProps) => {
    return (
        <Icon
            _hover={{ bgColor: "hover" }}
            onClick={() => !disabled && onClick && onClick()}
            borderRadius={"md"}
            w={"25px"}
            h={"25px"}
            p={1}
            fill={disabled ? "whiteAlpha.300" : ""}
            as={icon}
        />
    );
};

export default MenuBar;
