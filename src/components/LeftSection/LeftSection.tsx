import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    Show,
    Text,
} from "@chakra-ui/react";

import CommonRoutes from "./CommonRoutes";

const LeftSection = () => {
    return (
        <Show above={"sm"}>
            <Box p={5} w={"100%"} flex={"1 1 0"}>
                <Accordion allowMultiple>
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box flex="1" textAlign="left">
                                    <Text sx={{ userSelect: "none" }}>Fast Access</Text>
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            <CommonRoutes />
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </Box>
        </Show>
    );
};

export default LeftSection;
