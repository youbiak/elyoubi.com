import {
  Heading,
  HStack,
  Stack,
  VStack,
  Image,
  Divider,
  Icon,
  Flex,
  Text,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import {
  BsFillBookmarkPlusFill,
  BsFillBookmarkCheckFill,
  BsFillBookmarkStarFill,
} from "react-icons/bs";

const BooksInfo = ({ books }: any) => (
  <VStack maxW="container.md" alignItems={"flex-start"}>
    {books.map((book: any) => (
      <HStack key={book.id} alignItems="center" my={4} maxW="md" w="full">
        <Image
          src={book.thumbnail}
          alt={book.title}
          width="60px"
          height="100px"
          borderRadius="md"
        />
        <VStack alignItems={"flex-start"} mx={4}>
          <Heading size="xs">{book.title}</Heading>
          <Text fontSize={"xs"}>
            {book.authors.map((author: any) => author.name).join(", ")}
          </Text>
        </VStack>
      </HStack>
    ))}
  </VStack>
);

const Books: NextPage = ({ collections }: any) => (
  <VStack mt={12} spacing={4} divider={<Divider />}>
    <VStack w="full" alignItems={"flex-start"}>
      <HStack>
        <Icon as={BsFillBookmarkStarFill} color="blue.500" w="6" h="6" />
        <Heading size="lg">Reading</Heading>
      </HStack>
      <BooksInfo books={collections.reading.books} />
    </VStack>
    <VStack w="full" alignItems={"flex-start"}>
      <HStack>
        <Icon as={BsFillBookmarkPlusFill} color="red.600" w="6" h="6" />
        <Heading size="lg">To Read</Heading>
      </HStack>
      <BooksInfo books={collections["to-read"].books} />
    </VStack>
    <VStack w="full" alignItems={"flex-start"}>
      <HStack>
        <Icon as={BsFillBookmarkCheckFill} color="green.500" w="6" h="6" />
        <Heading size="lg">Read</Heading>
      </HStack>
      <BooksInfo books={collections.read.books} />
    </VStack>
  </VStack>
);

export async function getStaticProps() {
  const response = await fetch("https://oku.club/api/users/profile/youbicode");
  let { collections } = await response.json();
  collections = collections.reduce((acc: any, elem: any) => {
    acc[elem.key] = elem;
    return acc;
  }, {});
  console.log(collections);

  return {
    props: { collections },
  };
}
export default Books;
