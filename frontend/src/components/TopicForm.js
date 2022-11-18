import { Box, Button, Heading, VStack, Input, Textarea } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';


import React from 'react';

export default function TopicForm() {
  const {userName}=useParams();
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
      <VStack spacing={18} align="center" justifyContent="center" w="full">
        <Heading
          size="md"
          border={['none', '1px']}
          borderColor={['', 'gray.300']}
          borderRadius={10}
          w="auto"
          p={4}
          alignContent="center"
        >
          Add new Topic
        </Heading>

        <Input type={'text'} placeholder='Enter topic name...'/>
        <Textarea placeholder='Enter topic content...'/>
        <Button w="full" onClick={handleClick} variant="ghost" colorScheme={'purple'}>
          Add Topic
        </Button>
      </VStack>
    </Box>
  );
}
