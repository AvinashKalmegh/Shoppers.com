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
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Modal from "./Modal";
import Total from "./Total";

let cartData = JSON.parse(localStorage.getItem("cartProduct")) || [];
console.log(cartData);
console.log(cartData[0].title)


export default function Cart() {
  const { id } = useParams();
  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState(1);

  const handleQuantity = (value) => {
    setQuantity(quantity + value);
  };

  // useEffect(() => {
  //   axios
  //     .get(`https://shoppers-in.onrender.com/dresses/${id}`)
  //     .then((res) => {
  //       setCart(res.data);
  //     })
  //     .catch((err) => console.log(err));
  // }, [id]);

  //const { category, image, title, price, description } = cart;
  console.log("inside retyrn", cartData)
  return (
    <div style={{ marginTop: "170px", marginBottom: "70px" }}>
    
        
     {cartData.map((ele) => (
        <SimpleGrid
          // justifyContent={"space-between"}
          // align={"center"}
          margin={"auto"}
          maxW={"100%"}
          border={"0px solid red"}
          columns={{ base: 1, sm: 1, md: 2 }}
          columnGap={10}
          spacing={9}
        >
          <Flex
            // alignItems={"flex-start"}
            border={"0px solid grey"}
            role={"group"}
            p={2}
            //   maxW={'330px'}
            maxW={"100%"}
            ml={"30px"}
            //bg={useColorModeValue("white", "gray.800")}
            boxShadow={"xl"}
            rounded={"0g"}
            pos={"relative"}
            zIndex={1}
          >
            <Box
              border={"0px solid black"}
              rounded={"lg"}
              mt={-12}
              pos={"relative"}
              height={"220px"}
              _after={{
                transition: "all .3s ease",
                content: '""',
                w: "full",
                h: "full",
                pos: "absolute",
                top: 5,
                left: 0,

                filter: "blur(15px)",
                zIndex: -1,
              }}
              _groupHover={{
                _after: {
                  filter: "blur(20px)",
                },
              }}
            >
              <Image
                rounded={"0g"}
                height={250}
                width={165}
                objectFit={"cover"}
                src={ele.image}
              />
            </Box>
            <Stack
              ml={"10px"}
              textAlign={"left"}
              alignSelf={"flex-start"}
              justifySelf={"flex-end"}
              border={"0px solid red"}
            >
              <Text
                // mt={"-40px"}
                color={"gray.500"}
                fontSize={"sm"}
                textTransform={"uppercase"}
              >
                {ele.category}
              </Text>
              <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
                {ele.title}
              </Heading>
              <Stack direction={"row"} align={"center"}>
                <Text fontWeight={800} fontSize={"xl"}>
                  ₹{ele.price}
                </Text>
                <Text textDecoration={"line-through"} color={"gray.600"}>
                  {Math.floor(Math.random() * 1000)}
                </Text>
              </Stack>
              <Flex align={"center"}>
                <Button
                  disabled={quantity === 1}
                  onClick={() => handleQuantity(-1)}
                >
                  -
                </Button>
                <Text mr={2} ml={2} fontSize={"md"} fontWeight={600}>
                  {quantity}
                </Text>
                <Button onClick={() => handleQuantity(1)}>+</Button>
              </Flex>
            </Stack>
          </Flex>
          <Total price={ele.price} quantity={quantity} />
        </SimpleGrid>
      ))} 
    </div>
  )
}
