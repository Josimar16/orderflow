import { ElementType, ForwardRefRenderFunction } from 'react';
import { Box, Flex, Icon as IconChakra, IconProps as ChakraIconProps } from '@chakra-ui/react';
import { forwardRef } from 'react';

interface IconProps extends ChakraIconProps {
  icon: ElementType;
  color?: string;
  handle?: () => void;
}

const IconBase: ForwardRefRenderFunction<HTMLDivElement, IconProps> =
  ({ icon, color = '#919191', handle }, ref?) => {
    return (
      <Box
        width="2.5rem"
        height="2.5rem"
        borderRadius="1.25rem"
        as={Flex}
        justifyContent="center"
        alignItems="center"
        cursor="pointer"
        onClick={handle}
        ref={ref}
        marginRight="0.5rem"
      >
        <IconChakra as={icon} color={color} fontSize="xl" />
      </Box>
    );
  }

export const Icon = forwardRef(IconBase);