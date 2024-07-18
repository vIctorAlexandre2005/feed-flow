import { MainLayout } from "@/Components/Layout";
import { CenterFeed } from "@/Components/Layout/Home/CenterFeed";
import { LeftSidebar } from "@/Components/Layout/Home/LeftSidebar";
import { RightSidebar } from "@/Components/Layout/Home/RightSidebar";
import { Box, Flex } from "@chakra-ui/react";
import { FaCircleXmark } from "react-icons/fa6";

export default function Home() {
  return (
    <>
      <MainLayout>
        <Flex mt={"2rem"} gap={6} justify={"center"}>
            <Box>
              <LeftSidebar />
            </Box>

            <Box w={"35%"} maxW={"35%"}>
              <CenterFeed />
            </Box>

            <Box>
              <RightSidebar />
            </Box>
        </Flex>
      </MainLayout>
    </>
  )
}