import { Box, Flex, Text, useTheme } from "@chakra-ui/react";
import bgImg from "../assets/home-background.jpg";
import useBaffle from "../hooks/useBaffle";

const Home = () => {
  const theme = useTheme();
  useBaffle(".baffle");

  return (
    <Flex
      bg={`url(${bgImg}) no-repeat center/cover`}
      w="full"
      h="100vh"
      justify="center"
      align="center"
    >
      <Box
        color={theme.colors.light}
        fontSize="2xl"
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
    </Flex>
  );
};

export default Home;
