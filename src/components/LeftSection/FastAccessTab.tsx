import React from "react";
import { usePathContext } from "../../hooks/usePathContext";
import { Text } from "@chakra-ui/react";
type Props = {
    children: React.ReactNode;
    path: string;
};

const FastAccessTab = ({ children, path }: Props) => {
    const { changeCurrentPath } = usePathContext();
    const handleClick = () => {
        changeCurrentPath(path);
    };
    return (
        <Text
            onClick={handleClick}
            _hover={{ bgColor: "hover" }}
            w={"100%"}
            pl={1}
            borderRadius={"md"}
            sx={{ userSelect: "none" }}
        >
            {children}
        </Text>
    );
};

export default FastAccessTab;
