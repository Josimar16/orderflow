
import { ElementType } from 'react';
import { Box, Flex, Icon as IconChakra } from '@chakra-ui/react';

interface IconProps {
  width?: string;
  icon: ElementType;
  color?: string;
  handle?: () => void;
}

export function Icon({ width = '2.5rem', icon, color = '#919191', handle }: IconProps) {
  return (
    <Box
      width={width}
      height="2.5rem"
      borderRadius="1.25rem"
      as={Flex}
      justifyContent="center"
      alignItems="center"
      cursor="pointer"
      overflow="hidden"
      transition="all ease 0.3s"
      onClick={handle}
    >
      <IconChakra as={icon} color={color} fontSize="xl" />
    </Box>
  );
}