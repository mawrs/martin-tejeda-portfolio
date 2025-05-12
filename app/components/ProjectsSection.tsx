import { useState } from 'react'
import { Box, Stack, Image, Heading, Text, Button, VStack, HStack, UnorderedList, ListItem } from '@chakra-ui/react'
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
                                    colorScheme="orange"
                                    variant="solid"
                                    bg="orange.600"
                                    _hover={{ bg: "orange.500" }}
                                    color="white"
                                    borderWidth="2px"
                                    borderColor="orange.800"
                                    boxShadow="inset 0px 1px 2px 0px rgba(255,255,255,0.3)"
                                    onClick={() => setShowTldr1((v) => !v)}
                                >
                                    {showTldr1 ? 'Hide TLDR' : 'Read TLDR'}
                                </Button>
                                <Button
                                    as={NextLink}
                                    href="#"
                                    colorScheme="gray"
                                    variant="solid"
                                    // bg="gray.600"
                                    // _hover={{ bg: "gray.500" }}
                                    color="white"
                                    borderWidth="2px"
                                    borderColor="gray.800"
                                    boxShadow="inset 0px 1px 2px 0px rgba(255,255,255,0.3)"
                                    isDisabled={true}
                                >
                                    Case Study Coming Soon
                                </Button>
                            </HStack>
                            {showTldr1 && (
                                <Box bg="gray.700" p={6} mt={2} borderRadius="lg" width="100%">
                                    <VStack align="flex-start" spacing={4}>
                                        <Box>
                                            <Heading size="sm" color="white" mb={2}>Project Summary</Heading>
                                            <Text color="gray.300" lineHeight="1.6">
                                                From end-to-end, I led TRUE‑See&apos;s shift away from EHR‑dependent workflows to broaden our user base and streamline photo capture & management.
                                            </Text>
                                        </Box>
                                        <Box>
                                            <Heading size="sm" color="white" mb={2}>Context</Heading>
                                            <Text color="gray.300" lineHeight="1.6">
                                                The app was tightly coupled with specific EHR systems, which narrowed our user base and added friction to everyday tasks.
                                            </Text>
                                        </Box>
                                        <Box>
                                            <Heading size="sm" color="white" mb={2}>Objective</Heading>
                                            <Text color="gray.300" lineHeight="1.6">
                                                Deliver an EHR-agnostic solution that would work seamlessly across different healthcare environments.
                                            </Text>
                                        </Box>
                                        <Box>
                                            <Heading size="sm" color="white" mb={2}>Approach</Heading>
                                            <Text color="gray.300" lineHeight="1.6">
                                                I audited current workflows, ran user interviews, prototyped a new capture UI, validated it with physicians, and partnered with engineers to rebuild the data layer on FHIR APIs while staying HIPAA‑compliant.
                                            </Text>
                                        </Box>
                                        <Box>
                                            <Heading size="sm" color="white" mb={2}>Results (so far)</Heading>
                                            <VStack align="flex-start" spacing={2} w="100%">
                                                <Text color="gray.300" fontWeight="semibold">Quantitative:</Text>
                                                <UnorderedList pl={4} color="gray.300">
                                                    <ListItem>30% increase in photo capture volume among private beta users.</ListItem>
                                                    <ListItem>7 LOIs signed with potential new customers.</ListItem>
                                                </UnorderedList>
                                                <Text color="gray.300" fontWeight="semibold" mt={2}>Qualitative:</Text>
                                                <UnorderedList pl={4} color="gray.300">
                                                    <ListItem>Users described the product as "way more intuitive" than before.</ListItem>
                                                    <ListItem>Physicians reported feeling more confident using the photo capture feature.</ListItem>
                                                    <ListItem> Nurses described the interface as "fast and convenient."</ListItem>
                                                </UnorderedList>
                                            </VStack>
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
                                    colorScheme="orange"
                                    variant="solid"
                                    bg="orange.600"
                                    _hover={{ bg: "orange.500" }}
                                    color="white"
                                    borderWidth="2px"
                                    borderColor="orange.800"
                                    boxShadow="inset 0px 1px 2px 0px rgba(255,255,255,0.3)"
                                    onClick={() => setShowTldr2((v) => !v)}
                                >
                                    {showTldr2 ? 'Hide TLDR' : 'Read TLDR'}
                                </Button>
                                <Button
                                    as={NextLink}
                                    href="#"
                                    colorScheme="gray"
                                    variant="solid"
                                    // bg="gray.600"
                                    // _hover={{ bg: "gray.500" }}
                                    color="white"
                                    borderWidth="2px"
                                    borderColor="gray.800"
                                    boxShadow="inset 0px 1px 2px 0px rgba(255,255,255,0.3)"
                                    isDisabled={true}
                                >
                                    Case Study Coming Soon
                                </Button>
                            </HStack>
                            {showTldr2 && (
                                <Box bg="gray.700" p={6} mt={2} borderRadius="lg" width="100%">
                                    <VStack align="flex-start" spacing={6}>
                                        <Box>
                                            <Heading size="sm" color="white" mb={2}>Project Summary</Heading>
                                            <Text color="gray.300" lineHeight="1.6">
                                                As the lead UX / UI designer, I transformed Arcoscan&apos;s biometric age-verification tech into a fast, trustworthy flow that users could complete in seconds.
                                            </Text>
                                        </Box>
                                        <Box>
                                            <Heading size="sm" color="white" mb={2}>Context</Heading>
                                            <Text color="gray.300" lineHeight="1.6">
                                                Online buyers of age‑restricted products faced slow ID uploads and confusing steps that caused over half of them to quit before finishing.
                                            </Text>
                                        </Box>
                                        <Box>
                                            <Heading size="sm" color="white" mb={2}>Objective</Heading>
                                            <Text color="gray.300" lineHeight="1.6">
                                                Create a facial‑recognition and liveness check that confirms age without ID photos and keeps users moving.
                                            </Text>
                                        </Box>
                                        <Box>
                                            <Heading size="sm" color="white" mb={2}>Approach</Heading>
                                            <Text color="gray.300" lineHeight="1.6">
                                                I researched biometric patterns, designed motion cues and clear copy, prototyped and iterated the flow, and partnered with engineers at a leading e-cigarette company during a three‑month pilot to fine‑tune errors and guidance.                                            </Text>
                                        </Box>
                                        <Box>
                                            <Heading size="sm" color="white" mb={2}>Results</Heading>
                                            <VStack align="flex-start" spacing={2} w="100%">
                                                <Text color="gray.300" fontWeight="semibold">Quantitative:</Text>
                                                <UnorderedList pl={4} color="gray.300">
                                                    <ListItem>Reduced abandonment rate from 51% to 20%.</ListItem>
                                                </UnorderedList>
                                                <Text color="gray.300" fontWeight="semibold" mt={2}>Qualitative:</Text>
                                                <UnorderedList pl={4} color="gray.300">
                                                    <ListItem>Users described the process as "quick and painless."</ListItem>
                                                </UnorderedList>
                                            </VStack>
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
                                    colorScheme="gray"
                                    variant="solid"
                                    bg="gray.600"
                                    _hover={{ bg: "gray.500" }}
                                    color="white"
                                    borderWidth="2px"
                                    borderColor="gray.800"
                                    boxShadow="inset 0px 1px 2px 0px rgba(255,255,255,0.3)"
                                >
                                    View Older Work
                                </Button>
                            </HStack>
                        </VStack>
                    </Stack>
                </Box>
            </VStack>
        </Box>
    )
} 