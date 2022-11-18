import { Box, Button, Heading, VStack } from '@chakra-ui/react';
import { ListItem, UnorderedList } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import React from 'react';

export default function Dashboard() {
  const {userName}=useParams();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/topicform/${userName}`);
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
      <VStack spacing={18} align="flex-start" w="full">
        <Button w="full" variant="ghost" onClick={handleClick} colorScheme={'purple'}>
          Add Topic
        </Button>
        <Heading size={["sm","md"]}>{userName}'s Topics</Heading>

        <UnorderedList spacing={2}>
          <ListItem>Lorem ipsum dolor sit amet</ListItem>
          <ListItem>Consectetur adipiscing elit</ListItem>
          <ListItem>Integer molestie lorem at massa</ListItem>
          <ListItem>Facilisis in pretium nisl aliquet</ListItem>
        </UnorderedList>
      </VStack>
    </Box>
  );
}
