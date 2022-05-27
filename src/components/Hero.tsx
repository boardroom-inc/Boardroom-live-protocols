import {
  Flex,
  Heading,
  Image,
  VStack,
  LightMode,
  DarkMode,
} from "@chakra-ui/react";

export const Hero = ({ title }: { title: string }) => (
  <VStack
    justifyContent="center"
    alignItems="center"
    height="100vh"
    bgGradient="linear(to-l, heroGradientStart, heroGradientEnd)"
    bgClip="text"
    mb={20}
  >
    <LightMode>
      <Image src="logo-on-light.png" htmlWidth={300} objectFit="contain" />
    </LightMode>
   
    <Heading fontSize="6vw">{title}</Heading>
  </VStack>
);

Hero.defaultProps = {
  title: "Live Integrations",
};
