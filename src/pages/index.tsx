import type { NextPage } from "next";
import BlogList from "@/components/BlogList";
import Hero from "@/components/Hero";

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <BlogList />
    </>
  );
};

export default Home;
