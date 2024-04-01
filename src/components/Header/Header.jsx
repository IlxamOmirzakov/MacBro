import { AiOutlineHeart } from "react-icons/ai";
import { SlBasket } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { Box, Heading, Icon, IconButton, Input, InputGroup, InputRightElement,} from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    
    return (
        <Box position={"sticky"} top={"10px"} zIndex={"222"} display={"flex"} width={"90%"} alignItems={"center"} marginX={"auto"} justifyContent={"space-between"} padding={"10px"}>
            <NavLink to={"/"}>
                <Heading fontSize={"38px"} fontWeight={"700"} lineHeight={"38.4px"}>
                    MacBro
                </Heading>
            </NavLink>
            <Box display={{ base: "none", md: "flex" }}>
                <ul className="flex items-center gap-[15px]">
                    <li className="text-[14px] text-[#222]">Shop</li>
                    <li className="text-[14px] text-[#222]">On Sale</li>
                    <li className="text-[14px] text-[#222]">New Arrivales</li>
                    <li className="text-[14px] text-[#222]">Brands</li>
                </ul>
            </Box>
            <Box display={{ base: "none", sm: "flex" }} alignItems={"center"}>
                <InputGroup>
                    <InputRightElement>
                        <Icon as={BsSearch} />
                    </InputRightElement>
                    <Input type="search" placeholder="Поиск товаров..." background={"#F0F0F0"}/>
                </InputGroup>
            </Box>
            <Box display={"flex"} alignItems={"center"} gap={"5px"}>
                <NavLink to={"/basket"}>
                    <IconButton icon={<SlBasket />} />
                </NavLink>
                <NavLink to={"/save"}>
                    <IconButton icon={<AiOutlineHeart />} />
                </NavLink>
            </Box>
        </Box>
    );
};

export default Header;
