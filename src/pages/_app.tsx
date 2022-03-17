import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { KBarProvider } from "kbar";

import theme from "../theme";
import Layout from "@/components/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <KBarProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </KBarProvider>
    </ChakraProvider>
  );
}
export default MyApp;
