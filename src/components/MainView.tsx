import { Box, Flex, Stack, StackItem } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { usePathContext } from "../hooks/usePathContext";
import { FileInfo } from "../providers/PathProvider/PathContext.types";
import { mapFileTypeToIcon } from "../utils/utils";
import { File } from "./";

const MainView = () => {
    const { currentPath, getFilesInCurrentPath } = usePathContext();
    const [files, setFiles] = useState<FileInfo[] | null>(null);
    useEffect(() => {
        getFilesInCurrentPath().then((files) => setFiles(files));
    }, [currentPath]);
    return (
        <Box p={5} flex={"4 1 0"} overflowX={"hidden"} boxSizing={"border-box"}>
            <Stack>
                <StackItem>
                    <Box>
                        <Flex flexWrap={"wrap"} justify={"flex-start"} mx={"auto"} alignItems={"center"}>
                            {files?.map((file) => (
                                <File
                                    key={file.name}
                                    name={file.name}
                                    icon={mapFileTypeToIcon(file)}
                                    iconColor={file.isDirectory ? "yellow" : "gray"}
                                />
                            ))}
                        </Flex>
                    </Box>
                </StackItem>
            </Stack>
        </Box>
    );
};

export default MainView;
