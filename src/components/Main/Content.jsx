import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getProducts from "../../axios/getProducts";
import { Box } from "@chakra-ui/react";
import VewAllProducts from "./VewAllProducts";
import getCategories from "../../axios/getCategories";

const Content = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        getProducts(dispatch);
        getCategories(dispatch)
    }, []);
    return (
        <>
            <Box>
                <VewAllProducts />
            </Box>
        </>
    );
};

export default Content;
