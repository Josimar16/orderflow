import { ElementType } from "react";
import { Flex, FlexProps, Text, Icon } from "@chakra-ui/react";

interface ButtonProps extends FlexProps {
  title: string;
  icon: ElementType
}

export function Button({ title, icon, ...rest }: ButtonProps) {
  return (
    <Flex
      alignItems="center"
      cursor="pointer"
      transition="filter 0.2s"
      mx={4}
      _hover={{
        filter: 'brightness(0.8)',
        cursor: 'pointer'
      }}
      {...rest}
    >
      <Text
        color="gray.200"
        mr="0.5rem"
        fontSize="0.875rem"
        _hover={{
          color: "red.300"
        }}
      >
        {title}
      </Text>
      <Icon
        as={icon}
        h="1.5rem"
        w="1.5rem"
        color="gray.200"
        _hover={{
          color: "red.300"
        }}
      />
    </Flex>
  );
}