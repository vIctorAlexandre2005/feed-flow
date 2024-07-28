import { useContextFeedContext } from "@/Components/Context";
import { useIsInViewport } from "@/Components/ViewPortVideos";
import { AspectRatio, Box, Button, Card, CardBody, CardFooter, CardHeader, Divider, Flex, Icon, Img, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { BiHeart, BiSolidLike } from "react-icons/bi";
import { FaHeart } from "react-icons/fa";
import { GrLike } from "react-icons/gr";
import { toast } from "react-toastify";

interface FeedVideosProps {
    index: number;
    author: string;
    videoURL: string;
    authorLink: string;
    lastVideoIndex: number;
    getVideos: (numVideos: number) => void;
}

export function FeedVideos({ author, authorLink, getVideos, index, lastVideoIndex, videoURL }: FeedVideosProps) {

    const video = useRef<HTMLVideoElement>(null);
    const isInViewport = useIsInViewport(video);
    const [loadNewVidsAt, setloadNewVidsAt] = useState<number>(lastVideoIndex);

    if (isInViewport) {
        setTimeout(() => {
            video.current?.play();
        }, 1000);

        if (loadNewVidsAt === Number(video.current?.id)) {
            setloadNewVidsAt((prev: number) => prev + 2);
            getVideos(3);
        }
    }

    const togglePlay = () => {
        const currentVideo = video.current;
        if (currentVideo && currentVideo.paused) {
            currentVideo.play();
        } else {
            currentVideo?.pause();
        }
    };

    useEffect(() => {
        if (!isInViewport) {
            video.current?.pause();
        }
    }, [isInViewport]);

    return (
        <Box
            h={"100vh"}
            scrollSnapAlign={"start"}
            scrollSnapStop={"always"}
            bg={"#000"}
            position={"relative"}
            borderRadius={"12px"}
        >
            <AspectRatio
                w={"100%"}
                h={"100%"}
                borderRadius={"12px"}
                objectFit={"cover"}
                position={"absolute"}
            >
                <video
                    style={{
                        borderRadius: '12px',
                        objectFit: 'cover'
                    }}
                    loop={true}
                    muted
                    ref={video}
                    onClick={togglePlay}
                    id={index.toString()}
                    autoPlay={index === 1}
                >
                    <source src={videoURL} type="video/mp4" />
                </video>
            </AspectRatio>
            <Box
                p={"10px"}
                position={"relative"}
                top={"1%"}
                color={"white"}
                onClick={togglePlay}
            >
                <Text>@{author}</Text>
                <Text>
                    Video by <Link href={authorLink}>{author} </Link> on Pexel
                </Text>
            </Box>

            <Box
                left={"85%"}
                top={"50%"}
                bg={"green"}
                w={"0rem"}
                position={"relative"}
            >
                <Flex direction={"column"}>
                    <Button
                        bg={"transparent"}
                        p={"0.5rem"}
                        _hover={{
                            color: 'violet.400'
                        }}
                        justifyContent={"center"}
                        display={"flex"}
                        flexDir={"column"}
                        alignItems={"center"}
                        color={"white"}
                        mb={"1rem"}
                    /* color={isLike ? 'violet.600' : ''} */
                    /* onClick={handleLike} */
                    >
                        {/* {isLike ?
                                <Icon boxSize={"1.5rem"} as={BiSolidLike} /> :
                                <Icon boxSize={"1.5rem"} as={GrLike} />
                            } */}
                        <Icon mb={"0.3rem"} boxSize={"1.5rem"} as={GrLike} />
                        <Text>Curtir</Text>
                    </Button>

                    <Button
                        bg={"transparent"}
                        p={"0.5rem"}
                        _hover={{
                            color: 'violet.400'
                        }}
                        justifyContent={"center"}
                        display={"flex"}
                        flexDir={"column"}
                        alignItems={"center"}
                        color={"white"}
                    /* color={isFavorite ? 'violet.600' : ''}
                    onClick={handleFavorite} */
                    >
                        {/* {isFavorite ? <Icon boxSize={"1.5rem"} as={FaHeart} /> : <Icon boxSize={"1.5rem"} as={BiHeart} />} */}
                        <Icon mb={"0.3rem"} boxSize={"1.5rem"} as={BiHeart} />
                        <Text>Favoritar</Text>
                    </Button>
                </Flex>
            </Box>
        </Box>
    );
}