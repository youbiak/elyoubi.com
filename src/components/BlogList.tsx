import {
  Heading,
  Text,
  useColorModeValue,
  VStack,
  Stack,
  Link,
} from "@chakra-ui/react";
import NextLink from "next/link";

type Props = {
  posts: {
    id: string;
    title: string;
    date: string;
  }[];
};

const BlogList = ({ posts }: Props) => {
  const hoverBg = useColorModeValue("purple.100", "purple.700");
  return (
    <VStack alignItems="space-between" w="full">
      {posts.map(({ id, title, date }) => (
        <NextLink href={`/blog/${id}`} passHref key={id}>
          <Stack
            as={Link}
            flexDirection={["column", "column", "row"]}
            py={2}
            px={4}
            _hover={{
              bg: hoverBg,
              transform: "scale(1.025, 1.025)",
              textDecoration: "none",
            }}
            transition={"all 0.3s ease-in-out"}
            borderRadius="md"
            spacing={0}
            justifyContent={"space-between"}
            alignItems={["flex-start", "flex-start", "center"]}
            cursor="pointer"
          >
            <Heading size="sm">{title}</Heading>
            <Text as="time" dateTime={date} mt={0}>
              {date}
            </Text>
          </Stack>
        </NextLink>
      ))}
    </VStack>
  );
};

export default BlogList;
