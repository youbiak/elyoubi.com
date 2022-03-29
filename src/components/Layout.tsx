import { Box, Container, VStack } from "@chakra-ui/react";
import type { PropsWithChildren } from "react";

import Header from "./Navigation";
import Footer from "./Footer";

type Props = PropsWithChildren<{}>;

const Layout = ({ children }: Props) => (
  <Container
    maxW={"container.md"}
    display={"flex"}
    minH="100vh"
    flexDir="column"
  >
    <Header />
    <VStack flex="1" alignItems={"flex-start"}>
      {children}
    </VStack>
    <Footer />
  </Container>
);

export default Layout;
