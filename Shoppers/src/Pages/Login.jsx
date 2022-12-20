import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  // useColorModeValue,
} from "@chakra-ui/react";
import { useState, useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Components/Context/AuthContext"

export default function Login() {
  const [userId, setUserId] = useState({
    email: "",
    password: "",
  });

  const { authState, loginUser } = useContext(AuthContext);

  const handleChange = (e) => {
    setUserId({
      ...userId,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    const url = `https://reqres.in/api/login`;
    try {
      let res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "Application/json",
        },
        body: JSON.stringify({
          email: userId.email,
          password: userId.password,
        }),
      });

      let data = await res.json();
      if (data.token) {
        loginUser(data.token);
      }
    } catch (error) {
      console.log("api-eerr", error);
    }
  };

  if (authState.isAuth) {
    return <Navigate to={"/"} />;
  }
  console.log(userId, authState.isAuth);
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      // bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Sign in to your account</Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            to enjoy all of our cool <Link color={"blue.400"}>features</Link> ✌
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          // bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                onChange={handleChange}
                value={userId.email}
                name="email"
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                onChange={handleChange}
                value={userId.password}
                name="password"
              />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>Remember me</Checkbox>
                <Link color={"blue.400"}>Forgot password?</Link>
              </Stack>
              <Button
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
                onClick={handleSubmit}
              >
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}