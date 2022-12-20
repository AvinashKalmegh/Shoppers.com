import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  VisuallyHidden,
  List,
  ListItem,
} from '@chakra-ui/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { MdLocalShipping } from 'react-icons/md';
import { useParams } from 'react-router-dom';
import {Link as RouterLink} from "react-router-dom";



let cartData = JSON.parse(localStorage.getItem("cartProduct")) || [];
export default function ProductDetail() {
 
  const {id} = useParams();
  console.log(id);

  const [product, setProduct] = useState([]);
  //const [loading, setLoading] = useState(true);
  const [btn,setBtn] = useState(false);

  const handleAddToCart = ()=>{
    setBtn("ITEM ADDED TO CART")
    cartData.push(product);
    localStorage.setItem("cartProduct",JSON.stringify(cartData));
  }
  

  useEffect(()=>{
    //setLoading(true);
   axios.get(`https://shoppers-in.onrender.com/dresses/${id}`)
   .then((res)=>{
      setProduct(res.data)
   })
   .catch((err)=>console.log(err))
  },[id]);

  const {category,image,title,price, description} = product;

  return (
    
    <Container maxW={'7xl'}>
      {/* <Loader /> */}
      <SimpleGrid
      mt={10}
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}>
        <Flex>
          <Image
            rounded={'0'}
            alt={'product image'}
            src={
              image
            }
            fit={'cover'}
            align={'center'}
            w={'100%'}
            h={{ base: '100%', sm: '400px', lg: '1000px' }}
          />
        </Flex>
        <Stack textAlign={"left"} spacing={{ base: 6, md: 10 }}>
          <Box as={'header'}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '2xl', sm: '4xl', lg: '2xl' }}>
             {title}
            </Heading>
            <Text
            mt={3}
            mb={-10}
              color={useColorModeValue('gray.900', 'gray.400')}
              fontWeight={300}
              fontSize={'2xl'}>
              ₹{price}
            </Text>
          </Box>

          <Stack textAlign={"left"}
            spacing={{ base: 4, sm: 6 }}
            direction={'column'}
            divider={
              <StackDivider
                borderColor={useColorModeValue('gray.200', 'gray.600')}
              />
            }>
            <VStack border={"0px solid red"} textAlign={"left"} spacing={{ base: 4, sm: 6 }}>
              <Text alignSelf={"flex-start"} border={"0px solid red"}
                color={useColorModeValue('gray.500', 'gray.400')}
                fontSize={'2xl'}
                fontWeight={'300'}>
                {category}
              </Text>
              
            </VStack>
            <VStack textAlign={"left"} spacing={{ base: 4, sm: 6 }}>
              <Text
                color={useColorModeValue('gray.500', 'gray.400')}
                fontSize={'xl'}
                fontWeight={'300'}>
                {description}
              </Text>
              
            </VStack>
            

          </Stack>

          {/* <RouterLink to={`/cart/${id}`}> */}
          <Button
          disabled={btn ? true : false}
          onClick={handleAddToCart}
            rounded={'none'}
            w={'full'}
            mt={8}
            size={'lg'}
            py={'7'}
            bg={useColorModeValue('gray.900', 'gray.50')}
            color={useColorModeValue('white', 'gray.900')}
            textTransform={'uppercase'}
            _hover={{
              transform: 'translateY(2px)',
              boxShadow: 'lg',
            }}>
            {btn ? "ADDED TO BASKET" : "ADD TO BASKET"}
          </Button>
          {/* </RouterLink> */}
         

          <Stack direction="row" alignItems="center" justifyContent={'center'}>
            <MdLocalShipping />
            <Text>2-3 business days delivery</Text>
          </Stack>
        </Stack>
      </SimpleGrid>
    </Container>
  );
}