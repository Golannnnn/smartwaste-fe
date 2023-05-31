import React from "react";
import { Card, Text, Heading, Stack, Image } from "@chakra-ui/react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import packagingPin from "../assets/packaging_pin.jpg";
import glassPin from "../assets/glass_pin.jpg";
import paperPin from "../assets/paper_pin.jpg";
import textilesPin from "../assets/textiles_pin.jpg";
import electronicPin from "../assets/electronic_pin.jpg";
import organicPin from "../assets/organic_pin.jpg";
import "../index.css";

const Rules = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
      slideToSlide: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slideToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slideToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slideToSlide: 1,
    },
  };

  return (
    <>
      <Heading display="flex" justifyContent="center" my="2">
        Rules
      </Heading>
      <Carousel
        swipeable={true}
        draggable={true}
        showDots={true}
        responsive={responsive}
        ssr={true}
        keyBoardControl={true}
        customTransition="all .10"
        transitionDuration={500}
        removeArrowOnDeviceType={[
          "tablet",
          "mobile",
          "desktop",
          "superLargeDesktop",
        ]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-50-px"
        containerClass="carousel-with-custom-dots"
      >
        {/* card 1 */}
        <Card
          bg="orange"
          minHeight="320px"
          borderRadius="22px"
          p="15px"
          m="10px"
          color="#fff"
        >
          <Stack direction="row" alignItems="center">
            <Image
              src={packagingPin}
              alt="packagingPin"
              objectFit="cover"
              boxSize="45px"
              borderRadius="50%"
            />
            <Heading size="md" pl="13px">
              Packaging Pin
            </Heading>
          </Stack>
          <Text pt="15px">
            <span>Toss:</span> Only discard empty packaging such as plastic,
            metal,beverage cartoon in the orange bin. Do NOT toss any wet waste
            or glass, as they disrupt recycling.
          </Text>
          <Text pt="15px">
            <span>Where to throw:</span> In neighborhoods where orange bins are
            not available, alternative options such as public space recycling
            centers, solar bins, and orange bag separation may be provided.
          </Text>
        </Card>
        {/* card 2 */}
        <Card
          bg="purple"
          minHeight="320px"
          borderRadius="22px"
          p="15px"
          m="10px"
          color="#fff"
        >
          <Stack direction="row" alignItems="center">
            <Image
              src={glassPin}
              alt="packagingPin"
              objectFit="cover"
              boxSize="45px"
              borderRadius="50%"
            />
            <Heading size="md" pl="13px">
              Glass Pin
            </Heading>
          </Stack>
          <Text pt="15px">
            <span>Toss:</span> Only EMPTY glass packaging such as bottles and
            jars WITHOUT the lid. Baby food jars should be discarded separately.
          </Text>
          <Text pt="15px">
            <span>Where to throw:</span> In purple bins. It is crucial to
            separate glass into the dedicated bin as mixing it with other waste
            makes sorting difficult.
          </Text>
        </Card>
        {/* card 3 */}
        <Card
          bg="#0f52ba"
          minHeight="320px"
          borderRadius="22px"
          p="15px"
          m="10px"
          color="#fff"
        >
          <Stack direction="row" alignItems="center">
            <Image
              src={paperPin}
              alt="packagingPin"
              objectFit="cover"
              boxSize="45px"
              borderRadius="50%"
            />
            <Heading size="md" pl="13px">
              Paper, newspaper and thin cardboard Pin
            </Heading>
          </Stack>
          <Text pt="15px">
            <span>Toss:</span> newspaper, books, cereal boxes, pamphlets, egg
            cartons. Do NOT toss milk cartons as cardboard, they should be
            discarded in the orange packaging bin for recycling.
          </Text>
          <Text pt="15px">
            <span>Where to throw:</span> In the blue bin.
          </Text>
        </Card>
        {/* card 4 */}
        <Card
          bg="#2CA555"
          minHeight="320px"
          borderRadius="22px"
          p="15px"
          m="10px"
          color="#fff"
        >
          <Stack direction="row" alignItems="center">
            <Image
              src={organicPin}
              alt="packagingPin"
              objectFit="cover"
              boxSize="45px"
              borderRadius="50%"
            />
            <Heading size="md" pl="13px">
              Organic Pin/Composter
            </Heading>
          </Stack>
          <Text pt="15px">
            A composter is a facility where organic waste is deposited to
            undergo a controlled process of turning it into fertilizer.
          </Text>
          <Text pt="15px">
            The composter is a closed but ventilated container that ensures an
            optimal composting process and prevents unpleasant odors and
            improper use.
          </Text>
        </Card>
        {/* card 5 */}
        <Card
          bg="#2e5894"
          minHeight="320px"
          borderRadius="22px"
          p="15px"
          m="10px"
          color="#fff"
        >
          <Stack direction="row" alignItems="center">
            <Image
              src={textilesPin}
              alt="packagingPin"
              objectFit="cover"
              boxSize="45px"
              borderRadius="50%"
            />
            <Heading size="md" pl="13px">
              Textiles Pin
            </Heading>
          </Stack>
          <Text pt="15px">
            <span>Toss:</span> old clothes, shoes, bedding, and bags.
          </Text>
          <Text pt="15px">
            <span>Where to throw:</span> In the blue and grey recycling textiles
            bins for.
          </Text>
        </Card>
        {/* card 6 */}
        <Card
          bg="#9BA4B5"
          minHeight="320px"
          borderRadius="22px"
          p="15px"
          m="10px"
          color="#fff"
        >
          <Stack direction="row" alignItems="center">
            <Image
              src={electronicPin}
              alt="packagingPin"
              objectFit="cover"
              boxSize="45px"
              borderRadius="50%"
            />
            <Heading size="md" pl="13px">
              Electronic Pin
            </Heading>
          </Stack>
          <Text pt="15px">
            <span>Toss:</span> Batteries and electronic devices such as cables,
            chargers, telephones, watches, lamps, and electric toys.
          </Text>
          <Text pt="15px">
            <span>Where to throw:</span> 1. The town halls and community
            centers. Operating hours are specified.
          </Text>
          <Text>
            2. The reseller is obligated to accept the old product for recycling
            at no additional cost.
          </Text>
        </Card>
      </Carousel>
    </>
  );
};

export default Rules;
