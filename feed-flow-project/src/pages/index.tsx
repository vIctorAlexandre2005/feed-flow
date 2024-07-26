import { useContextFeedContext } from "@/Components/Context";
import { MainLayout } from "@/Components/Layout";
import { CenterFeed } from "@/Components/Layout/Home/CenterFeed";
import { LeftSidebar } from "@/Components/Layout/Home/LeftSidebar";
import { RightSidebar } from "@/Components/Layout/Home/RightSidebar";
import { Box, Flex } from "@chakra-ui/react";

export default function Home() {

  const { combinedData, setCombinedData, user, handleSignIn } = useContextFeedContext();

  return (
    <>
      <MainLayout>
        <Flex w={"100%"} justify={"center"} direction={"row"} gap={4}>
          <Box mt={"6rem"} position={"absolute"} display={"flex"} left={"10rem"}>
            <LeftSidebar />
          </Box>

          <Box mt={"6rem"} w={"35%"} maxW={"35%"}>
            <CenterFeed 
            handleSignIn={handleSignIn}
              user={user} 
              combinedData={combinedData} 
              setCombinedData={setCombinedData} 
            />
          </Box>

          <Box mt={"6rem"} position={"fixed"} display={"flex"} right={"10rem"}>
            <RightSidebar />
          </Box>
        </Flex>
      </MainLayout>
    </>
  )
}