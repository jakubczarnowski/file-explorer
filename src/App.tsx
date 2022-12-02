import { Box } from "@chakra-ui/react";
import { LeftBar, MainView, MenuBar } from "./components";
import { BaseLayout } from "./layout";

function App() {
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
