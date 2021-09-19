import { Flex, Text } from "@chakra-ui/react";

export function CopyRight() {
  return (
    <Flex
      w="100vw"
      h="2.5rem"
      bgColor="gray.800"

      alignItems="center"
      justifyContent="center"
    >
      <Text>
        Josimar Junior 2021 © Todos os direitos reservados
      </Text>
    </Flex>
  );
}