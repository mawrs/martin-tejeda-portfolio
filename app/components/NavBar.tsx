import { Flex, Box, Link as ChakraLink, VStack, useColorModeValue, Image } from '@chakra-ui/react'
import { usePathname } from 'next/navigation'
import NextLink from 'next/link'

export default function NavBar() {
    const pathname = usePathname();
    const linkColor = useColorModeValue('gray.200', 'gray.200');
    const activeColor = useColorModeValue('white', 'white');

    return (
        <Box as="header" bg="black" color="white" py={5}>
            <Box maxW="1200px" mx="auto" px={12}>
                <Flex align="center" justify="space-between">
                    <VStack align="flex-start" spacing={0}>
                        <ChakraLink as={NextLink} href="/" _hover={{ textDecoration: 'none' }}>
                            <Image src="/logo.svg" alt="Logo" boxSize="40px" objectFit="contain" />
                        </ChakraLink>
                    </VStack>
                    <Box>
                        <ChakraLink
                            as={NextLink}
                            href="/about"
                            color={pathname === '/about' ? activeColor : linkColor}
                            fontSize="sm"
                            fontWeight="medium"
                            _hover={{ textDecoration: 'underline', color: 'white' }}
                        >
                            ABOUT / CV
                        </ChakraLink>
                    </Box>
                </Flex>
            </Box>
        </Box>
    )
} 