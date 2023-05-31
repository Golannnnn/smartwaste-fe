import React, { useState } from "react";
import { FaCamera } from "react-icons/fa";
import { Button, Text, Heading, Box, Center, Container } from "@chakra-ui/react";
import "../index.css"

const Home = () => {
  const [file, setFile] = useState("");

  const handleUpdate = (e) => {
    e.preventDefault();
  };

  return (
    <Center display="flex" flexDirection="column" bg="#024731" color="#fff">
      <Heading px="10px" py="30px">
        Upload, Learn, Locate, Recycle.
      </Heading>
      <Text px="20px" pb="15px">
        Join the recycling revolution with SmartWaste and make a positive impact
        on your environment and future.
      </Text>
      <Box
        bg="#f8f8f2"
        borderRadius="22px"
        color="#333"
        minWidth="80%"
        h="auto"
        p="15px"
        m="15px"
        textAlign="left"
      >
        <form>
          <div className="formInput">
            <label htmlFor="file">
              Upload your photo: <FaCamera className="icon" style={{ cursor: "pointer" }} />
            </label>
            <input
              type="file"
              id="file"
              onChange={(e) => setFile(e.target.files[0])}
              style={{ display: "none" }}
            />
          </div>
          <Text pb="15px">
            Upload a photo of the recycled item for identification and to find
            the nearest recycling pin.
          </Text>
          <Button onClick={handleUpdate} colorScheme="green">
            Upload
          </Button>
        </form>
      </Box>
    </Center>
  );
};

export default Home;
