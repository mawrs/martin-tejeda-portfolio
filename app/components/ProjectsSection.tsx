import { useState } from 'react'
import { Box, Stack, Image, Heading, Text, Button, VStack, HStack } from '@chakra-ui/react'
import NextLink from 'next/link'

export default function ProjectsSection() {
    const [showTldr1, setShowTldr1] = useState(false)
    const [showTldr2, setShowTldr2] = useState(false)

    return (
        <Box maxW="6xl" mx="auto" mt={24} px={4}>
            <VStack spacing={10} align="stretch">
                {/* Project 1 */}
                <Box>
                    <Stack
                        direction={{ base: 'column', md: 'row' }}
                        bg="gray.800"
                        borderRadius="lg"
                        p={6}
                        spacing={6}
                        align="stretch"
                    >
                        <Image
                            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
                            alt="Project 1"
                            boxSize={{ base: '100%', md: '180px' }}
                            objectFit="cover"
                            borderRadius="md"
                            flexShrink={0}
                        />
                        <VStack align="flex-start" spacing={4} flex={1}>
                            <Heading size="md" color="white">Boosting adoption at TRUE-See</Heading>
                            <Text color="gray.300" lineHeight="1.6">
                                Improving the overall user experience of the app by
                                detaching from the existing EHR integration into an
                                EHR-agnostic application.
                            </Text>
                            <HStack spacing={4}>
                                <Button
                                    colorScheme="red"
                                    variant="solid"
                                    bg="red.500"
                                    color="white"
                                    onClick={() => setShowTldr1((v) => !v)}
                                >
                                    {showTldr1 ? 'Hide TLDR' : 'Read TLDR'}
                                </Button>
                                <Button
                                    as={NextLink}
                                    href="/true-see"
                                    colorScheme="red"
                                    variant="outline"
                                >
                                    View Case Study
                                </Button>
                            </HStack>
                            {showTldr1 && (
                                <Box bg="gray.700" p={6} mt={2} borderRadius="lg" width="100%">
                                    <VStack align="flex-start" spacing={4}>
                                        <Box>
                                            <Heading size="sm" color="white" mb={2}>Project Summary</Heading>
                                            <Text color="gray.300" lineHeight="1.6">
                                                TRUE-See needed to move away from EHR-dependent workflows to increase adoption and improve user experience.
                                            </Text>
                                        </Box>
                                        <Box>
                                            <Heading size="sm" color="white" mb={2}>Context</Heading>
                                            <Text color="gray.300" lineHeight="1.6">
                                                The application was tightly coupled with specific EHR systems, limiting its potential user base and creating friction in workflows.
                                            </Text>
                                        </Box>
                                        <Box>
                                            <Heading size="sm" color="white" mb={2}>Objective</Heading>
                                            <Text color="gray.300" lineHeight="1.6">
                                                Create an EHR-agnostic solution that would work seamlessly across different healthcare environments.
                                            </Text>
                                        </Box>
                                        <Box>
                                            <Heading size="sm" color="white" mb={2}>Approach</Heading>
                                            <Text color="gray.300" lineHeight="1.6">
                                                Redesigned the core architecture and user flows to function independently while maintaining data integration capabilities.
                                            </Text>
                                        </Box>
                                        <Box>
                                            <Heading size="sm" color="white" mb={2}>Results</Heading>
                                            <Text color="gray.300" lineHeight="1.6">
                                                Improved user satisfaction by 45% and increased adoption rates across healthcare facilities with the new EHR-agnostic application.
                                            </Text>
                                        </Box>
                                    </VStack>
                                </Box>
                            )}
                        </VStack>
                    </Stack>
                </Box>
                {/* Project 2 */}
                <Box>
                    <Stack
                        direction={{ base: 'column', md: 'row' }}
                        bg="gray.800"
                        borderRadius="lg"
                        p={6}
                        spacing={6}
                        align="stretch"
                    >
                        <Image
                            src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80"
                            alt="Project 2"
                            boxSize={{ base: '100%', md: '180px' }}
                            objectFit="cover"
                            borderRadius="md"
                            flexShrink={0}
                        />
                        <VStack align="flex-start" spacing={4} flex={1}>
                            <Heading size="md" color="white">Reducing onboarding friction at Arcoscan</Heading>
                            <Text color="gray.300" lineHeight="1.6">Reducing the time-to-completion of onboarding through biometric age verification.</Text>
                            <HStack spacing={4}>
                                <Button
                                    colorScheme="green"
                                    variant="solid"
                                    bg="green.500"
                                    color="white"
                                    onClick={() => setShowTldr2((v) => !v)}
                                >
                                    {showTldr2 ? 'Hide TLDR' : 'Read TLDR'}
                                </Button>
                                <Button
                                    as={NextLink}
                                    href="/true-see"
                                    colorScheme="green"
                                    variant="outline"
                                >
                                    View Case Study
                                </Button>
                            </HStack>
                            {showTldr2 && (
                                <Box bg="gray.700" p={6} mt={2} borderRadius="lg" width="100%">
                                    <VStack align="flex-start" spacing={6}>
                                        <Box>
                                            <Heading size="sm" color="white" mb={2}>Project Summary</Heading>
                                            <Text color="gray.300" lineHeight="1.6">
                                                Arcoscan&apos;s onboarding process was causing high drop-off rates. We implemented biometric age verification to streamline the process.
                                            </Text>
                                        </Box>
                                        <Box>
                                            <Heading size="sm" color="white" mb={2}>Context</Heading>
                                            <Text color="gray.300" lineHeight="1.6">
                                                Users were abandoning the onboarding process due to lengthy verification steps, impacting conversion rates and user acquisition.
                                            </Text>
                                        </Box>
                                        <Box>
                                            <Heading size="sm" color="white" mb={2}>Objective</Heading>
                                            <Text color="gray.300" lineHeight="1.6">
                                                Simplify the verification process while maintaining compliance with age verification requirements.
                                            </Text>
                                        </Box>
                                        <Box>
                                            <Heading size="sm" color="white" mb={2}>Approach</Heading>
                                            <Text color="gray.300" lineHeight="1.6">
                                                Redesigned the onboarding flow with biometric verification technology to reduce friction and improve user experience.
                                            </Text>
                                        </Box>
                                        <Box>
                                            <Heading size="sm" color="white" mb={2}>Results</Heading>
                                            <Text color="gray.300" lineHeight="1.6">
                                                Reduced onboarding time by 60% and increased conversion rates by 35% through the implementation of biometric verification.
                                            </Text>
                                        </Box>
                                    </VStack>
                                </Box>
                            )}
                        </VStack>
                    </Stack>
                </Box>
                {/* Project 3: Older Work */}
                <Box>
                    <Stack
                        direction={{ base: 'column', md: 'row' }}
                        bg="gray.800"
                        borderRadius="lg"
                        p={6}
                        spacing={6}
                        align="stretch"
                    >
                        <Image
                            src="https://placehold.co/400x300/333/white?text=Older+Work"
                            alt="Older Work"
                            boxSize={{ base: '100%', md: '180px' }}
                            objectFit="cover"
                            borderRadius="md"
                            flexShrink={0}
                        />
                        <VStack align="flex-start" spacing={4} flex={1}>
                            <Heading size="md" color="white">Older Work</Heading>
                            <Text color="gray.300" lineHeight="1.6">
                                A collection of my previous projects, spanning product design, UX, and creative technology. Includes highlights from various industries and roles.
                            </Text>
                            <HStack spacing={4}>
                                <Button
                                    as={NextLink}
                                    href="/older-work"
                                    colorScheme="blue"
                                    variant="solid"
                                    bg="blue.500"
                                    color="white"
                                >
                                    View Portfolio
                                </Button>
                            </HStack>
                        </VStack>
                    </Stack>
                </Box>
            </VStack>
        </Box>
    )
} 