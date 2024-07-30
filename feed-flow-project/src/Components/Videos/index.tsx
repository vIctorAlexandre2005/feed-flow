import { Box, Flex } from "@chakra-ui/react";
import { RenderFeedVideos } from "./Feed/RenderVideos";
import { LeftSidebar } from "../Layout/Home/LeftSidebar";
import { RightSidebar } from "../Layout/Home/RightSidebar";

export function VideosComponent() {
    return (
        <Flex w={"100%"} justify={"center"} direction={"row"} gap={4}>
            <Box mt={"6rem"} position={"absolute"} display={"flex"} left={"10rem"}>
                <LeftSidebar />
            </Box>

            <Box mt={"4rem"} w={"35%"} maxW={"35%"}>
                <RenderFeedVideos />
            </Box>

            <Box mt={"6rem"} position={"fixed"} display={"flex"} right={"-10rem"}>
                <RightSidebar />
            </Box>
        </Flex>
    )
}