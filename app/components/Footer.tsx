import { Flex, Box, Text, Link, HStack, Icon, VStack, Grid, GridItem } from '@chakra-ui/react'
import { FaLinkedin, FaEnvelope, FaArrowUp } from 'react-icons/fa'

export default function Footer() {
    return (
        <Box as="footer" bg="black" color="white" py={{ base: 6, md: 4 }} mt={24} position="relative">
            <Box maxW="1200px" mx="auto" px={12} position="relative">
                {/* Mobile Arrow and Content */}
                <Flex display={{ base: 'flex', md: 'none' }} direction="column" align="center" justify="center" w="100%" gap={4}>
                    <HStack spacing={2} align="center">
                        <Link
                            href="#top"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            borderRadius="full"
                            bg="gray.800"
                            width="30px"
                            height="30px"
                            _hover={{ bg: "gray.700" }}
                            onClick={(e) => {
                                e.preventDefault();
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                            }}
                        >
                            <Icon as={FaArrowUp} boxSize={4} color="orange.400" />
                        </Link>
                        <Text
                            fontSize="md"
                            color="gray.400"
                            cursor="pointer"
                            onClick={() => {
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                            }}
                        >
                            Scroll to top
                        </Text>
                    </HStack>
                    <HStack spacing={4} justify="center" width="100%">
                        <Link href="https://www.linkedin.com/in/mawrs" isExternal display="flex" alignItems="center">
                            <Icon as={FaLinkedin} boxSize={5} mr={2} />
                            LinkedIn
                        </Link>
                        <Link href="mailto:hi@martintejeda.com" display="flex" alignItems="center">
                            <Icon as={FaEnvelope} boxSize={5} mr={2} />
                            Email
                        </Link>
                    </HStack>
                </Flex>
                {/* Desktop layout */}
                <Grid
                    display={{ base: 'none', md: 'grid' }}
                    templateColumns="1fr 1fr"
                    alignItems="center"
                    position="relative"
                    py={4}
                >
                    <GridItem colStart={1} colEnd={2} justifySelf="start">
                        <HStack spacing={4} align="center">
                            <Link
                                href="#top"
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                                borderRadius="full"
                                bg="gray.800"
                                p={2}
                                _hover={{ bg: "gray.700" }}
                                onClick={(e) => {
                                    e.preventDefault();
                                    window.scrollTo({ top: 0, behavior: 'smooth' });
                                }}
                            >
                                <Icon as={FaArrowUp} boxSize={4} color="orange.400" />
                            </Link>
                            <Link
                                href="#top"
                                onClick={(e) => {
                                    e.preventDefault();
                                    window.scrollTo({ top: 0, behavior: 'smooth' });
                                }}
                                _hover={{ textDecoration: "none", color: "gray.300" }}
                            >
                                <Text fontSize="md" color="gray.400">Scroll to top</Text>
                            </Link>
                        </HStack>
                    </GridItem>
                    <GridItem colStart={2} colEnd={3} justifySelf="end">
                        <HStack spacing={6}>
                            <Link href="https://www.linkedin.com/in/mawrs" isExternal display="flex" alignItems="center">
                                <Icon as={FaLinkedin} boxSize={5} mr={2} />
                                LinkedIn
                            </Link>
                            <Link href="mailto:hi@martintejeda.com" display="flex" alignItems="center">
                                <Icon as={FaEnvelope} boxSize={5} mr={2} />
                                Email
                            </Link>
                        </HStack>
                    </GridItem>
                </Grid>
            </Box>
        </Box>
    )
} 