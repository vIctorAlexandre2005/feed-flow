import { Avatar, Box, Button, Card, CardBody, CardFooter, CardHeader, Divider, Flex, Icon, Img, Text } from "@chakra-ui/react";
import axios from "axios";
import { createClient } from "pexels";
import { Fragment, useEffect, useState } from "react";
import { BiHeart, BiSolidLike } from "react-icons/bi";
import { FaHeart } from "react-icons/fa";
import { GrLike } from "react-icons/gr";
import { ClipLoader } from "react-spinners";
import { toast } from "react-toastify";
import { FeedImg } from "../../../../utils/interface/FeedImg";

export function FeedImages({ item, photoID }: FeedImg) {

    const [isLike, setIsLike] = useState(() => {
        const savedLikes = localStorage.getItem(`likes-${photoID}`);
        return savedLikes ? JSON.parse(savedLikes) : false;
    });

    const [isFavorite, setIsFavorite] = useState(() => {
        const savedLikes = localStorage.getItem(`favorites-${photoID}`);
        return savedLikes ? JSON.parse(savedLikes) : false;
    });

    function handleLike() {
        const savedLikes = !isLike;
        setIsLike(savedLikes);
        localStorage.setItem(`likes-${photoID}`, JSON.stringify(savedLikes));

        if (savedLikes) {
            toast.success('Publicação curtida!', {
                autoClose: 1000,
            });
        }
    };

    function handleFavorite() {
        const savedFavorites = !isFavorite;
        setIsFavorite(savedFavorites);
        localStorage.setItem(`favorites-${photoID}`, JSON.stringify(savedFavorites));
        
        if (savedFavorites) {
            toast.success('Publicação favoritada!', {
                autoClose: 1000,
            });
        }
    };

    if(!item?.src?.original) {
        return (
            <Box display={"flex"} bg={"transparent"} justifyContent={"center"} alignItems={"center"} mt={"16rem"}>
                <ClipLoader size={40} color='green' />
            </Box>
        );
    }

    return (
        <>
            <Box p={"0"} display={"flex"} justifyContent={"center"} mb={"1rem"}>
                <Card
                    border={"1px solid"}
                    borderColor={"black.100"}
                    boxShadow={"none"}
                    p={"0rem"}
                    w={{ tablet: '30rem', xs: '100%' }}
                    borderRadius={"lg"}
                >
                    <CardHeader>
                        <Flex direction={"column"} gap={2}>
                            <Box mb={"1rem"} display={"flex"} gap={1}>
                                <Text color={"violet.500"} fontWeight={"bold"}>
                                    @{item?.photographer}
                                </Text>
                                <Text>publicou uma foto</Text>
                            </Box>

                            <Text fontSize={"0.90rem"}>{item?.alt}</Text>
                        </Flex>
                    </CardHeader>

                    <CardBody maxH={"36rem"} p={"0"}>
                        <Img src={item?.src?.original} h={"100%"} w={"100%"} objectFit={"cover"} />

                        <Box p={"0.3rem"}>
                            {isLike ? (
                                <Text display={"flex"} color={"black.500"} alignItems={"center"} ml={"1rem"} gap={1}>
                                    <BiSolidLike color="#8535fd" size={16} /> Você e mais {item?.width} pessoas
                                </Text>
                            ) : (
                                <Text color={"violet.600"} display={"flex"} alignItems={"center"} ml={"1rem"} gap={1}>
                                    <BiSolidLike color="violet.600" size={16} /> {item?.width} pessoas curtiram
                                </Text>
                            )}
                        </Box>
                    </CardBody>

                    <Divider mt={"2rem"} border={"1px solid"} borderColor={"black.300"} />

                    <CardFooter gap={4}>
                        <Button
                            bg={"transparent"}
                            p={"0.5rem"}
                            _hover={{
                                color: 'violet.800'
                            }}
                            justifyContent={"center"}
                            display={"flex"}
                            flexDir={"column"}
                            alignItems={"center"}
                            color={isLike ? 'violet.600' : ''}
                            onClick={handleLike}
                        >
                            {isLike ?
                                <Icon boxSize={"1.5rem"} as={BiSolidLike} /> :
                                <Icon boxSize={"1.5rem"} as={GrLike} />
                            }
                            <Text>Curtir</Text>
                        </Button>

                        <Button
                            bg={"transparent"}
                            p={"0.5rem"}
                            _hover={{
                                color: 'violet.800'
                            }}
                            justifyContent={"center"}
                            display={"flex"}
                            flexDir={"column"}
                            alignItems={"center"}
                            color={isFavorite ? 'violet.600' : ''}
                            onClick={handleFavorite}
                        >
                            {isFavorite ? <Icon boxSize={"1.5rem"} as={FaHeart} /> : <Icon boxSize={"1.5rem"} as={BiHeart} />}
                            <Text>Favoritar</Text>
                        </Button>
                    </CardFooter>
                </Card>
            </Box>
        </>
    )
}