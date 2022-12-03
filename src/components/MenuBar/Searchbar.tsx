import { Icon, Input, InputGroup, InputLeftElement, InputRightElement } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FaArrowRight, FaSearch } from "react-icons/fa";
import { usePathContext } from "../../hooks/usePathContext";

const Searchbar = () => {
    const [search, setSearch] = useState("");
    const { setSearchValue } = usePathContext();
    const handleSearch = () => {
        setSearchValue(search);
    };
    useEffect(() => {
        if (search === "") {
            setSearchValue("");
        }
    }, [search]);
    return (
        <InputGroup size={"sm"} maxW={"20%"}>
            <InputLeftElement children={<Icon as={FaSearch} />} />
            <Input
                _focusVisible={{ borderColor: "hover" }}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search"
            />
            {search && (
                <InputRightElement
                    onClick={handleSearch}
                    children={<Icon p={2} h={"100%"} w={"100%"} _hover={{ bgColor: "hover" }} as={FaArrowRight} />}
                />
            )}
        </InputGroup>
    );
};

export default Searchbar;
