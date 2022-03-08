import { Container, HStack, VStack, Heading, Text } from "@chakra-ui/react";
import Image from "./Image";
import avatar from "../../public/img/avatar.png";

const Hero = () => (
  <HStack mt="16" justifyContent="center" alignItems={"start"} spacing={8}>
    <Image
      src={avatar}
      alt="Picture of the author"
      width="100px"
      height="100px"
    />
    <VStack maxW="md" alignItems={"left"}>
      <Heading size={"lg"}>Hey, I’m Akram El Youbi.</Heading>
      <Text fontSize="sm">
        I’m a software engineer focusing on web & mobile development. Passionate
        about programming, design and problem solving. I’m originally from
        Morocco, and now living in Paris, France. Currenlty working as a
        freelance engineer, before that, I worked with companies such as Societe
        Generale, Dailymotion, Europcar ...
      </Text>
    </VStack>
  </HStack>
);

export default Hero;
