import {
    Box,
    Container,
    Link,
    SimpleGrid,
    Stack,
    Text,
    Flex,
    Tag,
    useColorModeValue,
  } from '@chakra-ui/react';
  import {
    EmailIcon
  } from '@chakra-ui/icons'
  import {IoLocationOutline} from 'react-icons/io5'
  import { ReactNode } from 'react';
  

  
  const ListHeader = ({ children }) => {
    return (
      <Text fontWeight={'500'} fontSize={'1g'} mb={2}>
        {children}
      </Text>
    );
  };
  
  export default function Footer() {
    return (
      <Box 
       //pos={"fixed"}
       mb={0}
        bg={useColorModeValue('gray.50', 'gray.900')}
        color={useColorModeValue('gray.700', 'gray.200')}>
        <Container fontSize={'xs'} as={Stack} maxW={'6xl'} py={10}>
          <SimpleGrid columns={{ base: 1, sm: 2, md: 5 }} spacing={8}>
            <Stack align={'flex-start'}>
              <ListHeader>Help</ListHeader>
              <Link href={'#'}>Track Your Orders</Link>
              <Stack direction={'row'} align={'center'} spacing={2}>
                <Link href={'#'}>Start A Return Or Exchange (US)</Link>
              </Stack>
              <Link href={'#'}>Return & Exchnages</Link>
              <Link href={'#'}>Shipping</Link>
              <Link href={'#'}>Customer Service</Link>
              <Link href={'#'}>Current Promotions</Link>
              <Link href={'#'}>Product Recalls</Link>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>About Us</ListHeader>
              <Link href={'#'}>Our Story</Link>
              <Link href={'#'}>Events</Link>
              <Link href={'#'}>A Greater Good</Link>
              <Link href={'#'}>Diversity & Inclusion</Link>
              <Link href={'#'}>Stories</Link>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>Services</ListHeader>
              <Link href={'#'}>AnthroPerks</Link>
              <Link href={'#'}>Gift Cards</Link>
              <Link href={'#'}>AnthroLiving Designer</Link>
              <Link href={'#'}>Furniture: Guides & Services</Link>
              <Link href={'#'}>Store Pickup & Collection Points</Link>
              <Link href={'#'}>Klarna</Link>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>Connect</ListHeader>
              <Link href={'#'}>Contact Us</Link>
              <Link href={'#'}>Stay Connected</Link>
              <Link href={'#'}>Careers</Link>
              <Link href={'#'}>Styling Services</Link>
              <Link href={'#'}>Request A Catalog</Link>
            </Stack>
            <Stack align={'flex-start'}>
              <Flex border={'0px solid red'} gap={2}>
              <IoLocationOutline align={'flex-start'} size={26} />
                <Link>Store Locator</Link>
              </Flex>
                
                
            <Flex border={'0px solid red'}>
            <EmailIcon ml={1} mr={5} w={5} h={5} align={'center'} /><Link>Get Email</Link>
            </Flex>
                
              
            </Stack>
          </SimpleGrid>
        </Container>
        <Box py={10}>
          <Flex
            align={'center'}
            _before={{
              content: '""',
              borderBottom: '1px solid',
              borderColor: useColorModeValue('gray.200', 'gray.700'),
              flexGrow: 1,
              mr: 8,
            }}
            _after={{
              content: '""',
              borderBottom: '1px solid',
              borderColor: useColorModeValue('gray.200', 'gray.700'),
              flexGrow: 1,
              ml: 8,
            }}>
           
          </Flex>
          <Text pt={6} fontSize={'sm'} textAlign={'center'}>
          2022 URBN.com. All Rights Reserved.
          </Text>
        </Box>
      </Box>
    );
  }