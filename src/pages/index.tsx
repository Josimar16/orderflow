import Head from "next/head";
import { Box, Center, Divider, Icon, Flex, Text } from "@chakra-ui/react";
import { RiLogoutBoxLine } from "react-icons/ri"

import { Profile } from "../components/Header/Profile";
import { Logo } from "../components/Header/Logo";

export default function Home() {
    return (
        <>
            <Head>
                <title>Home | orderflow</title>
            </Head>
            <Flex flexDirection="column">
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
                            <Icon
                                as={RiLogoutBoxLine}
                                h="1.5rem"
                                w="1.5rem"
                                color="gray.200"
                            />
                            <Divider orientation="vertical" mx={4} />
                            <Profile />
                        </Center>
                    </Flex>
                </Flex>
                <Box
                    h="calc(100vh - 5rem)"
                    overflowY="auto"
                    css={{
                        '&::-webkit-scrollbar': {
                            width: '0.375rem',
                            height: '0.375rem'
                        },
                        '&::-webkit-scrollbar-thumb': {
                            backgroundColor: 'rgba(255, 255, 255, 0.2)',
                            borderRadius: '4px'
                        },
                    }}
                >
                    <Flex
                        flex="1"
                        flexDirection="column"
                        justifyContent="space-between"
                        alignItems="flex-start"

                        maxWidth="1120px"
                        p="2rem"
                        m="0 auto"
                    ></Flex>
                </Box>
            </Flex>
        </>
    );
}