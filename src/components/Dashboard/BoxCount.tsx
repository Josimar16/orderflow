import { Flex, FlexProps, Text, Icon } from "@chakra-ui/react";
import { RiTimeLine } from "react-icons/ri";

interface BoxCount extends FlexProps {
  title: string;
  count: number;
  color: string;
}

export function BoxCount({ title, count, color, ...rest }: BoxCount) {
  return (
    <Flex
      alignItems="flex-start"
      justifyContent="center"
      flexDirection="column"

      bgColor="gray.800"
      p={4}
      borderRadius={8}

      h="8rem"
      w="12rem"
      {...rest}
    >
      <Text mb={2} fontSize="1.25rem" overflowWrap="break-word">{title}</Text>
      <Flex
        alignItems="center"
        justifyContent="space-between"

        w="100%"
      >
        <Icon as={RiTimeLine} w="2.5rem" h="2.5rem" color={color} />
        <Text fontSize="1.25rem">{count}</Text>
      </Flex>
    </Flex >
  );
}