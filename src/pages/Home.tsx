import { Flex, useTheme } from "@chakra-ui/react";
import bgImg from "../assets/home-background.jpg";

const Home = () => {
  //   const theme = useTheme();

  return (
    <Flex bg={`url(${bgImg}) no-repeat center/cover`} w="full" h="100vh">
      Home
    </Flex>
  );
};

export default Home;
