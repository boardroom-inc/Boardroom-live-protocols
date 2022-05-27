import React, { useEffect, useState } from "react";
import {
  chakra,
  Tag,
  Flex,
  useColorModeValue,
  Button,
  useBreakpointValue,
  Stack,
  SimpleGrid,
} from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import Link from "next/link";
import SimpleNavbar from "../components/SimpleNavbar";


export default function Component() {
  const [apidata, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://api.boardroom.info/v1/protocols")
      .then((res) => res.json())
      .then((data) => {
        setData(data.data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!apidata) return <p>No profile data</p>;
  console.log(apidata);
  console.log(typeof apidata);
  const data = [
    { name: "Segun Adebayo", email: "sage@chakra.com" },
    { name: "Josef Nikolas", email: "Josef@mail.com" },
    { name: "Lazar Nikolov", email: "Lazar@mail.com" },
    { name: "Abraham", email: "abraham@anu.com" },
  ];
  const dataColor = useColorModeValue("white", "gray.800");
  const bg = useColorModeValue("white", "gray.800");
  const bg2 = useColorModeValue("gray.200", "gray.700");

  return (
    <>
    <SimpleNavbar />
    <Flex
      w="full"
      bg="white"
      p={50}
      alignItems="center"
      justifyContent="center"
    >
      <Stack
        direction={{ base: "column" }}
        w="full"
        bg={{ md: bg }}
        shadow="lg"
      >
        {apidata.map((ele) => {
          return (
            <Flex
              direction={{ base: "row", md: "column" }}
              bg={dataColor}
              key={ele.cname}
            >
              <SimpleGrid
                spacingY={3}
                columns={{ base: 1, md: 5 }}
                w={{ base: 220, md: "full" }}
                textTransform="uppercase"
                bg={bg2}
                color={"gray.500"}
                py={{ base: 1, md: 4 }}
                px={{ base: 2, md: 10 }}
                fontSize="md"
                fontWeight="hairline"
              >
                <span>Name</span>
                <chakra.span >Category</chakra.span>
                <chakra.span >Type</chakra.span>
                <chakra.span >Live</chakra.span>
                <chakra.span textAlign={{ md: "right" }}>
                  Overview link
                </chakra.span>
              </SimpleGrid>
              <SimpleGrid
                spacingY={3}
                columns={{ base: 1, md: 5 }}
                w="full"
                py={2}
                px={10}
                fontWeight="hairline"
              >
                <span>{ele.name}</span>
                <span>{ele.categories}</span>
                <span>{ele.type}</span>
            
                <chakra.span
                  textOverflow="ellipsis"
                  overflow="hidden"
                >
                  {ele.isEnabled ? (
                    <Tag colorScheme="green">Enabled</Tag>
                  ) : (
                    <Tag colorScheme="red">Disabled</Tag>
                  )}
                </chakra.span>

                <Flex justify={{ md: "end" }}>
                  <a
                    href={`https://boardroom.io/${ele.cname}/overview`}
                    target="_blank"
                  >
                    <Button colorScheme="blue">
                      <ExternalLinkIcon></ExternalLinkIcon> &nbsp; View
                    </Button>
                  </a>
                </Flex>
              </SimpleGrid>
            </Flex>
          );
        })}
      </Stack>
    </Flex>
    </>
  );
}
