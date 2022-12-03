import { Icon, Input, InputGroup, InputLeftElement, InputRightElement } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { AiOutlineStar } from "react-icons/ai";
import { GoFileDirectory } from "react-icons/go";
import { useDebounce } from "../../hooks/useDebounce";
import { usePathContext } from "../../hooks/usePathContext";

const Pathbar = () => {
    const { currentPath, changeCurrentPath } = usePathContext();
    const [path, setPath] = React.useState(currentPath);
    const debouncedPath = useDebounce(path, 500);
    useEffect(() => {
        changeCurrentPath(debouncedPath);
    }, [debouncedPath]);
    useEffect(() => {
        setPath(currentPath);
    }, [currentPath]);
    return (
        <InputGroup size={"sm"}>
            <InputLeftElement children={<Icon as={GoFileDirectory} />} />
            <Input value={path} onChange={(e) => setPath(e.target.value)} _focusVisible={{ borderColor: "hover" }} />
            <InputRightElement children={<Icon as={AiOutlineStar} />} />
        </InputGroup>
    );
};

export default Pathbar;
