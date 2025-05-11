'use client'

import { Box, Heading, Text, VStack } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import ProjectsSection from './components/ProjectsSection'
import AboutAndWorkSection from './components/AboutAndWorkSection'
import Footer from './components/Footer'

export default function Home() {
  return (
    <Box minH="100vh" bg="gray.900">
      <NavBar />
      <Box maxW="6xl" mx="auto" mt={20} px={8}>
        <VStack align="flex-start" spacing={6}>
          <Box>
            <Text fontWeight="bold" fontSize="lg" mb={1} color="white">Martin Tejeda</Text>
            <Text color="gray.300" fontSize="md">
              Currently Product Designer @ TRUE-See.
            </Text>
          </Box>
          <Heading as="h1" fontSize={["4xl", "6xl", "8xl"]} fontWeight="light" color="white" letterSpacing="tighter" lineHeight="0.9">
            Business minded & driven by user outcomes.
          </Heading>
        </VStack>
      </Box>
      <ProjectsSection />
      <AboutAndWorkSection />
      <Footer />
    </Box>
  )
}
