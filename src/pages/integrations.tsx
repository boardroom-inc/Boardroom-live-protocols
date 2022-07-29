import React, { useEffect, useState } from "react";
import {
  chakra,
  Heading,
  Tag,
  Flex,
  useColorModeValue,
  Stack,
  SimpleGrid,
  Center,
} from "@chakra-ui/react";
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
  const dataColor = useColorModeValue("white", "gray.800");
  const bg = useColorModeValue("white", "gray.800");
  const bg2 = useColorModeValue("gray.200", "gray.700");

  return (
    <>
      <SimpleNavbar />
      <Center mt={5}>
        {" "}
        <Heading as="h3" size="lg">
          All Live Integrations
        </Heading>
      </Center>
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
          <SimpleGrid
            columns={{ base: 1, md: 4 }}
            w={{ base: "initial", md: "full" }}
            textTransform="uppercase"
            bg={bg2}
            color={"gray.500"}
            py={{ base: 1, md: 4 }}
            px={{ base: 2, md: 8 }}
            fontSize="md"
            fontWeight="hairline"
          >
            <span>Name</span>
            <chakra.span>Category</chakra.span>
            <chakra.span>Type</chakra.span>
            <chakra.span>Status</chakra.span>
          </SimpleGrid>
          {apidata.map((ele) => {
            return (
              <Flex
                direction={{ base: "row", md: "column" }}
                bg={dataColor}
                key={ele.cname}
              >
                <SimpleGrid
                  columns={{ base: 1, md: 4 }}
                  w="-moz-fit-content"
                  py={2}
                  px={10}
                  fontWeight="normal"
                >
                  <span>{ele.name}</span>
                  <span>{ele.categories}</span>
                  <span>{ele.type}</span>

                  <chakra.span textOverflow="ellipsis" overflow="hidden">
                    {ele.isEnabled ? (
                      <Tag colorScheme="green">Enabled</Tag>
                    ) : (
                      <Tag colorScheme="red">Disabled</Tag>
                    )}
                  </chakra.span>
                </SimpleGrid>
              </Flex>
            );
          })}
        </Stack>
      </Flex>
    </>
  );
}
