import { Heading, Center, Text, Box } from "@chakra-ui/react";

const Results = () => {
  const city = "Tel Aviv";
  const result = "plastic";
  const explanation =
    "Plastic is a non-renewable resource that takes centuries to decompose. It is estimated that 8 million metric tons of plastic enter the ocean every year.";

  return (
    <Center m={5} display="flex" flexDirection="column">
      <Heading as="h1" size="2xl" mb={5}>
        Results
      </Heading>
      <Box textAlign="left">
        <Text>
          Your picture has been identified as <strong>{result}</strong>.
        </Text>

        <Text mt={5}>
          <strong>How does {result} harm the envoirment?</strong>
        </Text>
        <Text>{explanation}</Text>
        <Text mt={5}>
          <strong>Recycling rules in {city}</strong>
        </Text>
        <Text>
          <strong>1. </strong>
          Plastic bottles and bags should be thrown in the{" "}
          <strong
            style={{
              backgroundColor: "#FDE047",
              padding: "0.2rem",
            }}
          >
            yellow
          </strong>{" "}
          bin.
        </Text>
        <Text>
          <strong>2. </strong>
          Plastic containers should be thrown in the{" "}
          <strong
            style={{
              backgroundColor: "#60A5FA",
              color: "white",
              padding: "0.2rem",
            }}
          >
            blue
          </strong>{" "}
          bin.
        </Text>
      </Box>
    </Center>
  );
};

export default Results;
