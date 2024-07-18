import { MainLayout } from "@/Components/Layout";
import { Header } from "@/Components/Layout/Header";
import { customTheme } from "@/styles/global/theme";
import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={customTheme}>
      <MainLayout>
      <Header />
      <Component {...pageProps} />
      </MainLayout>
    </ChakraProvider>
  );
}
