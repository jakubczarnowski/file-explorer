import { Box, Flex, Stack, StackItem, Text } from "@chakra-ui/react";
import { usePathContext } from "../hooks/usePathContext";
import { FileInfo } from "../providers/PathProvider/PathContext.types";
import { mapFileTypeToIcon } from "../utils/utils";
import { File } from "./";

const MainView = () => {
    const { changeCurrentPath, openFile, files } = usePathContext();
    const handleDoubleClick = (file: FileInfo) => {
        const path = file.path;
        if (file.isDirectory) {
            changeCurrentPath(path);
            return;
        }
        openFile(path);
    };
    return (
        <Box p={5} flex={"4 1 0"} overflowX={"hidden"}>
            <Stack>
                <StackItem>
                    <Box>
                        <Flex flexWrap={"wrap"} justify={"flex-start"} mx={"auto"} alignItems={"center"}>
                            {files ? (
                                files.map((file) => (
                                    <File
                                        key={file.name}
                                        name={file.name}
                                        icon={mapFileTypeToIcon(file)}
                                        iconColor={file.isDirectory ? "yellow" : "gray"}
                                        onDoubleClick={() => handleDoubleClick(file)}
                                    />
                                ))
                            ) : (
                                <Text>There is nothing here!</Text>
                            )}
                        </Flex>
                    </Box>
                </StackItem>
            </Stack>
        </Box>
    );
};

export default MainView;
