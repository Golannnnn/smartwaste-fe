import {
  Heading,
  Center,
  Text,
  Flex,
  Image,
  Box,
  useBreakpointValue,
} from "@chakra-ui/react";
import bg from "../assets/about_bg.jpg";

const About = () => {
  const isLargeScreen = useBreakpointValue({ base: false, lg: true });

  return (
    <Center
      display="flex"
      flexDirection="column"
      alignItems="center"
      pt={3}
      id="about"
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
          pb={10}
          pt={5}
          borderRadius="10px"
          m="25px"
          maxW="800px"
          h={isLargeScreen ? "300px" : "200px"}
        >
          About us
        </Heading>
        <Image
          src={bg}
          alt="background"
          objectFit="fill"
          w="100%"
          mb={5}
          borderRadius="22px"
          m="25px"
          maxW="800px"
          h={isLargeScreen ? "300px" : "200px"}
        />
      </Flex>
      <Text
        fontSize="2xl"
        fontWeight="bold"
        mb={5}
        mx={5}
        color="#f8f8f2"
        textAlign="center"
      >
        "Making the world a cleaner place"
      </Text>
      <Box
        bg="#f8f8f2"
        borderRadius="10px"
        color="#333"
        maxWidth="800px"
        h="auto"
        px="15px"
        py="25px"
        m="15px"
        textAlign="left"
      >
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
        <Text fontSize="lg" mb={5} mx={5} color="gray.700" pt="10px">
          We are dedicated to making the world a cleaner place. We believe that
          recycling is the key to a cleaner world and spreading awareness is the
          first step. We want to make recycling accessible to everyone and make
          it easy to recycle.
        </Text>
      </Box>
      <Box
        bg="#f8f8f2"
        borderRadius="10px"
        color="#333"
        maxWidth="800px"
        h="auto"
        px="15px"
        py="25px"
        m="15px"
        textAlign="left"
        mb="35px"
      >
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
        <Text fontSize="lg" mb={5} mx={5} color="gray.700" pt="10px">
          We use a machine learning model to identify your waste, give you
          localized information about recycling, the local rules about how and
          where to recycle and guide you to the nearest recycling center.
        </Text>
      </Box>
    </Center>
  );
};

export default About;
