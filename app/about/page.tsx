'use client'

import { Box, Heading, Text, VStack, SimpleGrid, HStack, Icon, Image, Divider, Stack } from '@chakra-ui/react'
import { FaBiking, FaMusic, FaBook, FaCode, FaRegSadTear } from 'react-icons/fa'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

export default function AboutPage() {
    return (
        <Box minH="100vh" bg="gray.900">
            <NavBar />
            <Box maxW="900px" mx="auto" px={6} py={16}>
                {/* About Me Section */}
                <Stack direction={{ base: 'column', md: 'row' }} spacing={8} mb={16} align="center">
                    <VStack align="flex-start" spacing={6} flex={1}>
                        <Heading as="h1" size="2xl" color="white" fontFamily="var(--font-host-grotesk)">About Me</Heading>
                        <Text color="gray.300" fontSize="lg">
                            Hi! I'm Martin Tejeda, a product designer and creative technologist passionate about building delightful user experiences. I love working at the intersection of design, technology, and business, and believe in the power of design to solve real-world problems.
                        </Text>
                    </VStack>
                    <Box flex={1} display="flex" justifyContent="center">
                        <Image
                            src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=facearea&w=400&q=80"
                            alt="Martin Tejeda"
                            borderRadius="lg"
                            boxSize="200px"
                            objectFit="cover"
                        />
                    </Box>
                </Stack>
                <Divider borderColor="gray.700" mb={12} />
                {/* Work History Section */}
                <VStack align="flex-start" spacing={6} mb={16}>
                    <Heading as="h2" size="xl" color="white" fontFamily="var(--font-host-grotesk)">Work History</Heading>
                    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} w="100%">
                        <VStack align="flex-start" spacing={1}>
                            <Heading as="h3" size="md" color="white" fontFamily="var(--font-host-grotesk)">TRUE-See</Heading>
                            <Text color="gray.300">Design & Ops Lead</Text>
                            <Text color="gray.400">2025 — Present</Text>
                        </VStack>
                        <VStack align="flex-start" spacing={1}>
                            <Heading as="h3" size="md" color="white" fontFamily="var(--font-host-grotesk)">MDSV Capital</Heading>
                            <Text color="gray.300">Head of Design & UX</Text>
                            <Text color="gray.400">2023 — 2025</Text>
                        </VStack>
                        <VStack align="flex-start" spacing={1}>
                            <Heading as="h3" size="md" color="white" fontFamily="var(--font-host-grotesk)">Underbelly</Heading>
                            <Text color="gray.300">Product Designer, Design Lead</Text>
                            <Text color="gray.400">2021 — 2023</Text>
                        </VStack>
                        <VStack align="flex-start" spacing={1}>
                            <Heading as="h3" size="md" color="white" fontFamily="var(--font-host-grotesk)">Data 4 Good</Heading>
                            <Text color="gray.300">UX Designer</Text>
                            <Text color="gray.400">2020 — 2021</Text>
                        </VStack>
                    </SimpleGrid>
                </VStack>
                <Divider borderColor="gray.700" mb={12} />
                {/* Interests Section */}
                <VStack align="flex-start" spacing={6} mb={16}>
                    <Heading as="h2" size="xl" color="white" fontFamily="var(--font-host-grotesk)">Interests</Heading>
                    <SimpleGrid columns={{ base: 2, sm: 4 }} spacing={8} w="100%">
                        <HStack spacing={3}>
                            <Icon as={FaBiking} color="teal.300" boxSize={6} />
                            <Text color="gray.200">Cycling</Text>
                        </HStack>
                        <HStack spacing={3}>
                            <Icon as={FaMusic} color="teal.300" boxSize={6} />
                            <Text color="gray.200">Music</Text>
                        </HStack>
                        <HStack spacing={3}>
                            <Icon as={FaBook} color="teal.300" boxSize={6} />
                            <Text color="gray.200">Reading</Text>
                        </HStack>
                        <HStack spacing={3}>
                            <Icon as={FaCode} color="teal.300" boxSize={6} />
                            <Text color="gray.200">Coding</Text>
                        </HStack>
                    </SimpleGrid>
                </VStack>
                <Divider borderColor="gray.700" mb={12} />
                {/* Failed Side Projects Section */}
                <VStack align="flex-start" spacing={6}>
                    <Heading as="h2" size="xl" color="white" fontFamily="var(--font-host-grotesk)">Failed Side Projects</Heading>
                    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} w="100%">
                        <Box bg="gray.800" p={6} borderRadius="lg">
                            <HStack spacing={3} mb={2}>
                                <Icon as={FaRegSadTear} color="red.300" boxSize={6} />
                                <Heading as="h4" size="md" color="white" fontFamily="var(--font-host-grotesk)">StartupX</Heading>
                            </HStack>
                            <Text color="gray.300" mb={1}>A platform for connecting startup founders with mentors.</Text>
                            <Text color="gray.400" fontSize="sm">Why it failed: No product-market fit and limited user engagement.</Text>
                        </Box>
                        <Box bg="gray.800" p={6} borderRadius="lg">
                            <HStack spacing={3} mb={2}>
                                <Icon as={FaRegSadTear} color="red.300" boxSize={6} />
                                <Heading as="h4" size="md" color="white" fontFamily="var(--font-host-grotesk)">FitFriends</Heading>
                            </HStack>
                            <Text color="gray.300" mb={1}>A social app for finding workout buddies nearby.</Text>
                            <Text color="gray.400" fontSize="sm">Why it failed: Difficult to scale and retain active users.</Text>
                        </Box>
                    </SimpleGrid>
                </VStack>
            </Box>
            <Footer />
        </Box>
    )
} 