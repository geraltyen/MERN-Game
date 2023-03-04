import styles from "../Style/Signup.module.css";
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Link,
    Image
  } from '@chakra-ui/react';
  import { useState } from 'react';
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
  
 const Signup = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = () =>{
      const payload = {
        fname,
        lname,
        email,
        password
      }
      fetch("https://busy-lime-prawn-boot.cyclic.app/users/register", {
        method:"POST",
        body : JSON.stringify(payload),
        headers:{
          "Content-type" : "application/json"
        }
      }).then(res=>res.json())
      .then(res => console.log(res))
      .catch(err=> console.log(err));
    }
  
    return (
      <Flex
        className={styles.SigupContainer}
        minH={'100vh'}
        align={'center'}
        justify={'center'}>
        <Box className={styles.box} boxSize='sm' >
          <Image src='gamelogo.png' alt='Logo' />
        </Box>
        <Stack className={styles.container} spacing={4} mx={'auto'} maxW={'lg'} py={1} px={2}>
          <Stack align={'center'}>
            <Heading fontSize={'3xl'}>
              Sign up
            </Heading>
          </Stack>
          <Box
            className={styles.innerContainer}
            rounded={'lg'}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <HStack>
                <Box>
                  <FormControl id="firstName" isRequired>
                    <FormLabel>First Name</FormLabel>
                    <Input type="text" value={fname} onChange = {(e)=>setFname(e.target.value)} />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="lastName">
                    <FormLabel>Last Name</FormLabel>
                    <Input type="text" value={lname} onChange = {(e)=>setLname(e.target.value)} />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input type="email" value={email} onChange = {(e)=>setEmail(e.target.value)} />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input type={showPassword ? 'text' : 'password'} value={password} onChange = {(e)=>setPassword(e.target.value)} />
                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }>
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                onClick={handleSubmit}
                  loadingText="Submitting"
                  size="lg"
                  color={'black'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Sign up
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={'center'}>
                  Already a user? <Link color={'blue.900'}>Login</Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }

  export default Signup