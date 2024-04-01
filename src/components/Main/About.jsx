import { Box, Button, Heading, IconButton, Img, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { decrementQuantity, incrementQuantity, setBasket, setSelectProducts } from "../../slice/Product.Slice";

const About = () => {
    const { products, selectProducts, basket } = useSelector((state) => state.products);
    const { productId } = useParams();
    const dispatch = useDispatch();
    const [click, setClick] = useState(false)
    console.log(productId);

    useEffect(() => {
        dispatch(setSelectProducts(products.find(item => +item.id === +productId)));

    }, [dispatch, products, productId]);

    console.log(selectProducts);
    return (
        <>
            <Box display={"grid"} gridTemplateColumns={"repeat(auto-fit, minmax(250px, 1fr))"} width={"90%"} marginX={"auto"} marginTop={"40px"} gap={"15px"} marginBottom={'20px'}>
                        <Box>
                            <Img src={selectProducts.image} width={"70%"} />
                        </Box>

                        <Box display={"flex"} flexDirection={"column"} justifyContent={'space-around'}>
                            <Box>
                                <Heading fontSize={"30px"}>
                                    {selectProducts.title}
                                </Heading>
                                <Text fontSize={"34px"} marginTop={'30px'}>{selectProducts.price} so'm</Text>
                                <Text textColor={"#00000099"} marginTop={'20px'}>
                                    {selectProducts.description}
                                </Text>
                            </Box>
                            <Box display={"flex"} alignItems={"center"} gap={'20px'}>
                                <Button marginTop={'20px'} background={"#000000"} textColor={"#fff"} _hover={{ background: "#000000" }} _active={{ opacity: "0.5" }} onClick={() => { dispatch( setBasket({ ...products?.find( (item) => +item.id === + selectProducts.id), quantyti: 1, }) ); setClick(value => !value) }}>
                                    Добавить в корзину
                                </Button>
                            </Box>
                        </Box>
            </Box>
        </>
    );
};

export default About;
