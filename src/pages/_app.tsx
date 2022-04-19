import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import PlausibleProvider from "next-plausible";

import theme from "../theme";
import Layout from "@/components/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <PlausibleProvider domain="elyoubi.com">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </PlausibleProvider>
    </ChakraProvider>
  );
}
export default MyApp;
