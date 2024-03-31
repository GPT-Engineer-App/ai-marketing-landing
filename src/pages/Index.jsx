import React from "react";
import { Box, Heading, Text, Button, Stack, Flex, Image, Container, SimpleGrid, Icon } from "@chakra-ui/react";
import { FaGoogle, FaRobot } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box bg="blue.500" color="white" py={20}>
        <Container maxW="container.lg">
          <Flex align="center" direction={{ base: "column", md: "row" }}>
            <Box flex="1" mr={{ md: 8 }}>
              <Heading as="h1" size="2xl" mb={4}>
                Professional Services Marketing JG
              </Heading>
              <Text fontSize="xl" mb={6}>
                Boost your business with the power of AI and Google Ads
              </Text>
              <Button colorScheme="white" size="lg">
                Get Started
              </Button>
            </Box>
            <Box flex="1">
              <Image src="https://images.unsplash.com/photo-1557838923-2985c318be48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nfGVufDB8fHx8MTcxMTkxMDI5OHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Marketing" />
            </Box>
          </Flex>
        </Container>
      </Box>

      {/* Services Section */}
      <Box py={20}>
        <Container maxW="container.lg">
          <Heading as="h2" size="xl" mb={10} textAlign="center">
            Our Services
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            <Box bg="gray.50" p={8} borderRadius="lg">
              <Icon as={FaRobot} w={12} h={12} color="blue.500" mb={4} />
              <Heading as="h3" size="lg" mb={4}>
                AI Marketing
              </Heading>
              <Text fontSize="lg">Leverage the power of artificial intelligence to optimize your marketing campaigns and drive better results.</Text>
            </Box>
            <Box bg="gray.50" p={8} borderRadius="lg">
              <Icon as={FaGoogle} w={12} h={12} color="blue.500" mb={4} />
              <Heading as="h3" size="lg" mb={4}>
                Google Ads
              </Heading>
              <Text fontSize="lg">Reach your target audience effectively with well-crafted Google Ads campaigns that maximize your ROI.</Text>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box bg="blue.500" color="white" py={20}>
        <Container maxW="container.lg" textAlign="center">
          <Heading as="h2" size="xl" mb={6}>
            Ready to Grow Your Business?
          </Heading>
          <Text fontSize="xl" mb={8}>
            Contact us today to learn how we can help you achieve your marketing goals.
          </Text>
          <Button colorScheme="white" size="lg">
            Get in Touch
          </Button>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;
