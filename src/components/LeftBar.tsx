import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    Show,
    Text,
    Stack,
    StackItem,
} from "@chakra-ui/react";
const LeftBar = () => {
    return (
        <Show above={"sm"}>
            <Box p={5} w={"100%"} flex={"1 1 0"}>
                <Accordion allowMultiple>
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box flex="1" textAlign="left">
                                    Fast Access
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            <Stack ml={2}>
                                <StackItem>Downloads</StackItem>
                                <StackItem>Desktop</StackItem>
                                <StackItem>Documents</StackItem>
                            </Stack>
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box
                                    flex="1"
                                    textAlign="left"
                                    display={"flex"}
                                    alignItems={"center"}
                                    flexDirection={"row"}
                                    justifyContent={"space-between"}
                                >
                                    <Text>Favorites</Text>
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            <Stack ml={2}>
                                <StackItem>Downloads</StackItem>
                                <StackItem>Desktop</StackItem>
                                <StackItem>Documents</StackItem>
                            </Stack>
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </Box>
        </Show>
    );
};

export default LeftBar;
