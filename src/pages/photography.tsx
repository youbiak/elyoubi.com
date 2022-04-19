import { Flex, Heading, VStack, Link, Center, Button } from "@chakra-ui/react";
import Image from "@/components/Image";
import type { NextPage } from "next";
import { getPhotography } from "src/lib/photography";
import { BsFillArrowUpRightSquareFill } from "react-icons/bs";

const Photography: NextPage = ({ photos }: any) => {
  return (
    <>
      <VStack>
        <Center>
          <Button
            as="a"
            href="https://unsplash.com/@youbicode"
            target="_blank"
            alignSelf={"flex-end"}
            my={[4, 12]}
            rightIcon={<BsFillArrowUpRightSquareFill />}
            colorScheme="gray"
            variant="ghost"
          >
            Visit my Unsplash account
          </Button>
        </Center>
        <Flex
          w="full"
          alignItems={"center"}
          justifyContent="center"
          flexDir={["column", "row"]}
          gap={4}
          flexWrap="wrap"
        >
          {photos.map((photo: any) => {
            return (
              <Link
                href={`/photography/${photo}`}
                target="_blank"
                rel="noopener noreferrer"
                key={photo}
              >
                <Image
                  src={`/photography/${photo}`}
                  alt="photo"
                  width="360px"
                  height="400px"
                  objectFit={"cover"}
                  borderRadius="md"
                />
              </Link>
            );
          })}
        </Flex>
      </VStack>
    </>
  );
};

export async function getStaticProps() {
  const photos = getPhotography();
  return {
    props: {
      photos,
    },
  };
}

export default Photography;
