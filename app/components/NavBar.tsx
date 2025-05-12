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
                    <Box>
                        <ChakraLink
                            as={NextLink}
                            href="/"
                            color={pathname === '/' ? 'white' : 'gray.200'}
                            fontSize="sm"
                            fontWeight="medium"
                            borderWidth="2px"
                            borderColor="gray.600"
                            borderRadius="md"
                            px={3}
                            py={2}
                            _hover={{
                                bg: "gray.500",
                                textDecoration: 'none',
                                color: 'white'
                            }}
                            boxShadow="inset 0px 1px 2px 0px rgba(255,255,255,0.3)"
                            display="flex"
                            alignItems="center"
                        >
                            <Image src="/logo.svg" alt="Logo" boxSize="20px" objectFit="contain" />
                        </ChakraLink>
                    </Box>
                    <Box>
                        <ChakraLink
                            as={NextLink}
                            href="/about"
                            color={pathname === '/about' ? 'white' : 'gray.200'}
                            fontSize="sm"
                            fontWeight="medium"
                            borderWidth="2px"
                            borderColor="gray.600"
                            borderRadius="md"
                            px={3}
                            py={2}
                            _hover={{
                                bg: "gray.500",
                                textDecoration: 'none',
                                color: 'white'
                            }}
                            boxShadow="inset 0px 1px 2px 0px rgba(255,255,255,0.3)"
                        >
                            ABOUT / CV
                        </ChakraLink>
                    </Box>
                </Flex>
            </Box>
        </Box>
    )
} 