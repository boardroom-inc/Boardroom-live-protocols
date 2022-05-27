import React from "react";
import {
  Link as ChakraLink,
  Text,
  Code,
  List,
  ListIcon,
  ListItem,
} from "@chakra-ui/react";
import { CheckCircleIcon, LinkIcon,HamburgerIcon } from "@chakra-ui/icons";
import {
  Image,
  chakra,
  Box,
  Flex,
  useColorModeValue,
  VisuallyHidden,
  HStack,
  Button,
  useDisclosure,
  VStack,
  IconButton,
  CloseButton,
} from "@chakra-ui/react";

export default function SimpleNavbar() {
  const bg = useColorModeValue("gray.100", "gray.800");
  const mobileNav = useDisclosure();

  return (
    <React.Fragment>
      <chakra.header
        bg={bg}
        w="full"
        px={{ base: 2, sm: 4 }}
        py={4}
        shadow="md"
      >
        <Flex alignItems="center" justifyContent="space-between" mx="auto">
          <Flex>
            <chakra.a
              href="/"
              title="Home Page"
              display="flex"
              alignItems="center"
            >
              <Image
                src="logo-on-light.png"
                htmlWidth={200}
                objectFit="contain"
              />
              <VisuallyHidden>Choc</VisuallyHidden>
            </chakra.a>
          </Flex>
          <HStack display="flex" alignItems="center" spacing={1}>
            <HStack
              spacing={1}
              mr={1}
              color="brand.500"
              display={{ base: "none", md: "inline-flex" }}
            >
              <ChakraLink
                isExternal
                href="https://boardroom.io/"
                flexGrow={1}
                mr={2}
              >
                <Button colorScheme="gray" size="sm">
                  Dashboard
                </Button>
              </ChakraLink>

              <ChakraLink
                isExternal
                href="https://swagger.boardroom.info/"
                flexGrow={1}
                mr={2}
              >
                <Button colorScheme="gray" size="sm">
                  Boardroom API
                </Button>
              </ChakraLink>

              <ChakraLink
                isExternal
                href="https://docs.boardroom.info/"
                flexGrow={1}
                mr={2}
              >
                <Button colorScheme="gray" size="sm">
                  Documentation
                </Button>
              </ChakraLink>

              <ChakraLink
                isExternal
                href="https://discord.gg/EtnpXen9eV"
                flexGrow={1}
                mr={2}
              >
                <Button colorScheme="gray" size="sm">
                  Discord
                </Button>
              </ChakraLink>

              <ChakraLink
                isExternal
                href="https://twitter.com/boardroom_info"
                flexGrow={1}
                mr={2}
              >
                <Button colorScheme="gray" size="sm">
                  Twitter
                </Button>
              </ChakraLink>
            </HStack>

            <Box display={{ base: "inline-flex", md: "none" }}>
              <IconButton
                display={{ base: "flex", md: "none" }}
                aria-label="Open menu"
                fontSize="20px"
                icon={<HamburgerIcon/>}

                color={useColorModeValue("gray.800", "inherit")}
                onClick={mobileNav.onOpen}
              />

              <VStack
                pos="absolute"
                top={0}
                left={0}
                right={0}
                display={mobileNav.isOpen ? "flex" : "none"}
                flexDirection="column"
                p={2}
                pb={4}
                m={2}
                bg={bg}
                spacing={3}
                rounded="sm"
                shadow="sm"
              >
                <CloseButton
                  aria-label="Close menu"
                  onClick={mobileNav.onClose}
                />

                <ChakraLink
                  isExternal
                  href="https://boardroom.io/"
                  flexGrow={1}
                  mr={2}
                >
                  <Button colorScheme="gray" size="sm">
                    Dashboard
                  </Button>
                </ChakraLink>

                <ChakraLink
                  isExternal
                  href="https://swagger.boardroom.info/"
                  flexGrow={1}
                  mr={2}
                >
                  <Button colorScheme="gray" size="sm">
                    Boardroom API
                  </Button>
                </ChakraLink>

                <ChakraLink
                  isExternal
                  href="https://docs.boardroom.info/"
                  flexGrow={1}
                  mr={2}
                >
                  <Button colorScheme="gray" size="sm">
                    Documentation
                  </Button>
                </ChakraLink>

                <ChakraLink
                  isExternal
                  href="https://discord.gg/EtnpXen9eV"
                  flexGrow={1}
                  mr={2}
                >
                  <Button colorScheme="gray" size="sm">
                    Discord
                  </Button>
                </ChakraLink>

                <ChakraLink
                  isExternal
                  href="https://twitter.com/boardroom_info"
                  flexGrow={1}
                  mr={2}
                >
                  <Button colorScheme="gray" size="sm">
                    Twitter
                  </Button>
                </ChakraLink>
              </VStack>
            </Box>
          </HStack>
        </Flex>
      </chakra.header>
    </React.Fragment>
  );
}
