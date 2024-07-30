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
    videoID: number;
}

export function FeedVideos({ 
    author, authorLink, 
    getVideos, index, 
    lastVideoIndex, videoURL, videoID 
}: FeedVideosProps) {

    const video = useRef<HTMLVideoElement>(null);
    const isInViewport = useIsInViewport(video);
    const [loadNewVidsAt, setloadNewVidsAt] = useState<number>(lastVideoIndex);

    const [isLikeVideo, setIsLikeVideo] = useState(() => {
        const savedLikes = localStorage.getItem(`likes-video${videoID}`);
        return savedLikes ? JSON.parse(savedLikes) : false;
    });

    const [isFavoriteVideo, setIsFavoriteVideo] = useState(() => {
        const savedFavorites = localStorage.getItem(`favorites-video${videoID}`);
        return savedFavorites ? JSON.parse(savedFavorites) : false;
    });

    function handleLike() {
        const savedLikes = !isLikeVideo;
        setIsLikeVideo(savedLikes);
        localStorage.setItem(`likes-video${videoID}`, JSON.stringify(savedLikes));

        if (savedLikes) {
            toast.success('Publicação curtida!', {
                autoClose: 1000,
            });
        }
    };

    function handleFavorite() {
        const savedFavorites = !isFavoriteVideo;
        setIsFavoriteVideo(savedFavorites);
        localStorage.setItem(`favorites-video${videoID}`, JSON.stringify(savedFavorites));

        if (savedFavorites) {
            toast.success('Publicação favoritada!', {
                autoClose: 1000,
            });
        }
    };

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
                zIndex={1}
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
                        mb={"1rem"}
                        color={isLikeVideo ? 'violet.600' : 'white'}
                        onClick={handleLike}
                    >
                        {isLikeVideo ?
                            <Icon boxSize={"1.5rem"} as={BiSolidLike} /> :
                            <Icon boxSize={"1.5rem"} as={GrLike} />
                        }
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
                        color={isFavoriteVideo ? 'violet.600' : 'white'}
                        onClick={handleFavorite}
                    >
                        {isFavoriteVideo ? <Icon boxSize={"1.5rem"} as={FaHeart} /> : <Icon boxSize={"1.5rem"} as={BiHeart} />}
                        <Text>Favoritar</Text>
                    </Button>
                </Flex>
            </Box>
        </Box>
    );
}