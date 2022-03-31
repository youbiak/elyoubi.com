import type { NextPage } from "next";
import BlogList from "@/components/BlogList";
import Hero from "@/components/Hero";
import { getSortedPostsData } from "src/lib/posts";
import NextLink from "next/link";
import {
  Box,
  Text,
  Grid,
  GridItem,
  Heading,
  HStack,
  VStack,
  Flex,
  IconButton,
  Button,
  Stack,
} from "@chakra-ui/react";
import { BsFillArrowUpRightSquareFill } from "react-icons/bs";
import Image from "@/components/Image";

type Props = {
  posts: {
    id: string;
    title: string;
    date: string;
  }[];
};

const Home: NextPage<Props> = ({ posts }) => {
  return (
    <>
      <Hero />
      <Flex alignItems={"flex-start"} flexDir={"column"}>
        <Heading size="lg" my={4}>
          Recent blog posts
        </Heading>
        <BlogList posts={posts} />

        <NextLink href="/blog" passHref>
          <Button
            as="a"
            alignSelf={"flex-end"}
            mt={2}
            rightIcon={<BsFillArrowUpRightSquareFill />}
            colorScheme="purple"
            variant="ghost"
          >
            read all articles
          </Button>
        </NextLink>
      </Flex>
      <VStack alignItems={"flex-start"}>
        <Heading size="lg" mt={4}>
          Featured shots
        </Heading>
        <Flex
          justifyContent={"space-evenly"}
          w="full"
          alignItems={"center"}
          flexDir={["column", "row"]}
          gap={4}
        >
          <NextLink href="/photography" passHref>
            <Box flex="1" as="a">
              <Image
                src="/img/test.avif"
                alt="test"
                width="300px"
                height="200px"
                objectFit={"cover"}
                borderRadius="md"
              />
            </Box>
          </NextLink>
          <Box flex="1">
            <Image
              src="/img/test.avif"
              alt="test"
              width="300px"
              height="200px"
              objectFit={"cover"}
              borderRadius="md"
            />
          </Box>
          <Box flex="1">
            <Image
              src="/img/test.avif"
              alt="test"
              width="300px"
              height="200px"
              objectFit={"cover"}
              borderRadius="md"
            />
          </Box>
        </Flex>
        <NextLink href="/blog" passHref>
          <Button
            as="a"
            alignSelf={"flex-end"}
            mt={2}
            rightIcon={<BsFillArrowUpRightSquareFill />}
            colorScheme="gray"
            variant="ghost"
          >
            see all shots
          </Button>
        </NextLink>
      </VStack>
    </>
  );
};

export async function getStaticProps() {
  const posts = getSortedPostsData();
  return {
    props: {
      posts,
    },
  };
}

export default Home;
