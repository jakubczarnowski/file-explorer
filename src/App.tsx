import React from "react";
import LeftBar from "./components/LeftBar";
import MainView from "./components/MainView";
import BaseLayout from "./layout/BaseLayout";

function App() {
    return (
        <BaseLayout>
            <LeftBar />
            <MainView />
        </BaseLayout>
    );
}

export default App;
