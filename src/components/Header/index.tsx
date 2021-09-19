import { Center, Divider, Flex } from "@chakra-ui/react";
import { RiLogoutBoxLine, RiNotificationLine } from "react-icons/ri"

import { Profile } from "./Profile";
import { Logo } from "./Logo";
import { Button } from "./Button";

export function Header() {
  return (
    <Flex
      w="100vw"
      h="5rem"
      bgColor="gray.800"
    >
      <Flex
        justifyContent="space-between"
        alignItems="center"

        w="1120px"
        p="0 2rem"
        m="0 auto"
      >
        <Logo />
        <Center h="2.5rem">
          <Button title="Notificacoes" icon={RiNotificationLine} />
          <Button title="Sair" icon={RiLogoutBoxLine} />
          <Divider orientation="vertical" mr={4} />
          <Profile />
        </Center>
      </Flex>
    </Flex>
  );
}