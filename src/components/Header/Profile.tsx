import { Flex, Box, Text, Avatar } from '@chakra-ui/react';

interface ProfileProps {
    showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
    return (
        <Flex alignItems="center">
            {showProfileData && <Box marginRight="4" textAlign="right">
                <Text>Josimar Junior</Text>
                <Box>
                    <Text as="span" color="gray.400" fontSize="small">Desenvolvimento </Text>
                    <Text as="span" color="gray.200" fontSize="small">&nbsp;|&nbsp;</Text>
                    <Text as="span" color="gray.400" fontSize="small">Lider</Text>
                </Box>
            </Box>}

            <Avatar
                size="md"
                name="Josimar Martins"
                borderWidth="2px"
                borderColor="red.500"
                src="https://avatars.githubusercontent.com/u/49077388?s=400&u=ec9520ac11646eea256440b5db57ede4af4bf6be&v=4"
            />
        </Flex>
    );
}