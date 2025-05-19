import { Flex, Box, Link as ChakraLink, Image } from '@chakra-ui/react'
import { usePathname } from 'next/navigation'
import NextLink from 'next/link'

export default function NavBar() {
    const pathname = usePathname();

    return (
        <Box as="header" bg="black" color="white" py={5}>
            <Box maxW="1200px" mx="auto" px={12}>
                <Flex align="center" justify="space-between">
                    <Box>
                        <ChakraLink
                            as={NextLink}
                            href="/"
                            color={pathname === '/' ? 'white' : 'gray.200'}
                            fontSize="md"
                            fontWeight="medium"
                            px={3}
                            py={2}
                            bg="transparent"
                            display="flex"
                            alignItems="center"
                            textDecoration="none"
                            position="relative"
                            _hover={{
                                textDecoration: "none",
                                "::after": {
                                    width: "100%",
                                    opacity: 1
                                }
                            }}
                            sx={{
                                "::after": {
                                    content: '""',
                                    position: "absolute",
                                    bottom: "0",
                                    left: "0",
                                    width: "0%",
                                    height: "2px",
                                    bg: "white",
                                    transition: "width 0.3s ease, opacity 0.3s ease",
                                    opacity: 0
                                }
                            }}
                        >
                            <Image src="/logo_2.webp" alt="Logo" height="40px" mr={2} />
                            Home
                        </ChakraLink>
                    </Box>
                    <Box>
                        <ChakraLink
                            as={NextLink}
                            href="/about"
                            color={pathname === '/about' ? 'white' : 'gray.200'}
                            fontSize="md"
                            fontWeight="medium"
                            px={3}
                            py={2}
                            bg="transparent"
                            display="flex"
                            alignItems="center"
                            textDecoration="none"
                            position="relative"
                            _hover={{
                                textDecoration: "none",
                                "::after": {
                                    width: "100%",
                                    opacity: 1
                                }
                            }}
                            sx={{
                                "::after": {
                                    content: '""',
                                    position: "absolute",
                                    bottom: "0",
                                    left: "0",
                                    width: "0%",
                                    height: "2px",
                                    bg: "white",
                                    transition: "width 0.3s ease, opacity 0.3s ease",
                                    opacity: 0
                                }
                            }}
                        >
                            <Image src="/logo_3.webp" alt="Logo" height="40px" mr={2} />
                            About
                        </ChakraLink>
                    </Box>
                </Flex>
            </Box>
        </Box>
    )
} 