import { Box, Container, Stack, VStack } from "@chakra-ui/react";
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
    <Stack flex="1">{children}</Stack>
    <Footer />
  </Container>
);

export default Layout;
