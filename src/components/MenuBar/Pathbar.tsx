import { Icon, Input, InputGroup, InputLeftElement, InputRightElement } from "@chakra-ui/react";
import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import { GoFileDirectory } from "react-icons/go";

const Pathbar = () => {
    return (
        <InputGroup size={"sm"}>
            <InputLeftElement children={<Icon as={GoFileDirectory} />} />
            <Input placeholder="C:/" />
            <InputRightElement children={<Icon as={AiOutlineStar} />} />
        </InputGroup>
    );
};

export default Pathbar;
