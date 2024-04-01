import { AiFillLinkedin } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { FaTelegram } from "react-icons/fa";
import React from "react";
import { NavLink } from "react-router-dom";
import {
    accountLinks,
    customerSupportLinks,
    freeContentLinks,
    navigationLinks,
} from "./footerEl";
import { Box, Heading, Icon, Text } from "@chakra-ui/react";

const Footer = () => {
    return (
        <>
            <Box width={"100%"} background={"#F0F0F0"} paddingY={"50px"} marginTop={'30px'}>
                <Box width={"90%"} marginX={"auto"} >
                    <Box width={"100%"} display={"grid"} flexDirection={"column"} gap={'20px'} gridTemplateColumns={"repeat(auto-fit, minmax(200px, 1fr))"}>
                        <Box display={"flex"} flexDirection={"column"} justifyContent={"space-between"}>
                        <Box display={'flex'} flexDirection={'column'} gap={'10px'}>
                            <Heading>
                                <NavLink to={"/"}>MacBro</NavLink>
                            </Heading>
                            <Text fontSize={"12px"} textColor={"#00000099"}>
                                We have clothes that suits your style and which
                                you’re proud to wear. From women to men.
                            </Text>
                        </Box>
                        <Box display={"flex"} alignItems={"center"} gap={"10px"} marginTop={'15px'} >
                            <Icon as={FaTelegram} />
                            <Icon as={AiFillInstagram} />
                            <Icon as={AiFillTwitterCircle} />
                            <Icon as={AiFillLinkedin} />
                        </Box>
                    </Box>
                    
                        <Box display={"flex"} flexDirection={"column"} marginTop={"10px"} >
                            <Text textColor={"№000000"} fontWeight={"600"}>
                                Company
                            </Text>
                            {navigationLinks.map((item) => (
                                <>
                                    <Box key={item.id} marginTop={"10px"}>
                                        <NavLink to={item.url}>
                                            {item.title}
                                        </NavLink>
                                    </Box>
                                </>
                            ))}
                        </Box>
                        <Box display={"flex"} flexDirection={"column"} marginTop={"10px"} >
                            <Text textColor={"№000000"} fontWeight={"600"}>
                                Help
                            </Text>
                            {customerSupportLinks.map((item) => (
                                <>
                                    <Box key={item.id} marginTop={"10px"}>
                                        <NavLink to={item.url}>
                                            {item.title}
                                        </NavLink>
                                    </Box>
                                </>
                            ))}
                        </Box>
                        <Box display={"flex"} flexDirection={"column"} marginTop={"10px"}>
                            <Text textColor={"№000000"} fontWeight={"600"}>
                                FAQ
                            </Text>
                            {accountLinks.map((item) => (
                                <>
                                    <Box key={item.id} marginTop={"10px"}>
                                        <NavLink to={item.url}>
                                            {item.title}
                                        </NavLink>
                                    </Box>
                                </>
                            ))}
                        </Box>
                        <Box display={"flex"} flexDirection={"column"} marginTop={"10px"}>
                            <Text textColor={"№000000"} fontWeight={"600"}>
                                Resources
                            </Text>
                            {freeContentLinks.map((item) => (
                                <>
                                    <Box key={item.id} marginTop={"10px"}>
                                        <NavLink to={item.url}>
                                            {item.title}
                                        </NavLink>
                                    </Box>
                                </>
                            ))}
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    );
};

export default Footer;
