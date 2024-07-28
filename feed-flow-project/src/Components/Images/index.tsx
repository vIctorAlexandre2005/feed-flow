import { Avatar, Box, Button, Card, CardBody, CardFooter, CardHeader, Divider, Flex, Icon, Img, Text } from "@chakra-ui/react";
import axios from "axios";
import { Photo, Photos, createClient } from "pexels";
import { Fragment, useEffect, useState } from "react";
import { BiHeart, BiSolidLike } from "react-icons/bi";
import { FaHeart } from "react-icons/fa";
import { GrLike } from "react-icons/gr";
import { ClipLoader } from "react-spinners";
import { toast } from "react-toastify";
import { FeedImages } from "./Feed";
import { LeftSidebar } from "../Layout/Home/LeftSidebar";
import { RightSidebar } from "../Layout/Home/RightSidebar";
import { Loader } from "../Loader";

export function RenderImages() {

    const [videosLoaded, setvideosLoaded] = useState<Boolean>(false);
    const [photos, setPhotos] = useState<Photo[]>([]);

    function getPhotosBrabo(length: number) {
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
        const client = createClient('cRMrkHJu2v1W9pEgo8w4SpybDYQE6k2v1Zq5LPpqUiP72esLQVIXjiph');
        const query = randomQuery();
        client.photos.search({ query, per_page: length }).then((result) => {
            if ('photos' in result) {
                setPhotos((oldPhotos) => [...oldPhotos, ...result.photos]);
            }
            setvideosLoaded(true);
        })
    }

    useEffect(() => {
        getPhotosBrabo(100);
    }, []);

    if (photos.length < 5) {
        return (
            <Loader />
        );
    };

    console.log("dados de photos:", photos);

    return (
        <>
            <Box w={"100%"} display={"flex"} justifyContent={"center"}>
                <Box mt={"6rem"} position={"absolute"} display={"flex"} left={"10rem"}>
                    <LeftSidebar />
                </Box>

                <Flex mt={"6rem"} justify={"center"} direction={"column"}>
                    {photos.map((item: any, idx) => (
                        <Fragment key={idx}>
                            <FeedImages
                                item={item}
                                photoID={item?.id}
                            />
                        </Fragment>
                    ))}
                </Flex>

                <Box mt={"6rem"} position={"fixed"} display={"flex"} right={"10rem"}>
                    <RightSidebar />
                </Box>
            </Box>
        </>
    )
}
