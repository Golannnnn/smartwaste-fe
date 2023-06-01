import { Heading, Center, Text, Box } from "@chakra-ui/react";
import { useEffect } from "react";
import Border from "./Border";

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
    <>
      <Center
        pt={2}
        m={5}
        mx={2}
        display="flex"
        flexDirection="column"
        id="result"
        mt="3rem"
        mb="4rem"
      >
        <Heading as="h1" size="2xl" mb={5}>
          Results
        </Heading>
        <Box textAlign="left">
          <Text>
            Your waste has been identified as <strong>{type}</strong>.
          </Text>

          <Text mt={5}>
            <strong>How does {type.toLowerCase()} harm the envoirment?</strong>
          </Text>
          <Text>{fact}</Text>
          <Text mt={5}>
            <strong>Recycling rules in {city}</strong>
          </Text>
          <Text>{rule}</Text>
        </Box>
      </Center>
      <Border />
    </>
  );
};

export default Results;
