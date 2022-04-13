import {
  Divider,
  Heading,
  Link,
  ListItem,
  Text,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";
import type { NextPage } from "next";

const Uses: NextPage = () => (
  <VStack
    alignItems={"flex-start"}
    spacing={4}
    divider={<Divider />}
    mt={12}
    w="full"
  >
    <Heading size="lg">Gear and software I use</Heading>

    <VStack alignItems={"flex-start"}>
      <Heading size="md">Setup</Heading>
      <UnorderedList px={4}>
        <ListItem>MacBook Pro (14-inch, 2021)</ListItem>
        <ListItem>Logitech mx master 2s</ListItem>
        <ListItem>LG 38UC99-W Ultrawide</ListItem>
        <ListItem>NuPhy Air75 keyboard</ListItem>
        <ListItem>Jarvis standing desk</ListItem>
        <ListItem>HyperX QuadCast S microphone</ListItem>
        <ListItem>LEUCHTTURM1917 notebook</ListItem>
      </UnorderedList>
    </VStack>

    <VStack alignItems={"flex-start"}>
      <Heading size="md">Photography</Heading>
      <UnorderedList px={4}>
        <ListItem>Sony A7 III</ListItem>
        <ListItem>Sony FE 35mm f/1.8</ListItem>
        <ListItem>Sony SEL 85mm f/1.8</ListItem>
        <ListItem>Tamron 17-28mm f/2.8 Di III RXD</ListItem>
        <ListItem>Sony FE 24–105mm f4 G OSS</ListItem>
        <ListItem>Mavic Air 2 Fly More Combo</ListItem>
      </UnorderedList>
    </VStack>

    <VStack alignItems={"flex-start"}>
      <Heading size="md">Editor</Heading>
      <UnorderedList px={4}>
        <ListItem>Visual Studio Code</ListItem>
        <ListItem>Theme: Night Owl</ListItem>
        <ListItem>Font: Dank Mono</ListItem>
      </UnorderedList>
    </VStack>

    <VStack alignItems={"flex-start"}>
      <Heading size="md">Tech</Heading>
      <UnorderedList px={4}>
        <ListItem>React</ListItem>
        <ListItem>Next.js</ListItem>
        <ListItem>Remix</ListItem>
        <ListItem>TypeScript</ListItem>
        <ListItem>ChakraUI</ListItem>
      </UnorderedList>
    </VStack>

    <VStack alignItems={"flex-start"}>
      <Heading size="md">Productivity</Heading>
      <UnorderedList px={4}>
        <ListItem>TickTick</ListItem>
        <ListItem>Notion</ListItem>
        <ListItem>Obsidian</ListItem>
        <ListItem>Cron calendar</ListItem>
        <ListItem>Raycast</ListItem>
      </UnorderedList>
    </VStack>

    <VStack alignItems={"flex-start"}>
      <Heading size="md">Design</Heading>
      <UnorderedList px={4}>
        <ListItem>Figma</ListItem>
        <ListItem>Photoshop</ListItem>
        <ListItem>Lightroom</ListItem>
      </UnorderedList>
    </VStack>

    <VStack alignItems={"flex-start"}>
      <Heading size="md">Services</Heading>
      <UnorderedList px={4}>
        <ListItem>Vercel</ListItem>
        <ListItem>Digital Ocean</ListItem>
        <ListItem>Netlify</ListItem>
        <ListItem>AWS</ListItem>
      </UnorderedList>
    </VStack>
  </VStack>
);

export default Uses;
