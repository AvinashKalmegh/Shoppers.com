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

export default function Cart() {
  const { id } = useParams();
  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState(1);

  const handleQuantity = (value) => {
    setQuantity(quantity + value);
  };

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        setCart(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const { category, image, title, price, description } = cart;

  return (
    <div style={{ marginTop: "170px", marginBottom: "70px" }}>
      <SimpleGrid
        justifyContent={"center"}
        align={"center"}
        margin={"auto"}
        maxW={"8xl"}
        border={"0px solid red"}
        columns={{ base: 1, sm: 1, md: 2 }}
        columnGap={10}
        spacing={9}
      >
        <Box
          role={"group"}
          p={6}
          //   maxW={'330px'}
          w={"full"}
          bg={useColorModeValue("white", "gray.800")}
          boxShadow={"2xl"}
          rounded={"lg"}
          pos={"relative"}
          zIndex={1}
        >
          <Box
            rounded={"lg"}
            mt={-12}
            pos={"relative"}
            height={"230px"}
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
              rounded={"lg"}
              height={230}
              width={282}
              objectFit={"cover"}
              src={image}
            />
          </Box>
          <Stack pt={10} align={"center"}>
            <Text
              color={"gray.500"}
              fontSize={"sm"}
              textTransform={"uppercase"}
            >
              {category}
            </Text>
            <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
              {title}
            </Heading>
            <Stack direction={"row"} align={"center"}>
              <Text fontWeight={800} fontSize={"xl"}>
                {price}
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
              <Text>{quantity}</Text>
              <Button onClick={() => handleQuantity(1)}>+</Button>
            </Flex>
          </Stack>
        </Box>
        <Box>
          <Box
            padding={6}
            lineHeight={7}
            boxShadow={"2xl"}
            w={350}
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
      </SimpleGrid>
      
    </div>
  );
}
