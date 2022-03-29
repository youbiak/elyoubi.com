import type { NextPage } from "next";
import BlogList from "@/components/BlogList";
import Hero from "@/components/Hero";
import { getSortedPostsData } from "src/lib/posts";
import { Heading, VStack } from "@chakra-ui/react";

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
      <VStack alignItems={"flex-start"}>
        <Heading mt={16}>Recent blog posts</Heading>
        <BlogList posts={posts} />
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
