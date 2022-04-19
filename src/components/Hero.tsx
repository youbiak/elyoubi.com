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
        src="/img/avatar.jpg"
        alt="Elyoubi"
        height={250}
        width={300}
        objectFit="cover"
        rounded="base"
      />
    </Box>

    <VStack maxW="sm" alignItems={["center", "flex-start"]}>
      <Heading size={"md"}>Hey, I’m Akram El Youbi 👋</Heading>
      <Text fontSize="md">
        A software engineer focusing on web & mobile development. Passionate
        about programming, design and problem solving. <br />
        Curently working as a freelance frontend developer. <br />
        Based in <strong>Paris, France 🇫🇷</strong>
      </Text>
    </VStack>
  </Stack>
);

export default Hero;
