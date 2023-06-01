import { Flex, Heading, Center, Text, Box, Image } from "@chakra-ui/react";
import { useEffect } from "react";
import blackBin from "../assets/blackbin.png";
import blueBin from "../assets/bluebin.png";
import greenBin from "../assets/greenbin.png";
import orangeBin from "../assets/orangebin.png";
import purpleBin from "../assets/purplebin.png";
import textileBin from "../assets/textilebin.png";

const types = {
  compost: {
    fact: [
      "Plastic is a non-renewable resource that takes centuries to decompose. It is estimated that 8 million metric tons of plastic enter the ocean every year.",
    ],
    rule: "Plastic bottles and bags should be thrown in the yellow bin.",
  },
  plastic: {
    fact: [
      "Plastic is a non-renewable resource that takes centuries to decompose. It is estimated that 8 million metric tons of plastic enter the ocean every year.",
    ],
    rule: "Plastic bottles and bags should be thrown in the yellow bin.",
  },
};

const Results = ({ result }) => {
  const city = "Tel Aviv";
  const type = result[0].type;
  const fact = type && types[type.toLowerCase()].fact[0];
  const rule = type && types[type.toLowerCase()].rule;

  useEffect(() => {
    if (result) {
      document.getElementById("result").scrollIntoView();
    }
  }, []);

  return (
    <Center
      pt={2}
      m={5}
      mx={2}
      display="flex"
      flexDirection="column"
      id="result"
      alignItems="center"
      textAlign="center"
    >
      <Heading as="h1" size="2xl" mb={5}>
        Results
      </Heading>
      <Box textAlign="center">
        <Flex
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
          <Image
            src={
              type === "Compost"
                ? greenBin
                : type === "Plastic"
                ? blueBin
                : type === "Paper"
                ? purpleBin
                : type === "Glass"
                ? blackBin
                : type === "Textile"
                ? textileBin
                : orangeBin
            }
          />
          <Text fontSize="3xl">
            <strong>{type}</strong>
          </Text>
        </Flex>

        <Text mt={5} textAlign="left">
          <strong>Facts</strong>
        </Text>
        <Text maxW={500} textAlign="left">
          {fact}
        </Text>
        <Text mt={5} textAlign="left">
          <strong>Recycling rules in {city}</strong>
        </Text>
        <Text textAlign="left" maxW={500}>
          {rule}
        </Text>
      </Box>
    </Center>
  );
};

export default Results;
