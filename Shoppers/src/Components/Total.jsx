import React from 'react';
import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
    Flex,
    Button,
    SimpleGrid,
  } from "@chakra-ui/react";
//   import { Modal } from '@chakra-ui/react';
  import Modal from "./Modal"

const Total = ({quantity,price}) => {
  return (
    <Box>
    <Box
      padding={6}
      lineHeight={7}
      boxShadow={"2xl"}
      w={"50%"}
      ml={"240px"}
      alignSelf={"flex-end"}
      border={"0px solid black"}
    >
      <Flex w={300} margin={"auto"} justifyContent={"space-between"}>
        <Text>Sub Total</Text>
        <Text> ₹{quantity * price}</Text>
      </Flex>
      <Flex w={300} margin={"auto"} justifyContent={"space-between"}>
        <Text>Shipping</Text>
        <Text>TBD</Text>
      </Flex>
      <Flex w={300} margin={"auto"} justifyContent={"space-between"}>
        <Text>Estimated Tax</Text>
        <Text>₹0.00</Text>
      </Flex>
      <Flex w={300} margin={"auto"} justifyContent={"space-between"}>
        <Text>Total Price</Text>
        <Text>₹{quantity * price}</Text>
      </Flex>

      {/* <Button alignSelf={"center"} margin={"auto"} mt={10} fontSize={18}>
        PROCEED TO CHECKOUT
      </Button> */}
      <Modal text={" PROCEED TO CHECKOUT"} fontSize={18}/>
    </Box>
  </Box>
  )
}

export default Total