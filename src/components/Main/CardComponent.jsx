import { AiFillHeart } from "react-icons/ai";
import {
    Box,
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    IconButton,
    Img,

    Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBasket, setLike, setSave, setSelectProducts } from "../../slice/Product.Slice";
import { AiOutlineHeart } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const CardComponent = ({ element }) => {
    const { products, isLike, save, basket, isLoading } = useSelector(
        (state) => state.products
    );

    const [likes, setLikes] = useState(
        save.find((item) => +item.id === +element.id) ? true : false
    );
    const dispatch = useDispatch();

    

    return (
        <>
                    <Box display={"inline-flex"} key={element.id}>
                        <Card boxShadow={"5px 5px 9px #F0EEED"} border={"1px solid #F0EEED"}>
                            <CardHeader>
                                <Box display={"inline-flex"} background={"#F0EEED"} padding={"10px"} position={"relative"} >
                                    <NavLink 
                                    to={`/about/${element.id}`}>
                                    <Img src={element.image} width={"100%"} height={"100%"}/>
                                    </NavLink>
                                    <IconButton _hover={{ background: "#000000" }} _active={{ transform: "scale(1.1)" }} position={"absolute"} top={"5px"} right={"5px"} textColor={"#fff"} background={"#000000"} opacity={"0.5"} icon={likes ? (<AiFillHeart className="text-[crimson]" />) : (<AiOutlineHeart />)}onClick={() => {dispatch(setSave(products?.find((item) =>+item.id ===+element.id))); setLikes((prevLikes) => !prevLikes);}}/>
                                </Box>
                            </CardHeader>
                            <CardBody>
                                <Text>{element.title}</Text>
                            </CardBody>
                            <CardFooter display={"flex"} flexDirection={"column"}>
                                <Text textColor={"#000000"} marginTop={'15px'} fontSize={"24px"}>
                                    {element.price} сум
                                </Text>
                                <Button display={"flex"} justifyContent={"center"} alignItems={"center"} width={"100%"} padding={"20px"} textColor={"#fff"} background={"dodgerblue"} marginTop={"20px"} _hover={{ background: "dodgerblue" }} _active={{opacity:'0.8'}} onClick={() => {dispatch( setBasket({...products?.find( (item) => +item.id === +element.id),quantyti: 1,}));}}>
                                    Добавить в корзину
                                </Button>
                            </CardFooter>
                        </Card>
                    </Box>
        </>
    );
};

export default CardComponent;
