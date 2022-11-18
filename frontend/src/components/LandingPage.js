import React, { useState } from 'react';
import { Box, VStack, Heading, Text, Textarea } from '@chakra-ui/layout';
import { Button, Input } from '@chakra-ui/react';
import { FormControl, FormLabel } from '@chakra-ui/form-control';
import { useNavigate } from 'react-router-dom';

export default function LandingPage() {
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/dashboard/${userName}`);
  };

  return (
    <Box
      w={['full', 'md']}
      p={[8, 10]}
      mt={[20, '10vh']}
      mx="auto"
      border={['none', '1px']}
      borderColor={['', 'gray.300']}
      borderRadius={10}
    >
      <VStack spacing={20} align="flex-start" w="full">
        <VStack spacing={1} align={['flex-start', 'center']} w="full">
          <Heading>Login</Heading>
          <Text>Enter your username to access your dashboard</Text>
        </VStack>
        <FormControl spacing={1} >
          <FormLabel>Username</FormLabel>
          <Input
            required
            variant="flushed"
            value={userName}
            onChange={e => {setUserName(e.target.value)}}
            colorScheme={'purple'}
          />
        </FormControl>
        <Button type='submit' disabled={userName===null||""?true:false} onClick={handleClick} variant="ghost" colorScheme={'purple'}>
          Login
        </Button>
      </VStack>
    </Box>
  );
}
