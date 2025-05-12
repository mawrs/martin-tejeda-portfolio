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
                        Older Work
                    </Heading>
                    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={12} w="100%">
                        <Box>
                            <Heading as="h2" size="md" color="white" mb={2}>
                                Orverview
                            </Heading>
                            <Text color="gray.300">
                                A collection of older projects I&apos;ve worked on from various campaigns and different scopes across different industries and mediums.
                            </Text>
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
                    {/* Facebook Section */}
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
                                    Facebook
                                </Heading>
                            </Box>
                            <Box flex={1} maxW="600px">
                                <Text color="gray.300" fontSize="lg" fontWeight="bold" mb={4}>
                                    Contributed to rapid prototyping and A/B testing of two of our features:</Text>

                                <Text color="gray.300" fontSize="lg" mb={4}>
                                    <b>Admin Notifications</b>
                                    <br />
                                    I prototyped six design variants and set up segmented A/B tests that turned public‑figure pages into a focused hub, giving admins a quicker & cleaner way to spot what matters.
                                </Text>

                                <Text color="gray.300" fontSize="lg">
                                    <b>Top Fans</b>
                                    <br />
                                    To help superfans stand out, I designed badge options, built end‑to‑end prototypes, and ran mixed‑method tests that shipped a subtle Top Fans badge, driving an 11% engagement on posts in the first post‑launch quarter.
                                </Text>
                            </Box>
                        </Box>
                    </Box>
                    {/* Image below Context Section */}
                    <Box>
                        <Image
                            src="/facebook_notifications.png"
                            alt="Facebook Admin Notifications"
                            borderRadius="lg"
                            w="100%"
                            maxH="800px"
                            objectFit="cover"
                            my={6}
                        />
                        <Text color="gray.400" fontSize="lg" textAlign="center" mb={6}>
                            Facebook Admin Notifications dashboard showing the streamlined interface for public figure page management
                        </Text>
                    </Box>

                    {/* Image below Core Workflow Section */}
                    <Box>
                        <Image
                            src="/notification_variants.png"
                            alt="Notification Design Variants"
                            borderRadius="lg"
                            w="100%"
                            maxH="800px"
                            objectFit="cover"
                            my={6}
                        />
                        <Text color="gray.400" fontSize="lg" textAlign="center" mb={6}>
                            Six design variants tested during the A/B testing phase for optimizing admin notification experience
                        </Text>
                    </Box>
                    {/* Additional Image below Notification Variants */}
                    <Box>
                        <Image
                            src="top_fan.png"
                            alt="Facebook Top Fans Feature"
                            borderRadius="lg"
                            w="100%"
                            maxH="800px"
                            objectFit="cover"
                            my={6}
                        />
                        <Text color="gray.400" fontSize="lg" textAlign="center" mb={6}>
                            Top Fans badge in the wild
                        </Text>
                    </Box>
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
                                    Square
                                </Heading>
                            </Box>
                            <Box flex={1} maxW="600px">
                                <Text color="gray.300" fontSize="xl" fontWeight="bold">
                                    Built modular email templates to cut phishing at Square
                                </Text>
                                <Text color="gray.300" fontSize="lg" mt={4}>
                                    I audited every existing email, ran cross‑team workshops, and co‑designed a Figma‑based system of plug‑and‑play headers, bodies, and footers. After qualiatively A/B testing the new look, seller confidence in the new Square emails inceased significantly. Reports in phishinga atetmpts dropped by 21% within three months.                                </Text>
                            </Box>
                        </Box>
                    </Box>

                    {/* Square Project Images */}
                    <Box>
                        <Image
                            src="square_originals.png"
                            alt="Square Email Templates"
                            borderRadius="lg"
                            w="100%"
                            maxH="800px"
                            objectFit="cover"
                            my={6}
                        />
                        <Text color="gray.400" fontSize="lg" textAlign="center" mb={6}>
                            Brand and component inconsistencies in Square emails
                        </Text>
                    </Box>

                    <Box>
                        <Image
                            src="square_figjam.png"
                            alt="Square Cross-Team Workshop"
                            borderRadius="lg"
                            w="100%"
                            maxH="800px"
                            objectFit="cover"
                            my={6}
                        />
                        <Text color="gray.400" fontSize="lg" textAlign="center" mb={6}>
                            Cross-team workshops showing email component prioritization and design patterns
                        </Text>
                    </Box>

                    <Box>
                        <Image
                            src="square_final.png"
                            alt="Square Email Results"
                            borderRadius="lg"
                            w="100%"
                            maxH="800px"
                            objectFit="cover"
                            my={6}
                        />
                        <Text color="gray.400" fontSize="lg" textAlign="center" mb={6}>
                            Leveraging the new modular components to create new email templates
                        </Text>
                    </Box>

                    {/* Slide Section */}
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
                                    Slide
                                </Heading>
                            </Box>
                            <Box flex={1} maxW="600px">
                                <Text color="gray.300" fontSize="xl" fontWeight="bold">
                                    As lead designer, we shaped Slide&apos;s new self‑service "File a Claim" flow so 163,000 incoming policyholders could file without calling support.
                                </Text>
                                <Text color="gray.300" fontSize="lg" mt={4}>
                                    We kicked off an on‑site GV Design Sprint with Slide&apos;s execs, prototyped an end‑to‑end "File a Claim" experience, and spun up a Tailwind‑based design system that plugged straight into dev. In three months we took average claim time from 20 min to 8 min, nearly halved support tickets, and cleared the runway for Slide to absorb 163,000 new policies (and later another 86,000 from Farmers) without adding headcount.                                </Text>
                            </Box>
                        </Box>
                    </Box>

                    {/* Slide Project Images */}
                    <Box>
                        <Image
                            src="slide_executives.png"
                            alt="Slide executives"
                            borderRadius="lg"
                            w="100%"
                            maxH="800px"
                            objectFit="cover"
                            my={6}
                        />
                        <Text color="gray.400" fontSize="lg" textAlign="center" mb={6}>
                            Business and design discussions with the executive team
                        </Text>
                    </Box>

                    <Box>
                        <Image
                            src="slide_wireframes.png"
                            alt="Mid-fidelity screens depicting the 'File a Claim' self-service flow"
                            borderRadius="lg"
                            w="100%"
                            maxH="800px"
                            objectFit="cover"
                            my={6}
                        />
                        <Text color="gray.400" fontSize="lg" textAlign="center" mb={6}>
                            Mid-fidelity screens depicting the "File a Claim" self-service flow
                        </Text>
                    </Box>

                    <Box>
                        <Image
                            src="slide_hifi.png"
                            alt="Slide high-fidelity designs"
                            borderRadius="lg"
                            w="100%"
                            maxH="800px"
                            objectFit="cover"
                            my={6}
                        />
                        <Text color="gray.400" fontSize="lg" textAlign="center" mb={6}>
                            High-fidelity designs for the "File a Claim" self-service flow
                        </Text>
                    </Box>

                    <Box>
                        <Image
                            src="slide_final.png"
                            alt="Slide Final Designs"
                            borderRadius="lg"
                            w="100%"
                            maxH="800px"
                            objectFit="cover"
                            my={6}
                        />
                        <Text color="gray.400" fontSize="lg" textAlign="center" mb={6}>
                            Final designs after conducting usability testing
                        </Text>
                    </Box>

                    {/* Promontory Section - Hidden until content is ready */}
                    {/* 
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
                                    Promontory
                                </Heading>
                            </Box>
                            <Box flex={1} maxW="600px">
                                <Text color="gray.300" fontSize="xl" fontWeight="bold">
                                    Redesigned Promontory&apos;s "dead disco" feed into a lively fund‑intel dashboard
                                </Text>
                                <Text color="gray.300" fontSize="lg" mt={4}>
                                    As the sole product designer, I talked to EMFs and LPs, scrapped the low‑value social feed, and shipped a real‑time dashboard that surfaces who&apos;s investing, which funds are trending, and key market stats. The switch lifted 14-day retention from 20% to 35%, pushed weekly sessions from 1.8 → 3.1, and spiked EMF‑LP connections 150% in the first month.                                </Text>
                            </Box>
                        </Box>
                    </Box>

                    <Box>
                        <Image
                            src="promontory_dashboard.png"
                            alt="Promontory Dashboard"
                            borderRadius="lg"
                            w="100%"
                            maxH="800px"
                            objectFit="cover"
                            my={6}
                        />
                        <Text color="gray.400" fontSize="lg" textAlign="center" mb={6}>
                            Main compliance dashboard showing key regulatory metrics and risk indicators
                        </Text>
                    </Box>

                    <Box>
                        <Image
                            src="promontory_components.png"
                            alt="Promontory UI Components"
                            borderRadius="lg"
                            w="100%"
                            maxH="800px"
                            objectFit="cover"
                            my={6}
                        />
                        <Text color="gray.400" fontSize="lg" textAlign="center" mb={6}>
                            Component library developed for consistent data visualization across the platform
                        </Text>
                    </Box>

                    <Box>
                        <Image
                            src="promontory_results.png"
                            alt="Promontory Results"
                            borderRadius="lg"
                            w="100%"
                            maxH="800px"
                            objectFit="cover"
                            my={6}
                        />
                        <Text color="gray.400" fontSize="lg" textAlign="center" mb={6}>
                            User feedback and performance metrics showing 40% reduction in analysis time
                        </Text>
                    </Box>
                    */}
                </VStack>
            </Box>
            <Footer />
        </Box>
    )
} 