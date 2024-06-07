import { Box, Flex, Icon, Text, useTheme } from "@chakra-ui/react";
import bgImg from "../assets/home-background.jpg";
import useBaffle from "../hooks/useBaffle";
import ParticlesBg from "../components/ParticlesBg";
import { PiMouseScrollLight } from "react-icons/pi";

const Home = () => {
  const theme = useTheme();
  useBaffle(".baffle");

  const scrollToNext = () => {
    document
      .querySelector(".scroll-down")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Flex
      bg={`url(${bgImg}) no-repeat center/cover`}
      w="full"
      h="100vh"
      justify="center"
      align="center"
      className="scroll-snap"
      position="relative"
    >
      <ParticlesBg />
      <Box
        color={theme.colors.light}
        fontSize={{ base: "md", sm: 'xl', md: "2xl", lg: "4xl"}}
        fontWeight="600"
        lineHeight={2}
        letterSpacing={5}
        userSelect="none"
        opacity={0.8}
        textShadow={`3px 0px 3px ${theme.colors.dark}`}
      >
        <Text className="baffle">Flaviu Roșca</Text>
        <Text className="baffle">SOFTWARE DEVELOPER</Text>
        <Text className="baffle">Interactive CV</Text>
      </Box>

      <Icon
        as={PiMouseScrollLight}
        color={theme.colors.light}
        position="absolute"
        bottom={10}
        w={10}
        h={10}
        className="scroll-icon"
        onClick={scrollToNext}
      />
    </Flex>
  );
};

export default Home;
