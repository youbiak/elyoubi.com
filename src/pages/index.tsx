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
  Link,
} from "@chakra-ui/react";
import { BsFillArrowUpRightSquareFill } from "react-icons/bs";
import Image from "@/components/Image";
import { getPhotography } from "src/lib/photography";

type Props = {
  posts: {
    id: string;
    title: string;
    date: string;
  }[];
  photos: string[];
};

const Home: NextPage<Props> = ({ posts, photos }) => {
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
            colorScheme="gray"
            variant="ghost"
          >
            read all articles
          </Button>
        </NextLink>
      </Flex>
      <VStack alignItems={"flex-start"}>
        <Heading size="lg" my={4}>
          Featured shots
        </Heading>
        <Flex
          w="full"
          alignItems={"center"}
          flexDir={["column", "row"]}
          gap={4}
        >
          {photos.map((photo: any) => {
            return (
              <Link
                href={`/photography/${photo}`}
                target="_blank"
                rel="noopener noreferrer"
                key={photo}
                flex="1"
              >
                <Image
                  src="/photography/picture1.jpg"
                  alt="test"
                  width="300px"
                  height="200px"
                  objectFit={"cover"}
                  borderRadius="md"
                />
              </Link>
            );
          })}
        </Flex>
        <NextLink href="/photography" passHref>
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
  const posts = getSortedPostsData({ limit: 3 });
  const photos = getPhotography({ limit: 3 });
  console.log(photos);

  return {
    props: {
      posts,
      photos,
    },
  };
}

export default Home;
