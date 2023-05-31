import React from "react";
import { Card, CardBody, Text, Heading } from "@chakra-ui/react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Rules = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div>
      <Carousel responsive={responsive}>
        <Card bg="orange" color="#fff" borderRadius="22px" my="10px" mx="6px" h="300px">
          <CardBody>
            <Heading size="md" pb="10px">
              Packaging Pin
            </Heading>
            <Text pb="10px">
              Toss: Only discard empty packaging such as plastic, metal,beverage
              cartoon in the orange bin. Do NOT toss any wet waste or glass, as
              they disrupt recycling.
            </Text>
            <Text>
              Where to throw: In neighborhoods where orange bins are not
              available, alternative options such as public space recycling
              centers, solar bins, and orange bag separation may be provided.
            </Text>
          </CardBody>
        </Card>
        <Card bg="purple" color="#fff" borderRadius="22px" my="10px" mx="6px" h="300px">
          <CardBody>
            <Heading size="md" pb="10px">
              Glass Pin
            </Heading>
            <Text pb="10px">
              Toss: Only EMPTY glass packaging such as bottles and jars WITHOUT
              the lid. Baby food jars should be discarded separately.
            </Text>
            <Text>
              Where to throw: In purple bins. It is crucial to separate glass into the dedicated bin as mixing it with other waste makes sorting difficult.
            </Text>
          </CardBody>
        </Card>

        <div>Item 2</div>
        <div>Item 3</div>
        <div>Item 4</div>
      </Carousel>

    </div>
  );
};

export default Rules;
