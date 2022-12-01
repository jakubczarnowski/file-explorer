import { Box, Show, Stack, StackItem } from "@chakra-ui/react";

const LeftBar = () => {
    return (
        <Show above={"sm"}>
            <Box p={5} w={"100%"} flex={"1 1 0"}>
                <Stack>
                    <StackItem>Downloads</StackItem>
                    <StackItem>Desktop</StackItem>
                    <StackItem>Documents</StackItem>
                </Stack>
            </Box>
        </Show>
    );
};

export default LeftBar;
