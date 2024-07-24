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
        <Flex w={"100%"} justify={"center"} direction={"row"} gap={4} justifyContent={"center"}>
          <Box mt={"6rem"} position={"absolute"} display={"flex"} left={"10rem"}>
            <LeftSidebar />
          </Box>

          <Box mt={"6rem"} w={"35%"} maxW={"35%"}>
            <CenterFeed />
          </Box>

          <Box mt={"6rem"} position={"fixed"} display={"flex"} right={"10rem"}>
            <RightSidebar />
          </Box>
        </Flex>
      </MainLayout>
    </>
  )
}