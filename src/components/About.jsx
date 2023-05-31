import { Heading, Center, Text, Flex, Image } from "@chakra-ui/react";
import bg from "../assets/about_bg.jpg";

const About = () => {
  return (
    <Center
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      bg="#f8f8f2"
    >
      <Flex
        align="center"
        justify="center"
        flexDirection="column"
        textAlign="center"
        position="relative"
        w="100%"
      >
        <Heading
          w="100%"
          position="absolute"
          top={0}
          as="h1"
          size="2xl"
          mb={5}
          bg="linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.7) 50%, rgba(255,255,255,0) 100%)"
          pb={10}
          pt={5}
        >
          About us
        </Heading>
        <Image
          src={bg}
          alt="background"
          objectFit="fill"
          h="200px"
          w="100%"
          mb={5}
        />
      </Flex>
      <Text fontSize="xl" fontWeight="bold" mb={5} mx={5} color="gray.700">
        "Making the world a cleaner place"
      </Text>
      <Text
        fontSize="2xl"
        textAlign="left"
        fontWeight="bold"
        mx={5}
        borderBottom="5px solid #70a116"
        pr={5}
        mb={1}
      >
        Our motivation
      </Text>
      <Text fontSize="lg" mb={5} mx={5} color="gray.700">
        We are dedicated to making the world a cleaner place. We believe that
        recycling is the key to a cleaner world and spreading awareness is the
        first step. We want to make recycling accessible to everyone and make it
        easy to recycle.
      </Text>
      <Text
        fontSize="2xl"
        textAlign="left"
        fontWeight="bold"
        mx={5}
        borderBottom="5px solid #70a116"
        pr={5}
        mb={1}
      >
        Our solution
      </Text>
      <Text fontSize="lg" mb={5} mx={5} color="gray.700">
        We use a machine learning model to identify your waste, give you
        localized information about recycling, the local rules about how and
        where to recycle and guide you to the nearest recycling center.
      </Text>
    </Center>
  );
};

// #70a116

export default About;
