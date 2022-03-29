import type { NextPage } from "next";
import BlogList from "@/components/BlogList";
import Hero from "@/components/Hero";
import { getSortedPostsData } from "src/lib/posts";

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
      <BlogList posts={posts} />
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
