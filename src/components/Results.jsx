import { Flex, Heading, Center, Text, Box, Image } from "@chakra-ui/react";
import { useEffect } from "react";
import blackBin from "../assets/blackbin.png";
import blueBin from "../assets/bluebin.png";
import greenBin from "../assets/greenbin.png";
import orangeBin from "../assets/orangebin.png";
import purpleBin from "../assets/purplebin.png";
import textileBin from "../assets/textilebin.png";
import Border from "./Border";

const types = {
  compost: {
    fact: [
      "Organic recycling reducing greenhouse gas emissions and producing nutrient-rich soil amendments for gardening and agriculture..",
    ],
    rule: "Organic waste should be thrown in the green bin.",
  },
  plastic: {
    fact: [
      "Plastic is a non-renewable resource that takes centuries to decompose. It is estimated that 8 million metric tons of plastic enter the ocean every year.",
    ],
    rule: "Plastic bottles and bags should be thrown in the orange bin.",
  },
  glass: {
    fact: [
      "Glass is 100% recyclable and can be recycled endlessly without loss in quality or purity.",
    ],
    rule: "Glass bottles and jars should be thrown in the purple bin.",
  },
  carton: {
    fact: [
      "Carton is a recyclable material that is used for packaging of a wide range of food and beverage products.",
    ],
    rule: "Carton should be thrown in the blue bin.",
  },
  packages: {
    fact: [
      "Recycling one ton of cardboard saves 9 cubic yards of landfill space and 46 gallons of oil.",
    ],
    rule: "Any  packages such as beverage cartoon and plastic should be thrown in the orange pin.",
  },
  paper: {
    fact: [
      "Recycling one ton of paper saves 3.3 cubic yards of landfill space and 17 trees from being cut down.",
    ],
    rule: "Any paper, newspaper and thing card boards should be thrown in the blue bin.",
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
    <>
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
                  ? orangeBin
                  : type === "Glass"
                  ? purpleBin
                  : type === "Carton"
                  ? blueBin
                  : type === "Paper"
                  ? blueBin
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
      <Border />
    </>
  );
};

export default Results;
