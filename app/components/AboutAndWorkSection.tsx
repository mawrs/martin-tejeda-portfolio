import { Box, Stack, Heading, Text, Image, SimpleGrid, VStack } from '@chakra-ui/react'

export default function AboutAndWorkSection() {
    return (
        <Box maxW="1200px" mx="auto" px={12} mt={24}>
            {/* About Section */}
            <Stack direction={{ base: 'column', md: 'row' }} spacing={16} align="center" mb={20}>
                {/* Left: Text */}
                <Box flex={1} minW={0}>
                    <Heading as="h2" size="2xl" mb={6} fontWeight="semibold" fontFamily="var(--font-host-grotesk)" color="white">
                        Experienced Product Designer & Strategist
                    </Heading>
                    <Text fontSize="lg" color="gray.300">
                        I&apos;m a UX specialist with over 5 years of experience leading early-stage startups and large-scale cross-functional projects that deliver value to 12M+ users all over the world.
                    </Text>
                </Box>
                {/* Right: Image Collage */}
                <Box flex={1} display="flex" justifyContent="center" alignItems="center" minW={0}>
                    <Box position="relative" w="260px" h="320px">
                        {/* Main Image */}
                        <Image
                            src="/headshot.png"
                            alt="Profile"
                            borderRadius="lg"
                            boxShadow="lg"
                            w="260px"
                            h="260px"
                            objectFit="cover"
                            zIndex={1}
                        />
                        {/* Badge Overlay */}
                        <Image
                            src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*LgCzD6KU29XX2q5fGt2Ofw.png"
                            alt="NNG Badge"
                            position="absolute"
                            top="-20px"
                            right="-20px"
                            w="70px"
                            h="70px"
                            borderRadius="full"
                            boxShadow="md"
                            bg="white"
                            p={2}
                            zIndex={3}
                        />
                        {/* Small Image Below - Repositioned to bottom right and on top */}
                        <Box
                            position="absolute"
                            right="20px"
                            bottom="20px"
                            w="120px"
                            h="100px"
                            boxShadow="lg"
                            zIndex={2}
                            bg="gray.800"
                            borderRadius="md"
                            p={1}
                        >
                            <Image
                                src="/leanstack.png"
                                alt="Jakob Nielsen"
                                borderRadius="md"
                                w="full"
                                h="80px"
                                objectFit="cover"
                            />
                            <Text fontSize="xs" color="gray.400" mt={1} textAlign="center">
                                Posing with Someone
                            </Text>
                        </Box>
                    </Box>
                </Box>
            </Stack>
            {/* Work History TL;DR */}
            <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={10} mt={16}>
                <VStack align="flex-start" spacing={1}>
                    <Heading as="h3" size="md" color="white">TRUE-See</Heading>
                    <Text color="gray.300">Design & Ops Lead</Text>
                    <Text color="gray.400">2025 — Present</Text>
                </VStack>
                <VStack align="flex-start" spacing={1}>
                    <Heading as="h3" size="md" color="white">MDSV Capital</Heading>
                    <Text color="gray.300">Head of Design & UX</Text>
                    <Text color="gray.400">2023 — 2025</Text>
                </VStack>
                <VStack align="flex-start" spacing={1}>
                    <Heading as="h3" size="md" color="white">Underbelly</Heading>
                    <Text color="gray.300">Product Designer, Design Lead</Text>
                    <Text color="gray.400">2021 — 2023</Text>
                </VStack>
                <VStack align="flex-start" spacing={1}>
                    <Heading as="h3" size="md" color="white">Data 4 Good</Heading>
                    <Text color="gray.300">UX Designer</Text>
                    <Text color="gray.400">2020 — 2021</Text>
                </VStack>
            </SimpleGrid>
        </Box>
    )
} 