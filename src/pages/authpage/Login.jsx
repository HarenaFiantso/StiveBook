import { Link } from 'react-router-dom';
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { useState } from 'react';
import { post } from '../utils/api';

export default function SimpleCard() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function log() {
        post("users/login", {
            email: email,
            password: password
        }).then((res) => {
            console.log(res);
        })
    }

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
        <Stack spacing={4}>
            <Heading textAlign={'center'}>Welcome, please Login</Heading>
            <FormControl id="email">
              <FormLabel>email</FormLabel>
              <Input type=" " onChange={event => setEmail(event.target.value)}/>
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" onChange={event => setPassword(event.target.value)}/>
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Text color={'blue.400'}>Forgot password?</Text>
              </Stack>
              <Button
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}
                onClick={log}
                >
                Sign in
              </Button>
            </Stack>
            <Link to="/signup">Don't have an account? Sign Up</Link>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  )
}
