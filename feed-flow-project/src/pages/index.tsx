import { NotFound404 } from "@/Components/404";
import { useContextFeedContext } from "@/Components/Context";
import { MainLayout } from "@/Components/Layout";
import { CenterFeed } from "@/Components/Layout/Home/CenterFeed";
import { LeftSidebar } from "@/Components/Layout/Home/LeftSidebar";
import { RightSidebar } from "@/Components/Layout/Home/RightSidebar";
import { Loader } from "@/Components/Loader";
import { Box, Flex } from "@chakra-ui/react";

export default function Home() {

  const { combinedData, setCombinedData, user, error, setError, handleInstall, installPrompt } = useContextFeedContext();

  if(error) {
    return (
        <Box bg={"transparent"}>
          <NotFound404 />
        </Box>
    );
};

if(combinedData?.length === 0) {
  return <Loader />
};

  return (
    <>
      <MainLayout>
        <Flex w={"100%"} justify={"center"} direction={"row"} gap={4}>
          <Box mt={"6rem"} position={"absolute"} display={{ xs: 'none', tabletLandscape: 'flex' }} left={{tabletLandscape: '5rem', laptop: '14rem' }}>
            <LeftSidebar />
          </Box>

          <Box mt={"6rem"} w={{ tabletLandscape: '35%', tablet: '100%' }} maxW={{ tabletLandscape: '35%', xs: '100%', sm: '75%' }} marginRight={{ tablet: '0', tabletLandscape: '4rem', laptop: '0' }}>
            <CenterFeed
              handleInstall={handleInstall}
              user={user}
              installPrompt={installPrompt}
              error={error}
              setError={setError}
              combinedData={combinedData} 
              setCombinedData={setCombinedData} 
            />
          </Box>

          <Box mt={"6rem"} position={{ tabletLandscape: 'fixed', xs: 'absolute' }} visibility={{ xs: 'hidden', tabletLandscape: 'visible' }} display={{ xs: 'none', tabletLandscape: 'flex' }}  right={{ desktop: "5rem", tablet: '2rem' }}>
            <RightSidebar />
          </Box>
        </Flex>
      </MainLayout>
    </>
  )
}