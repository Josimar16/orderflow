import React from "react";
import Head from "next/head";
import dynamic from 'next/dynamic';
import { Box, Flex, SimpleGrid, Text, Grid, Icon } from "@chakra-ui/react";
import { RiTimeLine } from "react-icons/ri";

import { Header } from "../components/Header";
import { optionsChart } from "../utils/optionsChart";
import { BoxCount } from "../components/Dashboard/BoxCount";
import { CopyRight } from "../components/CopyRight";

const Chart = dynamic(() => import('react-apexcharts'), {
    ssr: false,
});

const going = [
    { name: 'Andamento fora do prazo', data: [10, 119, 10, 28, 45, 5, 98] },
    { name: 'Andamento dentro do prazo', data: [120, 68, 23, 78, 18, 8, 106] },
    { name: 'Nao iniciadas', data: [31, 10, 59, 40, 2, 116, 109] }
];

const completed = [
    { name: 'Concluidas fora do prazo', data: [2, 60, 78, 78, 48, 20, 6] },
    { name: 'Concluidas dentro do prazo', data: [31, 10, 59, 40, 2, 116, 109] },
    { name: 'Canceladas', data: [16, 40, 10, 28, 45, 18, 13] },
];

export default function Home() {
    return (
        <>
            <Head>
                <title>Home | orderflow</title>
            </Head>
            <Header />
            <Flex
                h="calc(100vh - 7.5rem)"
                overflowY="auto"
                flexDirection="column"

                width="1120px"
                p="2rem"
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
                <Flex
                    justifyContent="space-between"
                    alignItems="flex-start"
                    mb={4}
                >
                    <SimpleGrid flex="1" gap="4" minChildWidth="320px" alignItems="flex-start">
                        <Box
                            padding={["6", "8"]}
                            backgroundColor="gray.800"
                            borderRadius={8}
                            paddingBottom="4"
                        >
                            <Text fontSize="lg" marginBottom="4">
                                Solicitacoes correntes do mes {new Date().getMonth() + 1}
                            </Text>
                            <Chart
                                type="area"
                                height={200}
                                options={{
                                    ...optionsChart,
                                    colors: ['#F56565', '#48BB78', '#A0AEC0'],
                                }}
                                series={going}
                            />
                        </Box>
                        <Box
                            padding={["6", "8"]}
                            backgroundColor="gray.800"
                            borderRadius={8}
                            paddingBottom="4"
                        >
                            <Text fontSize="lg" marginBottom="4">
                                Solicitacoes concluidas do mes {new Date().getMonth() + 1}
                            </Text>
                            <Chart
                                type="area"
                                height={200}
                                options={{
                                    ...optionsChart,
                                    colors: ['#F56565', '#48BB78', '#ED8936'],
                                }}
                                series={completed}
                            />
                        </Box>
                    </SimpleGrid>
                </Flex>
                <Flex
                    justifyContent="space-between"
                    alignItems="flex-start"
                    flexDirection="column"
                >
                    <Text fontSize="lg" marginBottom="4">
                        Solicitacoes no geral em andamento
                    </Text>
                    <Grid
                        gap={4}
                        templateRows="repeat(2, 1fr)"
                        templateColumns="repeat(2, 1fr)"
                    >
                        <BoxCount
                            title="Vencidas"
                            count={20}
                            color="red.500"
                        />
                        <BoxCount
                            title="Vence hoje"
                            count={8}
                            color="orange.500"
                        />
                        <BoxCount
                            title="Vence amanha"
                            count={3}
                            color="blue.500"
                        />
                        <BoxCount
                            title="Vence nos proximos dias"
                            count={45}
                            color="green.500"
                        />
                    </Grid>
                </Flex>
            </Flex>
            <CopyRight />
        </>
    );
}