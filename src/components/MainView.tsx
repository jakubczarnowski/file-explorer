import { Box, SimpleGrid, Stack, StackItem } from "@chakra-ui/react";
import { GoFileDirectory } from "react-icons/go";
import { AiFillFilePdf } from "react-icons/ai";
import File from "./File/File";

const MainView = () => {
    return (
        <Box p={5} flex={"3 1 0"} border={"2px"} borderColor={"#2E282A"}>
            <Stack>
                <StackItem>Search</StackItem>
                <StackItem>
                    <Box>
                        <SimpleGrid columns={[2, 2, 3, 4, 5]} gap={6}>
                            <Box p={5}>
                                <File name={"text.txt"} icon={GoFileDirectory} />
                            </Box>
                            <Box p={5}>
                                <File name={"nowa.pdf"} icon={AiFillFilePdf} />
                            </Box>
                            <Box p={5}>
                                <File name={"123.txt"} icon={GoFileDirectory} />
                            </Box>
                            <Box p={5}>
                                <File name={"fewf.txt"} icon={GoFileDirectory} />
                            </Box>
                            <Box p={5}>
                                <File name={"fewf.txt"} icon={GoFileDirectory} />
                            </Box>
                            <Box p={5}>
                                <File name={"fewf.txt"} icon={GoFileDirectory} />
                            </Box>
                            <Box p={5}>
                                <File name={"fewf.txt"} icon={GoFileDirectory} />
                            </Box>
                        </SimpleGrid>
                    </Box>
                </StackItem>
            </Stack>
        </Box>
    );
};

export default MainView;
