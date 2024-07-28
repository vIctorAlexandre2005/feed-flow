import { Box, Flex } from "@chakra-ui/react";
import { Photo, Video, createClient } from "pexels";
import { Fragment, useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";
import { FeedVideos } from "..";

export function RenderFeedVideos() {
    const [videos, setVideos] = useState<Video[]>([]);
    const [videosLoaded, setvideosLoaded] = useState<Boolean>(false);

    const randomQuery = () => {
        const queries = [
            "Funny",
            "Art",
            "Animals",
            "Coding",
            "Space",
            "Nature",
            "Night",
            "Underwater",
            "Adult"
        ];
        return queries[Math.floor(Math.random() * queries.length)];
    };

    const getVideos = (length: number) => {
        // Replace with your Pexels API Key
        const client = createClient("cRMrkHJu2v1W9pEgo8w4SpybDYQE6k2v1Zq5LPpqUiP72esLQVIXjiph");

        const query = randomQuery();
        client.videos
            .search({ query, per_page: length })
            .then((result) => {
                if ('videos' in result) {
                    setVideos((oldVideos) => [...oldVideos, ...result.videos]);
                }
                setvideosLoaded(true);
            })
            .catch((e) => setvideosLoaded(false));
    };

    useEffect(() => {
        getVideos(100);
    }, []);

    if (videos.length < 5) {
        return (
            <Box display={"flex"} bg={"transparent"} justifyContent={"center"} alignItems={"center"} mt={"16rem"}>
                <ClipLoader size={40} color='green' />
            </Box>
        );
    };

    console.log("videos,", videos);

    return (
        <Flex justify={"center"}>
            <Box
                h={"100vh"}
                w={"30rem"}
                overflowY={"scroll"}
                scrollSnapType={"y mandatory"}
                scrollBehavior={"auto"}
                scrollSnapStop={"always"}
                overscrollBehaviorY={"contain"}
            >
                {videos.length > 0 ? (
                    <>
                        {videos.map((video, id) => (
                            <Box mb={"1rem"}>
                                <FeedVideos
                                    key={id}
                                    index={id}
                                    author={video.user.name}
                                    videoURL={video.video_files[0].link}
                                    authorLink={video.user.url}
                                    lastVideoIndex={videos.length - 1}
                                    getVideos={getVideos}
                                />
                            </Box>
                        ))}
                    </>
                ) : (
                    <>
                        <h1>Nothing to show here</h1>
                    </>
                )}
            </Box>
        </Flex>
    )
}