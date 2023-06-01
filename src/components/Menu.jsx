import {
  Flex,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Text,
  useDisclosure,
  Link,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useRef } from "react";
import { IoMdCloudUpload } from "react-icons/io";
import { BsFillFileEarmarkRuledFill } from "react-icons/bs";
import { FaLightbulb } from "react-icons/fa";

const Menu = () => {
  const btnRef = useRef();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        ref={btnRef}
        onClick={onOpen}
        style={{
          zIndex: 999,
          backgroundColor: "#024731",
        }}
      >
        <HamburgerIcon w={6} h={6} />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
        size="xs"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader fontSize="xl" borderBottomWidth="1px">
            Menu
          </DrawerHeader>

          <DrawerBody fontSize="xl" mt={5} borderBottomWidth="1px">
            <Flex align="center" gap={2} mb={7}>
              <IoMdCloudUpload
                style={{
                  width: "30px",
                  height: "30px",
                }}
              />
              <Link href="#home" onClick={onClose}>
                <Text fontWeight={600}>Upload</Text>
              </Link>
            </Flex>
            <Flex align="center" gap={2} mb={7}>
              <BsFillFileEarmarkRuledFill
                style={{
                  width: "30px",
                  height: "30px",
                }}
              />
              <Link href="#rules" onClick={onClose}>
                <Text fontWeight={600}>Rules</Text>
              </Link>
            </Flex>
            <Flex align="center" gap={2} mb={5}>
              <FaLightbulb
                style={{
                  width: "30px",
                  height: "30px",
                }}
              />
              <Link href="#about" onClick={onClose}>
                <Text fontWeight={600}>About</Text>
              </Link>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Menu;
