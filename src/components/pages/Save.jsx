import { Box, Heading } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardComponent from "../Main/CardComponent";

const Save = () => {
    const { products, save } = useSelector((state) => state.products);
    return (
        <>
            <Box width={"90%"} marginX={"auto"} display={"flex"} marginTop={"40px"} flexDirection={"column"}>
                <Heading textAlign={"center"}>Любимый</Heading>
                <Box display={"grid"} width={"100%"} gridTemplateColumns={"repeat(auto-fit, minmax(200px, 1fr))"} gap={"10px"} marginTop={"30px"} >
                    {save?.map((element) => (
                        <CardComponent element={element} key={element.id} />
                    ))}
                </Box>
            </Box>
        </>
    );
};

export default Save;
