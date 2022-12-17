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

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={"#"}
  >
    {children}
  </Link>
);

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
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box><img src="logo.png" alt="logo" /></Box>
          <RouterLink to={"/"}>
            <Text>Home</Text>
          </RouterLink>
          <RouterLink to={"/products"}>
            <Text>Dresses</Text>
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
