import { ReactNode } from "react";
import {
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Text,
  Image,Container
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { IoBagOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";



export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Container bgColor={"white"} pos={"fixed"} zIndex={"10"} top={"0"} maxW={"100%"} border={"0px solid red"} >
      <RouterLink to={"/login"}>
        <Button ml={"1325"} bgColor={"transparent"}>
          <FaRegUser /> Sign In / Sign Up
        </Button>
      </RouterLink>

      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex border={"0px solid red"} h={16} alignItems={"center"} justifyContent={"space-evenly"}>
          <RouterLink to={"/"}>
          <Box cursor={"pointer"} w={"15%"}><img src="https://drive.google.com/uc?export=view&id=1i7BmWXqMX7xL-dnWEJ8pSm0OXPhbW-7u" alt="logo" /></Box>
          </RouterLink>
         
          <RouterLink to={"/"}>
            <Text _hover={{color:"green"}}>Home</Text>
          </RouterLink>
          <RouterLink to={"/products"}>
            <Text  _hover={{color:"green"}}>Dresses</Text>
          </RouterLink>
          <RouterLink >
            <Text  _hover={{color:"green"}}>Accessories</Text>
          </RouterLink>
          <RouterLink>
            <Text  _hover={{color:"green"}}>Shoes</Text>
          </RouterLink>
         
         
          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
            </Stack>
           <RouterLink to={"/cart"}>
           <IoBagOutline size={"20"} />
            </RouterLink> 
          </Flex>
        </Flex>
      </Box>
    </Container>
  );
}
