import NewsContext from "@/Components/Context";
import { MainLayout } from "@/Components/Layout";
import { Header } from "@/Components/Layout/Header";
import { customTheme } from "@/styles/global/theme";
import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={customTheme}>
      <MainLayout>
        <NewsContext>
          <Component {...pageProps} />
          <ToastContainer hideProgressBar draggable limit={1} position="top-center" />
        </NewsContext>
      </MainLayout>
    </ChakraProvider>
  );
}
