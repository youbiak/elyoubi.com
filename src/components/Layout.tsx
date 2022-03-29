import { Container, VStack } from "@chakra-ui/react";
import type { PropsWithChildren } from "react";

import Header from "./Navigation";
import Footer from "./Footer";

type Props = PropsWithChildren<{}>;

const Layout = ({ children }: Props) => (
  <Container maxW={"container.md"}>
    <Header />
    {children}
    {/* <Footer /> */}
  </Container>
);

export default Layout;
