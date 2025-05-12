'use client'

import { Box, Heading, Text, SimpleGrid, VStack, Image } from '@chakra-ui/react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

export default function TrueSeeCaseStudy() {
    return (
        <Box minH="100vh" bg="gray.900">
            <NavBar />
            <Box maxW="1200px" mx="auto" px={6} py={16}>
                <VStack align="flex-start" spacing={16}>
                    <Heading
                        as="h1"
                        fontSize={["4xl", "6xl", "7xl"]}
                        fontWeight="bold"
                        color="white"
                        fontFamily="var(--font-host-grotesk)"
                        lineHeight={1.1}
                    >
                        Boosting Adoption<br />at TRUE-See
                    </Heading>
                    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={12} w="100%">
                        <Box>
                            <Heading as="h2" size="md" color="white" mb={2}>
                                Project Summary
                            </Heading>
                            <Text color="gray.300">
                                I led the end-to-end UX strategy, identifying key UX gaps through journey mapping and collaborating with stakeholders to design solutions that improved user experience & increased customer adoption.
                            </Text>
                        </Box>
                        <Box>
                            <Heading as="h2" size="md" color="white" mb={2}>
                                Results
                            </Heading>
                            <Box mb={4}>
                                <Heading as="h3" size="sm" color="white" mb={2}>
                                    Quantitative:
                                </Heading>
                                <VStack as="ul" align="flex-start" spacing={2} pl={4} color="gray.300">
                                    <Text as="li">30% increase in photo-taking among private beta users.</Text>
                                    <Text as="li">7 LOIs signed with potential new customers.</Text>
                                </VStack>
                            </Box>
                            <Box>
                                <Heading as="h3" size="sm" color="white" mb={2}>
                                    Qualitative:
                                </Heading>
                                <VStack as="ul" align="flex-start" spacing={2} pl={4} color="gray.300">
                                    <Text as="li">Users described the product as &quot;way more intuitive&quot; than before.</Text>
                                    <Text as="li">Physicians reported feeling more confident using the photo capture feature.</Text>
                                    <Text as="li">Nurses described the interface as &quot;fast and convenient.&quot;</Text>
                                </VStack>
                            </Box>
                        </Box>
                    </SimpleGrid>
                    <Image
                        src="/true-see/hero.png"
                        alt="TRUE-See Hero"
                        borderRadius="lg"
                        w="100%"
                        maxH="600px"
                        objectFit="cover"
                        mb={4}
                    />
                    {/* Context Section */}
                    <Box w="100%" mt={16}>
                        <Box display={{ base: 'block', md: 'flex' }} alignItems="flex-start" gap={12}>
                            <Box flexShrink={0} minW={{ base: '100%', md: '220px' }} mb={{ base: 6, md: 0 }}>
                                <Heading
                                    as="h2"
                                    fontSize={["2xl", "3xl", "4xl"]}
                                    color="white"
                                    fontFamily="var(--font-host-grotesk)"
                                    fontWeight="bold"
                                    textAlign={{ base: 'left', md: 'right' }}
                                >
                                    Context
                                </Heading>
                            </Box>
                            <Box flex={1} maxW="600px">
                                <Text color="gray.300" fontSize="lg" fontWeight="bold" mb={4}>
                                    TRUE-See was built on custom integrations with our existing partner. This created problems and accrued a lot of design and technical debt.
                                </Text>

                                <Text color="gray.300" fontSize="lg">
                                    TRUE-See was originally built on a tightly coupled EHR system, which led to friction and limited adoption. In 2025, we transitioned to an EHR-agnostic approach to improve our UI consistency, technical upkeep, and data integrity.This shift required a complete redesign of the core architecture and user flows without inheriting past UX and tech debt.
                                </Text>

                                <Text color="gray.300" fontSize="lg">
                                    Custom integrations with partners were limiting because data was not bidirectional. This severely limited the UX capabilities we could offer, such as patient sharing & photo analytics.
                                </Text>
                            </Box>
                        </Box>
                    </Box>
                    {/* Image below Context Section */}
                    <Image
                        src="/true-see/not_bidirectional.png"
                        alt="TRUE-See Context Visual"
                        borderRadius="lg"
                        w="100%"
                        maxH="600px"
                        objectFit="cover"
                        my={12}
                    />
                    {/* Centered Descriptive Text Section */}
                    <Box w="100%" my={12}>
                        <Box display={{ base: 'block', md: 'flex' }} alignItems="flex-start" gap={12}>
                            {/* Empty left box to align with title column */}
                            <Box flexShrink={0} minW={{ base: '100%', md: '220px' }} mb={{ base: 6, md: 0 }} />
                            <Box flex={1} maxW="600px">
                                <Text color="gray.300" fontSize="xl">
                                    Our Core Workflows at TRUE-See
                                    <br /><br />
                                    1. Photo Taking: Taking photos of patients using our patented color calibration technology.<br />
                                    2. Sharing: Ability to share patient images with other doctors & specialists.<br />
                                    3. Analyzing: Analyzing two images side-by-side.
                                    <br /><br />
                                    <b>2 Applications for 1 Task</b>
                                    <br /><br />
                                    Our app cannot directly modify existing patient data, and images cannot be directly stored in our database.
                                </Text>
                            </Box>
                        </Box>
                    </Box>
                    {/* Image below Core Workflow Section */}
                    <Image
                        src="/true-see/core_workflow.png"
                        alt="TRUE-See Core Workflow Visual"
                        borderRadius="lg"
                        w="100%"
                        maxH="600px"
                        objectFit="cover"
                        my={12}
                    />
                    {/* Objective Section */}
                    <Box w="100%" my={16}>
                        <Box display={{ base: 'block', md: 'flex' }} alignItems="flex-start" gap={12}>
                            <Box flexShrink={0} minW={{ base: '100%', md: '220px' }} mb={{ base: 6, md: 0 }}>
                                <Heading
                                    as="h2"
                                    fontSize={["2xl", "3xl", "4xl"]}
                                    color="white"
                                    fontFamily="var(--font-host-grotesk)"
                                    fontWeight="bold"
                                    textAlign={{ base: 'left', md: 'right' }}
                                >
                                    Objective
                                </Heading>
                            </Box>
                            <Box flex={1} maxW="600px">
                                <Text color="gray.300" fontSize="xl" fontWeight="bold">
                                    Our objective was to learn about how members experience signing up for a box at different points in the season, identify the biggest pain points, and resolve them as part of our migration initiative without adding too much engineering scope.
                                </Text>
                            </Box>
                        </Box>
                    </Box>
                </VStack>
            </Box>
            <Footer />
        </Box>
    )
} 