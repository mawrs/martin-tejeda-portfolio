'use client'

import { Box, Heading, Text, VStack, SimpleGrid, HStack, Icon, Image, Divider, Stack, Link } from '@chakra-ui/react'
import { FaMusic, FaBook, FaVideo } from 'react-icons/fa'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

export default function AboutPage() {
    return (
        <Box minH="100vh" bg="gray.900">
            <NavBar />
            <Box maxW="6xl" mx="auto" mt={20} px={8}>
                {/* About Me Section */}
                <Stack direction={{ base: 'column', md: 'row' }} spacing={8} mb={16} align="center">
                    <VStack align="flex-start" spacing={6} flex={1}>
                        <Box>
                            <Text color="gray.300" fontSize="md" mb={2}>
                                Nice to meet you
                            </Text>
                            <Heading as="h1" size="2xl" color="white" fontFamily="var(--font-host-grotesk)">I&apos;m Martin Tejeda</Heading>
                        </Box>
                        <Text color="gray.300" fontSize="lg">
                            I&rsquo;m a product designer & strategist based in San Francisco who loves finding the human side of tech. I&rsquo;m fascinated by the advances in technology & often find myself tinkering with new tools.
                        </Text>
                        <Text color="gray.300" fontSize="lg">
                            I spent time at Facebook and Square, and jumped into early‑stage startups to have more ownership of the product cycle.
                        </Text>
                        <Text color="gray.300" fontSize="lg">
                            When I&rsquo;m not working or tinkering, I&rsquo;m probably hanging out with my wife at a sports game or concert.
                        </Text>
                    </VStack>
                    <Box flex={1} display="flex" justifyContent="center">
                        <Image
                            src="/headshot.png"
                            alt="Martin Tejeda"
                            borderRadius="lg"
                            boxSize="400px"
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
                    <Link
                        href="Martin_Tejeda_Resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        bg="orange.600"
                        _hover={{ bg: "orange.500" }}
                        color="white"
                        borderWidth="2px"
                        borderColor="orange.800"
                        boxShadow="inset 0px 1px 2px 0px rgba(255,255,255,0.3)"
                        px={4}
                        py={2}
                        borderRadius="md"
                        fontWeight="medium"
                        transition="background 0.2s"
                        alignSelf="flex-start"
                        mt={4}
                        display="inline-block"
                    >
                        View Full Resume
                    </Link>
                </VStack>
                <Divider borderColor="gray.700" mb={12} />

                {/* Interests Section */}
                <VStack align="flex-start" spacing={6} mb={16}>
                    <Heading as="h2" size="xl" color="white" fontFamily="var(--font-host-grotesk)">Interests</Heading>
                    <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8} w="100%">
                        <VStack align="flex-start" spacing={2}>
                            <HStack spacing={3}>
                                <Icon as={FaBook} color="orange.200" boxSize={6} />
                                <Text color="gray.200" fontWeight="medium">Non-fiction Books</Text>
                            </HStack>
                            <Box pl={10}>
                                <Text color="gray.300" mb={1}>• The Design Conductors</Text>
                                <Text color="gray.300" mb={1}>• Hell Yeah or No</Text>
                                <Text color="gray.300" mb={1}>• Never Split the Difference</Text>
                            </Box>
                        </VStack>
                        <VStack align="flex-start" spacing={2}>
                            <HStack spacing={3}>
                                <Icon as={FaMusic} color="orange.200" boxSize={6} />
                                <Text color="gray.200" fontWeight="medium">Indie Music</Text>
                            </HStack>
                            <Box pl={10}>
                                <Text color="gray.300" mb={1}>• Portugal. The Man</Text>
                                <Text color="gray.300" mb={1}>• Vacations</Text>
                                <Text color="gray.300" mb={1}>• Men I Trust</Text>
                            </Box>
                        </VStack>
                        <VStack align="flex-start" spacing={2}>
                            <HStack spacing={3}>
                                <Icon as={FaVideo} color="orange.200" boxSize={6} />
                                <Text color="gray.200" fontWeight="medium">How-To Videos</Text>
                            </HStack>
                            <Box pl={10}>
                                <Text color="gray.300" mb={1}>• Home DIY projects</Text>
                                <Text color="gray.300" mb={1}>• Cooking techniques</Text>
                                <Text color="gray.300" mb={1}>• Tech tutorials & demos</Text>
                            </Box>
                        </VStack>
                    </SimpleGrid>
                </VStack>
                <Divider borderColor="gray.700" mb={12} />
                {/* Failed Side Projects Section */}
                <VStack align="flex-start" spacing={6}>
                    <Heading as="h2" size="xl" color="white" fontFamily="var(--font-host-grotesk)">Side Projects</Heading>
                    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} w="100%">
                        <Box bg="gray.800" p={6} borderRadius="lg">
                            <HStack spacing={3} mb={2}>
                                <Heading as="h4" size="md" color="white" fontFamily="var(--font-host-grotesk)">Gigstarter</Heading>
                            </HStack>
                            <Text color="gray.300" mb={1}>A platform for college students to find short-term work opportunities.</Text>
                            <Text color="gray.400" fontSize="sm">As an &rsquo;F U&rsquo; to unpaid internships, I created this app to help students find short-term work opportunities. There are only so many paid internships, and we all deserver to graduate with practical experience. It ultimately failed because I couldn&rsquo;t find enough relevant work to match the needs of the students.</Text>
                        </Box>
                        <Box bg="gray.800" p={6} borderRadius="lg">
                            <HStack spacing={3} mb={2}>
                                <Heading as="h4" size="md" color="white" fontFamily="var(--font-host-grotesk)">3rd West</Heading>
                            </HStack>
                            <Text color="gray.300" mb={1}>Acquihire platform for AI startups.</Text>
                            <Text color="gray.400" fontSize="sm">This was supposed to be a soft landing for startup founders who weren&rsquo;t having any success. I think this failed because startup founders are way more proud than I thought. I had a really hard time onboarding AI startups who hadn&rsquo;t failed yet. They didn&rsquo;t want to admit that the end was near.</Text>
                        </Box>
                        <Box bg="gray.800" p={6} borderRadius="lg">
                            <HStack spacing={3} mb={2}>
                                <Heading as="h4" size="md" color="white" fontFamily="var(--font-host-grotesk)">NewCareers</Heading>
                            </HStack>
                            <Text color="gray.300" mb={1}>Alternative career paths for college students.</Text>
                            <Text color="gray.400" fontSize="sm">A slight pivot from Gigstarter, this was supposed to be a platform for college students to find alternative career paths. I successfully onboarded about 25 students, but was unable to productize the platform to keep it running. AI compute is not cheap; or at least it wasn&rsquo;t back then.</Text>
                        </Box>
                        <Box bg="gray.800" p={6} borderRadius="lg">
                            <HStack spacing={3} mb={2}>
                                <Heading as="h4" size="md" color="white" fontFamily="var(--font-host-grotesk)">BookQuiz</Heading>
                            </HStack>
                            <Text color="gray.300" mb={1}>AI-curated book flashcards.</Text>
                            <Text color="gray.400" fontSize="sm">This actually hasn&rsquo;t failed yet. I&rsquo;m still working on it. The challenge is having AI parse the text of a book first-hand, versus relying on a summary of the book. Getting those books is proving to be a challenge.</Text>
                        </Box>
                    </SimpleGrid>
                </VStack>
            </Box>
            <Footer />
        </Box>
    )
} 