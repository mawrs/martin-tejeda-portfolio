import { Flex, Box, Text, Link, HStack, Icon } from '@chakra-ui/react'
import { FaLinkedin, FaEnvelope } from 'react-icons/fa'

export default function Footer() {
    return (
        <Box as="footer" bg="black" color="white" py={8} mt={24}>
            <Box maxW="1200px" mx="auto" px={12}>
                <Flex
                    direction={{ base: 'column', md: 'row' }}
                    align={{ base: 'flex-start', md: 'center' }}
                    justify="space-between"
                    fontSize="sm"
                    gap={{ base: 4, md: 0 }}
                >
                    <Text>Made with <Link href="https://cursor.sh" isExternal color="blue.300">Cursor</Link> & styled with <Link href="https://chakra-ui.com" isExternal color="teal.300">Chakra UI</Link></Text>
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
                </Flex>
            </Box>
        </Box>
    )
} 