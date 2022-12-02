import { Icon, Input, InputGroup, InputLeftElement, InputRightElement } from "@chakra-ui/react";
import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import { GoFileDirectory } from "react-icons/go";
import { usePathContext } from "../../hooks/usePathContext";

const Pathbar = () => {
    const { currentPath } = usePathContext();

    return (
        <InputGroup size={"sm"}>
            <InputLeftElement children={<Icon as={GoFileDirectory} />} />
            <Input value={currentPath} readOnly _focusVisible={{ borderColor: "hover" }} placeholder="C:/" />
            <InputRightElement children={<Icon as={AiOutlineStar} />} />
        </InputGroup>
    );
};

export default Pathbar;
