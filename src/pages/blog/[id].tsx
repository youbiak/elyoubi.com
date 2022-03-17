import type { NextPage } from "next";
import { getAllPostIds, getPostData } from "src/lib/posts";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import { Heading } from "@chakra-ui/react";
import MDXComponents from "@/components/MDXComponents";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import rehypeHighlight from "rehype-highlight";
import Head from "next/head";
import rehypeExternalLinks from "rehype-external-links";

// import MDXComponents from "@/components/MDXComponents";

const Post: NextPage<any> = ({ source }) => {
  // console.log(source);

  return (
    <>
      <div className="wrapper">
        <Heading size="sm">{source.frontmatter.date}</Heading>
        <Heading>{source.frontmatter.title}</Heading>
        <Heading size="md">{source.frontmatter.description}</Heading>
        <MDXRemote {...source} components={MDXComponents} />
      </div>
    </>
  );
};

export async function getStaticProps({ params }: any) {
  const postData = getPostData(params.id);
  const mdxSource = await serialize(postData.content, {
    mdxOptions: {
      rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings, rehypeExternalLinks],
    },
    parseFrontmatter: true,
  });

  return {
    props: {
      postData,
      source: mdxSource,
    },
  };
}

export async function getStaticPaths({}) {
  // Fetch necessary data for the blog post using params.id
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export default Post;
