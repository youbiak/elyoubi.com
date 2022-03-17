import type { GetStaticProps, NextPage } from "next";
import { getSortedPostsData } from "../../lib/posts";
import NextLink from "next/link";

type Props = {
  posts: {
    id: string;
    title: string;
    date: string;
  }[];
};

const Blog: NextPage<Props> = ({ posts }) => {
  console.log(posts);
  return (
    <ul>
      {posts.map(({ id, date, title }) => (
        <NextLink href={`/blog/${id}`} passHref key={id}>
          <li>
            {title}|{id}|{date}
          </li>
        </NextLink>
      ))}
    </ul>
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

export default Blog;
