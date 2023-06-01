import React from "react";
import {
  Flex,
  Card,
  CardBody,
  Text,
  Heading,
  Stack,
  Image,
} from "@chakra-ui/react";
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
    <div
      style={{
        paddingBottom: "30px",
        position: "relative",
        marginBottom: "30px",
      }}
    >
      <Heading display="flex" justifyContent="center" my={5} id="rules">
        Rules
      </Heading>
      <Carousel
        additionalTransfrom={0}
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass="container"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 3,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 1,
          },
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots
        sliderClass=""
        slidesToSlide={1}
        swipeable
        removeArrowOnDeviceType={[
          "tablet",
          "mobile",
          "desktop",
          "superLargeDesktop",
        ]}
      >
        {/* card 1 */}
        <Card
          bg="white"
          minHeight="385px"
          borderRadius="10px"
          border="1px solid #ddd"
          // p="15px"
          m="10px"
          color="#fff"
        >
          <Stack
            direction="row"
            alignItems="center"
            bg="orange"
            borderTopRadius="10px"
            padding={3}
          >
            <Image
              src={packagingPin}
              alt="packagingPin"
              objectFit="cover"
              boxSize="45px"
              borderRadius="50%"
            />
            <Heading size="md" pl="13px">
              Packaging Bin
            </Heading>
          </Stack>
          <Text pt="15px" color="black" px={5}>
            <span>Toss:</span> Only discard empty packaging such as plastic,
            metal,beverage cartoon in the orange bin. Do NOT toss any wet waste
            or glass, as they disrupt recycling.
          </Text>
          <Text pt="15px" color="black" px={5} pb={5}>
            <span>Where to throw:</span> In neighborhoods where orange bins are
            not available, alternative options such as public space recycling
            centers, solar bins, and orange bag separation may be provided.
          </Text>
        </Card>
        {/* card 2 */}
        <Card
          bg="white"
          minHeight="385px"
          borderRadius="10px"
          border="1px solid #ddd"
          // p="15px"
          m="10px"
          color="#fff"
        >
          <Stack
            direction="row"
            alignItems="center"
            bg="purple"
            borderTopRadius="10px"
            padding={3}
          >
            <Image
              src={glassPin}
              alt="glassPin"
              objectFit="cover"
              boxSize="45px"
              borderRadius="50%"
            />
            <Heading size="md" pl="13px">
              Glass Bin
            </Heading>
          </Stack>
          <Text pt="15px" color="black" px={5}>
            <span>Toss:</span> Only EMPTY glass packaging such as bottles and
            jars WITHOUT the lid. Baby food jars should be discarded separately.
          </Text>
          <Text pt="15px" color="black" px={5} pb={5}>
            <span>Where to throw:</span> In purple bins. It is crucial to
            separate glass into the dedicated bin as mixing it with other waste
            makes sorting difficult.
          </Text>
        </Card>
        {/* card 3 */}
        <Card
          bg="white"
          minHeight="385px"
          borderRadius="10px"
          border="1px solid #ddd"
          // p="15px"
          m="10px"
          color="#fff"
        >
          <Stack
            direction="row"
            alignItems="center"
            bg="#0f52ba"
            borderTopRadius="10px"
            padding={3}
          >
            <Image
              src={paperPin}
              alt="paperPin"
              objectFit="cover"
              boxSize="45px"
              borderRadius="50%"
            />
            <Heading size="md" pl="13px">
              Paper, newspaper and thin cardboard bin
            </Heading>
          </Stack>
          <Text pt="15px" color="black" px={5}>
            <span>Toss:</span> newspaper, books, cereal boxes, pamphlets, egg
            cartons. Do NOT toss milk cartons as cardboard, they should be
            discarded in the orange packaging bin for recycling.
          </Text>
          <Text pt="15px" color="black" px={5} pb={5}>
            <span>Where to throw:</span> In the blue bin.
          </Text>
        </Card>
        {/* card 4 */}
        <Card
          bg="white"
          minHeight="385px"
          borderRadius="10px"
          border="1px solid #ddd"
          // p="15px"
          m="10px"
          color="#fff"
        >
          <Stack
            direction="row"
            alignItems="center"
            bg="#2CA555"
            borderTopRadius="10px"
            padding={3}
          >
            <Image
              src={organicPin}
              alt="organicPin"
              objectFit="cover"
              boxSize="45px"
              borderRadius="50%"
            />
            <Heading size="md" pl="13px">
              Organic bin/composter
            </Heading>
          </Stack>
          <Text pt="15px" color="black" px={5}>
            <span>Toss:</span> a composter is a facility where organic waste is
            deposited to undergo a controlled process of turning it into
            fertilizer.
          </Text>
          <Text pt="15px" color="black" px={5} pb={5}>
            <span>Where to throw:</span> the composter is a closed but
            ventilated container that ensures an optimal composting process and
            prevents unpleasant odors and improper use.
          </Text>
        </Card>
        {/* card 5 */}
        <Card
          bg="white"
          minHeight="385px"
          borderRadius="10px"
          border="1px solid #ddd"
          // p="15px"
          m="10px"
          color="#fff"
        >
          <Stack
            direction="row"
            alignItems="center"
            bg="#2e5894"
            borderTopRadius="10px"
            padding={3}
          >
            <Image
              src={textilesPin}
              alt="textiles bin"
              objectFit="cover"
              boxSize="45px"
              borderRadius="50%"
            />
            <Heading size="md" pl="13px">
              Textiles bin
            </Heading>
          </Stack>
          <Text pt="15px" color="black" px={5}>
            <span>Toss:</span> old clothes, shoes, bedding, and bags.
          </Text>
          <Text pt="15px" color="black" px={5} pb={5}>
            <span>Where to throw:</span> in the blue and grey recycling textiles
            bins for.
          </Text>
        </Card>
        {/* card 6 */}
        <Card
          bg="white"
          minHeight="385px"
          borderRadius="10px"
          border="1px solid #ddd"
          // p="15px"
          m="10px"
          color="#fff"
        >
          <Stack
            direction="row"
            alignItems="center"
            //very dark grey color
            bg="#202020"
            borderTopRadius="10px"
            padding={3}
          >
            <Image
              src={electronicPin}
              alt="electronicPin"
              objectFit="cover"
              boxSize="45px"
              borderRadius="50%"
            />
            <Heading size="md" pl="13px">
              Electronic Bin
            </Heading>
          </Stack>
          <Text pt="15px" color="black" px={5}>
            <span>Toss:</span> batteries and electronic devices such as cables,
            chargers, telephones, watches, lamps, and electric toys.
          </Text>
          <Text pt="15px" color="black" px={5} pb={5}>
            <span>Where to throw:</span> the town halls and community centers.
            Operating hours are specified.
          </Text>
        </Card>
      </Carousel>
    </div>
  );
};

export default Rules;
