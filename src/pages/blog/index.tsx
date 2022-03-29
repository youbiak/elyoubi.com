import type { GetStaticProps, NextPage } from "next";
import { getSortedPostsData } from "../../lib/posts";
import NextLink from "next/link";
import BlogList from "@/components/BlogList";

type Props = {
  posts: {
    id: string;
    title: string;
    date: string;
  }[];
};

const Blog: NextPage<Props> = ({ posts }) => {
  return <BlogList posts={posts} />;
};

export async function getStaticProps() {
  const posts = getSortedPostsData();
  return {
    props: {
      posts,
    },
  };
}

export default Blog;
