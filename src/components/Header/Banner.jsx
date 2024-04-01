import { Box, Button, Img, Text } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";

const Banner = () => {
    const {products} = useSelector((state) => state.products)

    return (
        <>
            <Box background={"#F2F0F1"}>
                <Box display={"flex"} flexDirection={{base: 'column', lg:'row'}} width={"90%"} alignItems={"center"} marginX={"auto"} padding={'30px 10px'}>
                    <Box width={{md:'100%', lg:'60%'}} display={"flex"} flexDirection={"column"} justifyContent={"flex-start"} alignItems={"flex-start"} padding={'30px 0px'}>
                        <Text textColor={"#222"} fontSize={{base:"34px", md:'64px'}} lineHeight={{base:'54px', md:"64px"}}fontWeight={"700"}>
                            Для клиентов MacBro
                        </Text>
                        <Text textColor={"#00000099"} marginTop={"20px"}>
                            Самый качественный магазин техники в Узбекистане. Служба доставки по всему Узбекистану.
                        </Text>
                        <Button display={"flex"} width={{sm:'auto', base:'100%'}} justifyContent={"center"} alignItems={"center"} background={"#000000"} textColor={"#fff"} padding={"16px 54px"} borderRadius={"62px"} _hover={{ background: "#000000" }} marginTop={"25px"}>
                            Купить сейчас
                        </Button>
                    </Box>
                    <Box width={{base:'100%', md:'40%'}}>
                        <Img width={"100%"} height={"100%"} src="https://brostore.uz/cdn/shop/files/5_558fbb11-1a32-459c-8602-1e6f84506b6a_345x_crop_center.png?v=1700566370" />
                    </Box>
                </Box>
            </Box>
        </>
    );
};

export default Banner;
