import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
  } from '@chakra-ui/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
  
 
  
  export default function Cart() {

    const {id} = useParams();
   const [cart, setCart] = useState([]);

useEffect(()=>{
  axios.get(`https://fakestoreapi.com/products/${id}`)
  .then((res)=>{
     setCart(res.data)
  })
  .catch((err)=>console.log(err))
},[id])
    
const {category,image,title,price, description} = cart;

    return (
      <Center py={12}>
        <Box
          role={'group'}
          p={6}
          maxW={'330px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'lg'}
          pos={'relative'}
          zIndex={1}>
          <Box
            rounded={'lg'}
            mt={-12}
            pos={'relative'}
            height={'230px'}
            _after={{
              transition: 'all .3s ease',
              content: '""',
              w: 'full',
              h: 'full',
              pos: 'absolute',
              top: 5,
              left: 0,
        
              filter: 'blur(15px)',
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: 'blur(20px)',
              },
            }}>
            <Image
              rounded={'lg'}
              height={230}
              width={282}
              objectFit={'cover'}
              src={image}
            />
          </Box>
          <Stack pt={10} align={'center'}>
            <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
              {category}
            </Text>
            <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
             {title}
            </Heading>
            <Stack direction={'row'} align={'center'}>
              <Text fontWeight={800} fontSize={'xl'}>
                {price}
              </Text>
              <Text textDecoration={'line-through'} color={'gray.600'}>
                {Math.floor(Math.random()*1000)}
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Center>
    );
  }