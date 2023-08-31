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

  async function log() {
    try {
        await post("users/login", {
            email: email,
            password: password
        }).then((res) => {
            location.href = "/";
        });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Welcome, <br /> please Log in
          </Heading>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email</FormLabel>
              <Input type="" onChange={event => setEmail(event.target.value)} />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" onChange={event => setPassword(event.target.value)} />
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
            <Stack pt={6}>
                <Text align={'center'}>
                    new here? <Link to="/signup">join US</Link>
                </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  )
}
