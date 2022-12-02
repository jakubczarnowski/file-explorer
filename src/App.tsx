import { Box, useColorMode } from "@chakra-ui/react";
import { useEffect } from "react";
import { LeftBar, MainView, MenuBar } from "./components";
import { BaseLayout } from "./layout";

function App() {
    const colorMode = useColorMode();
    // Default color mode somehow doesn't work, so I have to set it manually
    useEffect(() => {
        colorMode.setColorMode("dark");
    }, []);
    return (
        <BaseLayout>
            <MenuBar />
            <Box display={"flex"} flexDir={"row"} alignItems={"stretch"} minH={"100%"}>
                <LeftBar />
                <MainView />
            </Box>
        </BaseLayout>
    );
}

export default App;
