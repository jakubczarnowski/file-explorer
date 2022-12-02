import { HStack, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { FaArrowLeft, FaArrowRight, FaArrowUp } from "react-icons/fa";
import Pathbar from "./Pathbar";
import Searchbar from "./Searchbar";

const MenuBar = () => {
    return (
        <HStack align={"center"} justify={"space-around"} p={2} gap={"5px"} h={"50px"}>
            <MenuIcon icon={FaArrowLeft} />
            <MenuIcon icon={FaArrowRight} />
            <MenuIcon icon={FaArrowUp} />
            <Pathbar />
            <Searchbar />
        </HStack>
    );
};

type MenuIconProps = {
    icon: IconType;
    onClick?: () => void;
};
const MenuIcon = ({ icon, onClick }: MenuIconProps) => {
    return (
        <Icon
            _hover={{ bgColor: "hover" }}
            onClick={() => onClick && onClick()}
            borderRadius={"md"}
            w={"25px"}
            h={"25px"}
            p={1}
            as={icon}
        />
    );
};

export default MenuBar;
