import { AiOutlineDelete } from "react-icons/ai"; 
import { AiFillGift } from "react-icons/ai"; 
import { AiFillMinusCircle } from "react-icons/ai"; 
import { AiFillPlusCircle } from "react-icons/ai"; 
import { Box, Button, Heading, IconButton, Img, Input, InputGroup, InputLeftElement, InputRightElement, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrementQuantity, incrementQuantity, removeBasket, setBasket, setTotal } from "../../slice/Product.Slice";

const Basket = () => {
    const { products, save, basket, totalPrice } = useSelector((state) => state.products);
    const dispatch = useDispatch()
    useEffect(() =>{
        function totalPriceFunction(){
          let total = 0;
          basket.forEach(element => {
            total += element.price * element.quantyti
          });
          return total
        }
        let newTotalPrice = totalPriceFunction();
        dispatch(setTotal(newTotalPrice))
    } ,[products, dispatch])
      function removeBasketFunction(id){
        let data = basket.find((item) => +item.id === +id)
        let newTotalPrice = totalPrice - data.price * data.quantyti;
        dispatch(setTotal(newTotalPrice))
        dispatch(removeBasket(basket.filter(item => item.id !== id)))
      }
    return (
        <>
            <Box width={'90%'} marginX={'auto'}>
            <Heading fontSize={'24px'} marginTop={'20px'}>Ваша корзина</Heading>
            <Box display={'flex'} marginTop={'20px'} width={'100%'} gap={'10px'} flexDirection={{base:'column', md:'row'}}>
                <Box width={{base:'100%', md:'50%'}} height={'50vh'} overflowY={'auto'} overflowX={'auto'} display={'flex'} flexDirection={'column'} gap={'15px'} border={'1px solid #0000001A'} padding={'20px 24px'}>
                   {
                    basket.length>0 ? 
                    basket?.map(item => (
                      <Box key={item.id} display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
                          <Box display={'flex'} alignItems={'center'}>
                              <Box border={'1px solid'} borderColor={'gray.300'} padding={'5px'} borderRadius={'10px'}>
                                  <Img src={item.image} width={'80px'} height={'80px'}/>
                              </Box>
                              <Box display={'flex'} flexDirection={'column'} gap={'10px'} alignItems={'start'} marginLeft={'5px'}>
                                  <Text fontSize={{base:'12px', md:'16px'}}>{item.title}</Text>
                                  <Text fontSize={{base:'12px', md:'16px'}}>{(item.price)} сум</Text>
                              </Box>
                          </Box>
                          <Box display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'} gap={'15px'} >
                              <button onClick={() => removeBasketFunction(item.id)}>
                                <AiOutlineDelete color="red"/>
                              </button>
                              <Box display={'flex'} alignItems={'center'} gap={'5px'} borderRadius={'10px'}>
                                  <IconButton icon={<AiFillMinusCircle />} onClick={() => dispatch(decrementQuantity(item.id))}/>
                                  <Text>{parseInt(item.quantyti)}</Text>
                                  <IconButton  icon={<AiFillPlusCircle />} onClick={() => dispatch(incrementQuantity(item.id))}/>
                              </Box>
                          </Box>
                  </Box>
                      ))
                      : <Heading textAlign={'center'} fontSize={'25px'}>Не найдено</Heading>
                   }

                </Box>
                <Box width={{base:'100%', md:'50%'}} border={'1px solid #0000001A'} padding={'20px 24px'} 
                    display={'flex'} flexDirection={'column'} justifyContent={'space-between'}>
                    <Heading fontSize={'16px'}>Итог заказа</Heading>
                    <Box display={'flex'} flexDirection={'column'}>
                        <Box display={'flex'} justifyContent={'space-between'} padding={'10px'} alignItems={'center'} textColor={'#00000099'}>
                            <Text>Промежуточный итог</Text>
                            <Text>{totalPrice} сум</Text>
                        </Box>
                        <Box display={'flex'} justifyContent={'space-between'} padding={'10px'} alignItems={'center'} textColor={'#00000099'}>
                            <Text>Скидка (-20%)</Text>
                            <Text textColor={'crimson'}>0</Text>
                        </Box>
                        <Box display={'flex'} justifyContent={'space-between'} padding={'10px'} alignItems={'center'} textColor={'#00000099'}>
                            <Text>Плата за доставку</Text>
                            <Text>0</Text>
                        </Box>
                    </Box>
                    <Box display={'flex'} justifyContent={'space-between'} padding={'10px'} alignItems={'center'}>
                        <Text>Общий</Text>
                        <Text>{totalPrice} сум</Text>
                    </Box>
                    <Box marginTop={'10px'} display={'flex'} alignItems={'center'} gap={'10px'}>
                        <InputGroup>
                            <InputLeftElement>
                                <AiFillGift />
                            </InputLeftElement>
                            <Input type="text" background={'#F0F0F0'} placeholder="Добавить промокод" borderRadius={'20px'}/>
                        </InputGroup>
                        <Button size={'md'} borderRadius={'62px'}  padding={'10px 20px'}  background={'#000000'}  textColor={'#fff'} _hover={{background:'#000000'}} _active={{opacity:'0.5'}}>
                        Применять
                        </Button>
                    </Box>
                    <Button padding={'24px'} textColor={'#fff'} marginTop={'15px'} _hover={{background:'#000000'}} _active={{opacity:'0.5'}} background={'#000000'} borderRadius={'62px'}>Перейти к оформлению заказа</Button>
                </Box>
            </Box>
            </Box>
        </>
    );
};

export default Basket;
