import { Box, Button, Heading } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardComponent from "./CardComponent";
import { setSelectCategories } from "../../slice/Product.Slice";

const VewAllProducts = () => {
    const { products, selectCategories } = useSelector((state) => state.products);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setSelectCategories(products));
    }, []);
    return (
        <>
            <Box
                width={"90%"}
                marginX={"auto"} display={"flex"} marginTop={"40px"} flexDirection={"column"} alignItems={"center"}>
                <Heading display={"block"} textAlign={"center"} marginTop={"25px"}>
                    Все товары
                </Heading>
               
                <Box display={"grid"} width={"100%"} gridTemplateColumns={"repeat(auto-fit, minmax(200px, 1fr))"} gap={"10px"} marginTop={"20px"}>
                    { selectCategories.length >0 ? selectCategories?.map((element) => (
                        <CardComponent key={element.id} element={element} />
                    )) : 
                    products?.map((element) => (
                        <CardComponent key={element.id} element={element} />
                    ))  
                    }
                </Box>
            </Box>
        </>
    );
};

export default VewAllProducts;
