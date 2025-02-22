import NewsContext from "@/Components/Context";
import { MainLayout } from "@/Components/Layout";
import { Header } from "@/Components/Layout/Header";
import { customTheme } from "@/styles/global/theme";
import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={customTheme}>
        <NewsContext>
          <MainLayout>
            <Component {...pageProps} />
            <ToastContainer hideProgressBar draggable limit={1} position="top-center" />
          </MainLayout>
        </NewsContext>
      </ChakraProvider>
    </QueryClientProvider>
  );
}
