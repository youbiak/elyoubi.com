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
        <HStack spacing={4} w="full" h="200px" alignItems={"stretch"}>
          <Box flex="1" bg="blue.400" borderRadius="md">
            <Image
              alt="image"
              src="/img/avatar.png"
              width="300px"
              flex="1"
              objectFit={"cover"}
              height={"400px"}
              borderRadius="md"
            />
          </Box>
          <Box flex="1" bg="blue.400" borderRadius="md" flexGrow={1}>
            2
          </Box>
          <Box flex="1" bg="blue.400" borderRadius="md">
            3
          </Box>
        </HStack>
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
