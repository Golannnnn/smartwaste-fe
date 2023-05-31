import React, { useState } from "react";
import { FaFolder } from "react-icons/fa";
import { Container, Button, Text, Heading } from "@chakra-ui/react";

const Home = () => {
  const [file, setFile] = useState("");

  const handleUpdate = (e) => {
    e.preventDefault();
  };

  return (
    <Container
      maxW="m"
      bg="#024731"
      color="#fff"
      h="330px"
      py="10px"
      position="relative"
    >
      <Text>
        <Heading size="lg" py="20px">
          Upload, Learn, Locate, Recycle.
        </Heading>
        <Text>
          Join the recycling revolution with SmartWaste and make a positive
          impact on your environment and future.
        </Text>
      </Text>
      <Container
        bg="#f8f8f2"
        color="#024731"
        py="15px"
        mt="26px"
        borderRadius="22px"
        fontWeight="bold"
      >
        <form>
          <label htmlFor="file">
            Upload your photo:{" "}
            <FaFolder className="icon" style={{ cursor: "pointer" }} />
          </label>
          <Text>
            upload a photo of the recycled item for identification and to find
            the nearest recycling pin.
          </Text>
          <input
            type="file"
            id="file"
            onChange={(e) => setFile(e.target.files[0])}
            style={{ display: "none" }}
          />
          <Button onClick={handleUpdate} colorScheme="blue">
            Upload
          </Button>
        </form>
      </Container>
    </Container>
  );
};

export default Home;
