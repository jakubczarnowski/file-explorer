import { Icon, Input, InputGroup, InputLeftElement, InputRightElement } from "@chakra-ui/react";
import React, { useState } from "react";
import { FaArrowRight, FaSearch } from "react-icons/fa";

const Searchbar = () => {
    const [search, setSearch] = useState("");
    return (
        <InputGroup size={"sm"} maxW={"20%"}>
            <InputLeftElement children={<Icon as={FaSearch} />} />
            <Input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search" />
            {search && (
                <InputRightElement
                    children={<Icon p={2} h={"100%"} w={"100%"} _hover={{ bgColor: "hover" }} as={FaArrowRight} />}
                />
            )}
        </InputGroup>
    );
};

export default Searchbar;
