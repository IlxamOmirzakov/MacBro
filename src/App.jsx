import React from "react";
import Header from "./components/Header/Header";
import Banner from "./components/Header/Banner";
import Content from "./components/Main/Content";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Basket from "./components/pages/Basket";
import Save from "./components/pages/Save";
import { Box } from "@chakra-ui/react";
import About from "./components/Main/About";

const App = () => {
    return (
        <>
            <Box background={'#fff'} position={'sticky'} top={'0'} zIndex={'999999'}>
                <Header />
            </Box>

            <Routes>
                <Route path="/" element={<Layout />} />
                <Route path="/basket" element={<Basket />} />
                <Route path="/save" element={<Save />} />
                <Route path="/about/:productId" element={<About />} />
            </Routes>
        </>
    );
};

export default App;
