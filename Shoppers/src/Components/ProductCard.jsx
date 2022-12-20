import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
} from '@chakra-ui/react';
import {Link as RouterLink} from "react-router-dom"



export default function ProductCard({id,category,image,title,price, description}) {
  return (
    <Center py={12}>
      
      <RouterLink to={`/products/${id}`}>
      <Box
        role={'group'}
        p={0}
        maxW={'340px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'0'}
        rounded={'lg'}
        pos={'relative'}
        zIndex={1}
      //   border={"1px solid red"}
        h={"540px"}
        >
        <Box
          rounded={'1g'}
          mt={-12}
          pos={'relative'}
          height={'410px'}
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
            rounded={'0g'}
            height={440}
            width={300}
            objectFit={'cover'}
            src={image}
          />
        </Box>
        <Stack pt={10} align={'flex-start'}>
          <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
            {category}
          </Text>
          <Heading fontSize={'md'} fontFamily={'body'} fontWeight={500}>
            {title}
          </Heading>
          <Stack direction={'row'} align={'center'}>
            <Text fontWeight={800} fontSize={'md'}>
            ₹{price}
            </Text>
            <Text textDecoration={'line-through'} color={'gray.600'}>
              {Math.floor(Math.random()*1000)}
            </Text>
          </Stack>
        </Stack>
      </Box>
      </RouterLink>
      
    </Center>
  );
}