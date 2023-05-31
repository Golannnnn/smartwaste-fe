import React, { useState, useEffect } from "react";
import { FaFolder } from "react-icons/fa";
import {
  Flex,
  Button,
  Text,
  Heading,
  Box,
  Center,
  Input,
  Avatar,
  Image,
} from "@chakra-ui/react";
import "../index.css";
import axios from "axios";

const result = [
  {
    location: {
      type: "Point",
      coordinates: [34.795657, 32.124055],
    },
    _id: "64776fd80fec14e54da634eb",
    type: "Compost",
    street: "Avraham Boyer",
    number: 1,
  },
  {
    location: {
      type: "Point",
      coordinates: [34.792388, 32.119144],
    },
    _id: "64776fd80fec14e54da634e1",
    type: "Compost",
    street: "Dulchin",
    number: null,
  },
  {
    location: {
      type: "Point",
      coordinates: [34.809182, 32.116853],
    },
    _id: "64776fd80fec14e54da634e6",
    type: "Compost",
    street: "Hurshat Bon",
    number: null,
  },
];

const Home = ({ handleResult }) => {
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState(null);
  const [myLocation, setMyLocation] = useState({
    // tel aviv is the default location
    lat: 43.6532,
    lng: 34.7721026,
  });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setMyLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      });
    } else {
      console.log("Geolocation is not supported for this Browser/OS.");
    }
  }, []);

  useEffect(() => {
    if (file) {
      document.getElementById("upload").scrollIntoView();
    }
  }, [file]);

  const handleUpdate = (e) => {
    e.preventDefault();

    const form = new FormData();
    form.append("picture", file);
    form.append("cords", JSON.stringify(myLocation));
    uploadPicture(form);
  };

  const uploadPicture = async (form) => {
    setLoading(true);
    try {
      // const res = await axios.post("http://localhost:8080/bins/upload", form, {
      //   headers: {
      //     "Content-Type": "multipart/form-data",
      //   },
      // });
      // console.log(res);
      handleResult(result);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      setFile(null);
      document.getElementById("upload-form").reset();
    }
  };

  return (
    <Center
      display="flex"
      flexDirection="column"
      bg="#024731"
      color="#fff"
      pb={5}
    >
      <Heading px={5} py={5}>
        Upload, Learn, Locate, Recycle.
      </Heading>
      <Text px={5} pb={5} fontSize="lg">
        Join the recycling revolution with SmartWaste and make a positive impact
        on your environment and future.
      </Text>
      <span id="upload"></span>
      <Box
        bg="#f8f8f2"
        borderRadius="22px"
        color="#333"
        maxWidth="500px"
        h="auto"
        p="15px"
        m="15px"
        textAlign="left"
      >
        <Flex px={2} flexDirection="column" pb={5}>
          <Text fontSize="sm">
            <strong>*</strong>Capture a clear picture of the product in a
            well-lit area with a clean background for optimal image quality.
          </Text>
          {file && (
            <Flex flexDirection="column" align="center" justify="center">
              <Image
                src={file && URL.createObjectURL(file)}
                alt="pet"
                borderRadius="md"
                mt={5}
                w="150px"
                h="150px"
              />
            </Flex>
          )}
        </Flex>
        <form id="upload-form">
          <Input
            size="lg"
            type="file"
            mb={5}
            // border="none"
            fontSize="md"
            sx={{
              "::file-selector-button": {
                backgroundColor: "green.500",
                border: "none",
                borderRadius: "md",
                color: "white",
                fontSize: "sm",
                fontWeight: "medium",
                mt: 2,
                mr: 2,
                px: 3,
                py: 1,
              },
            }}
            onChange={(e) => setFile(e.target.files[0])}
          />
          <Button
            onClick={handleUpdate}
            colorScheme="green"
            width="100%"
            isDisabled={!file}
            isLoading={loading}
          >
            Upload
          </Button>
        </form>
      </Box>
    </Center>
  );
};

export default Home;
