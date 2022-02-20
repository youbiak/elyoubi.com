import { Box, Container, VStack } from "@chakra-ui/react";
import type { PropsWithChildren } from "react";
import Footer from "./Footer";
import Header from "./header";

type Props = PropsWithChildren<{}>;

const Layout = ({ children }: Props) => (
  <Container maxW={"container.md"}>
    <VStack spacing={0} bg="red.200">
      <Header />
      <Box bg="green.200">{children}</Box>
      <Footer />
    </VStack>
  </Container>
);

export default Layout;
