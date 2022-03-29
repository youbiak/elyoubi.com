import { Container, Stack, VStack, Heading, Text, Box } from "@chakra-ui/react";
import Image from "./Image";
import avatar from "../../public/img/avatar.png";

const Hero = () => (
  <Stack
    as="section"
    mt={[4, 16]}
    alignItems={["center", "center", "flex-start"]}
    direction={["column", "column", "row"]}
    spacing={16}
  >
    <Box position="relative">
      <Image
        src="/img/avatar.avif"
        alt="Elyoubi"
        height={250}
        width={300}
        objectFit="cover"
        rounded="base"
      />
    </Box>

    <VStack maxW="sm" alignItems={["center", "flex-start"]}>
      <Heading size={"lg"}>Hey, I’m Akram El Youbi.</Heading>
      <Text fontSize="md">
        I’m a software engineer focusing on web & mobile development. Passionate
        about programming, design and problem solving. I’m originally from
        Morocco, and now living in Paris, France. Currenlty working as a
        freelance engineer, before that, I worked with companies such as Societe
        Generale, Dailymotion, Europcar.
      </Text>
    </VStack>
  </Stack>
);

export default Hero;
