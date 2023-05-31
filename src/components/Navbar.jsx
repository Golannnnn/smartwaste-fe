import { Flex, Image, Text } from "@chakra-ui/react";
import logoPng from "../assets/smartwaste_logo.png";
import logoSvg from "../assets/smartwaste_logo.svg";
import Menu from "./Menu";
import { TbLocationFilled } from "react-icons/tb";

const Navbar = () => {
  const city = "Tel Aviv, Israel";
  return (
    <div id="home">
      <Flex bg="#024731" color="#fff" align="center" justify="space-between">
        <Flex align="center">
          <Menu />
          <Image
            src={logoSvg}
            alt="SmartWaste logo"
            style={{
              width: "120px",
              height: "50px",
            }}
          />
        </Flex>
        <Flex align="center" gap={2} mr={3}>
          <TbLocationFilled />
          <Text fontSize="sm" fontWeight="bold">
            {city}
          </Text>
        </Flex>
      </Flex>
    </div>
  );
};

export default Navbar;
