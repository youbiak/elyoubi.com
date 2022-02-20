import { Container, VStack } from "@chakra-ui/react";
import type { PropsWithChildren } from "react";
import Footer from "./Footer";
import Header from "./header";

type Props = PropsWithChildren<{}>;

const Layout = ({ children }: Props) => (
  <Container maxW={"container.md"}>
    <VStack spacing={0}>
      <Header />
      {children}
      <Footer />
    </VStack>
  </Container>
);

export default Layout;
