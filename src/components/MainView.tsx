import { Box, Flex, Stack, StackItem } from "@chakra-ui/react";
import { AiFillFilePdf } from "react-icons/ai";
import { GoFileDirectory } from "react-icons/go";
import { File } from "./";

const MainView = () => {
    return (
        <Box p={5} flex={"4 1 0"} overflowX={"hidden"} boxSizing={"border-box"}>
            <Stack>
                <StackItem>
                    <Box>
                        <Flex flexWrap={"wrap"} justify={"flex-start"} mx={"auto"} alignItems={"center"}>
                            <File name={"text.txt"} icon={GoFileDirectory} iconColor={"yellow"} />

                            <File name={"nowa.pdf"} icon={AiFillFilePdf} />

                            <File name={"123.txt"} icon={GoFileDirectory} iconColor={"yellow"} />

                            <File name={"fewf.txt"} icon={GoFileDirectory} iconColor={"yellow"} />

                            <File
                                name={
                                    "feasdasdasdasdasdasdasdasdwffeasdasdasdasdasdasdasdasdwffeasdasdasdasdasdasdasdasdwf.txt"
                                }
                                icon={GoFileDirectory}
                                iconColor={"yellow"}
                            />

                            <File name={"fewf.txt"} icon={GoFileDirectory} iconColor={"yellow"} />

                            <File name={"fewf.txt"} icon={GoFileDirectory} iconColor={"yellow"} />
                        </Flex>
                    </Box>
                </StackItem>
            </Stack>
        </Box>
    );
};

export default MainView;
