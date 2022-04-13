import {
  Flex,
  Heading,
  VStack,
  Box,
  Button,
  useDisclosure,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Text,
  ModalOverlay,
  Link,
} from "@chakra-ui/react";
import Image from "@/components/Image";
import type { NextPage } from "next";
import NextLink from "next/link";
import { getPhotography } from "src/lib/photography";

const Photography: NextPage = ({ photos }: any) => {
  return (
    <>
      <VStack alignItems={"flex-start"}>
        <Heading size="2xl" my={12} alignSelf={"center"}>
          Photography
        </Heading>
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
