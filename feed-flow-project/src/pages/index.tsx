import { MainLayout } from "@/Components/Layout";
import { CenterFeed } from "@/Components/Layout/Home/CenterFeed";
import { LeftSidebar } from "@/Components/Layout/Home/LeftSidebar";
import { RightSidebar } from "@/Components/Layout/Home/RightSidebar";
import { Box, Flex } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <MainLayout>
        <Flex justify={"space-around"} align={"center"}>
          <Box>
            <LeftSidebar />
          </Box>

          <Box>
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