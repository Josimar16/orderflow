import { Box, Flex } from '@chakra-ui/react';

interface ItemProps {
  sender_id: string;
  body: string;
  date: string;
}

interface UserProps {
  id: string;
  name: string;
  avatar: string;
}

interface BoxMessageProps {
  item: ItemProps;
  user: UserProps;
}

export function BoxMessage({ item, user }: BoxMessageProps) {
  return (
    <Box
      marginBottom="0.625rem"
      as={Flex}
      justifyContent={user.id === item.sender_id ? 'flex-end' : 'flex-start'}
    >
      <Box
        bg="gray.600"
        borderRadius={8}
        boxShadow="0 1px 1px gray.900"
        as={Flex}
        flexDirection="column"
        padding="0.25rem"
        maxWidth="90%"
      >
        <Box
          fontSize="0.875rem"
          margin="0.375rem 2.5rem 0.375rem 0.375rem"
          color="gray.100"
        >
          {item.body}
        </Box>
        <Box
          fontSize="0.75rem"
          color="#999"
          marginRight="0.375rem"
          textAlign="right"
          height="1 rem"
          marginTop="-1rem"
        >
          {item.date}
        </Box>
      </Box>
    </Box>
  );
}