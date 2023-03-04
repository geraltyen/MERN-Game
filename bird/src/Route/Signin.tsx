import styles from "../Style/Signin.module.css";
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
    Image,
    useColorModeValue,
  } from '@chakra-ui/react';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

  
 const Signin = () =>{
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

  const handleSubmit = () =>{
    
  const payload = {
    email,
    password
  }
  fetch("https://busy-lime-prawn-boot.cyclic.app/users/login", {
    method:"POST",
    body : JSON.stringify(payload),
    headers:{
      "Content-type" : "application/json"
    }
  }).then(res=>res.json())
  .then(res => {
    console.log(res);
    localStorage.setItem("token",res.token);
    navigate("/");
    window.location.reload();
  })
  .catch(err=> console.log(err));


}
  
    return (
      <Flex
      className={styles.SiginContainer}
        minH={'100vh'}
        align={'center'}
        justify={'center'}>
          <Box className={styles.box} boxSize='sm' >
          <Image src='gamelogo.png' alt='Logo' />
        </Box>
        <Stack className={styles.container} spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Sign in to your account</Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              to enjoy the game
            </Text>
          </Stack>
          <Box
          className={styles.innerContainer}
            rounded={'lg'}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input type="email" value={email} onChange = {(e)=>setEmail(e.target.value)} />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" value={password} onChange = {(e)=>setPassword(e.target.value)} />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Checkbox>Remember me</Checkbox>
                  <Link color={'blue.400'}>Forgot password?</Link>
                </Stack>
                <Button
                  className={styles.signinbutton}
                  onClick={handleSubmit}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Sign in
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }
  
  export default Signin;