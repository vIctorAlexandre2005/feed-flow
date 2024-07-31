import { Box, Flex } from "@chakra-ui/react";
import { RenderFeedVideos } from "./Feed/RenderVideos";
import { LeftSidebar } from "../Layout/Home/LeftSidebar";
import { RightSidebar } from "../Layout/Home/RightSidebar";

export function VideosComponent() {
    return (
        <Flex w={"100%"} justify={"center"} direction={"row"} gap={4}>
            <Box mt={"6rem"} position={"absolute"} display={{ xs: 'none', tabletLandscape: 'flex' }} left={{tabletLandscape: '5rem', laptop: '14rem' }}>
                <LeftSidebar />
            </Box>

            <Box mt={"6rem"} justifyContent={"center"} w={{ tabletLandscape: '35%', tablet: '100%', sm: '100%' }} maxW={{ tabletLandscape: '35%', xs: '100%', sm: '100%' }} marginRight={{ tablet: '0', tabletLandscape: '4rem', laptop: '0' }}>
                <RenderFeedVideos />
            </Box>

            <Box mt={"6rem"} position={{ tabletLandscape: 'fixed', xs: 'absolute' }} visibility={{ xs: 'hidden', tabletLandscape: 'visible' }} display={{ xs: 'none', tabletLandscape: 'flex' }}  right={{ desktop: "5rem", tablet: '2rem' }}>
                <RightSidebar />
            </Box>
        </Flex>
    )
}