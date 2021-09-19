import Head from "next/head";
import { useState } from "react";
import { Flex } from "@chakra-ui/react";

import { Chat } from "../../components/Order/Chat";

interface ChatProps {
  chat_id: number;
  title: string;
}

export default function OrderDetails() {
  const [activeChat, setActiveChat] = useState<ChatProps>({
    chat_id: 1,
    title: 'Protocolo #5161611'
  });

  const [user, setUser] = useState({
    id: '1',
    name: 'Josimar Martins',
    avatar: 'https://avatars3.githubusercontent.com/u/49077388?s=400&u=551a7010f9fc91859229f0d600481a2b2ca118a6&v=4'
  });


  return (
    <>
      <Head>
        <title>{activeChat.title} | orderflow</title>
      </Head>
      <Flex
        h="100vh"
        overflowY="auto"
        flexDirection="row"

        width="1120px"
        px="2rem"
        m="0 auto"

        css={{
          '&::-webkit-scrollbar': {
            width: '0rem',
            height: '0.375rem'
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            borderRadius: '4px'
          },
        }}
      >
        <Chat chat={activeChat} user={user} />
      </Flex>
    </>
  );
}