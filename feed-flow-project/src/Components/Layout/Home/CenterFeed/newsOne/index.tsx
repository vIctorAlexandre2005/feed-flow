import { Avatar, Box, Button, Card, CardBody, CardFooter, CardHeader, Divider, Flex, Icon, Img, Text, useDisclosure } from "@chakra-ui/react";
import { User } from "firebase/auth";
import { useEffect, useState } from "react";
import { BiHeart, BiSolidLike } from "react-icons/bi";
import { BsChat } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { GrLanguage, GrLike, GrLikeFill } from "react-icons/gr";
import { toast } from "react-toastify";
import { ClipLoader } from "react-spinners";
import { Params } from "../../../../../../utils/interface/ParamsNews";

export function RenderNewsOne({ item, idx, user }: Params) {

    const { isOpen, onOpen, onClose } = useDisclosure();

    const [isLike, setIsLike] = useState(() => {
        const savedIsLike = localStorage.getItem(`isLike_${idx}`);
        return savedIsLike ? JSON.parse(savedIsLike) : false;
    });

    const handleClickLike = () => {
        const newIsLike = !isLike;
        if (user) {
            setIsLike(newIsLike);
            localStorage.setItem(`isLike_${idx}`, JSON.stringify(newIsLike));
        } else {
            toast.error("Faça login antes de curtir ou favoritar.", {
                theme: 'colored',
                autoClose: 1000
            });
        };

        if (newIsLike && user) {
            toast.success('Publicação curtida!', {
                theme: 'colored',
                autoClose: 1000,
            });
        }
    };

    const [isFavorite, setIsFavorite] = useState(() => {
        const savedIsFavorite = localStorage.getItem(`isFavorite_${idx}`);
        return savedIsFavorite ? JSON.parse(savedIsFavorite) : false;
    });

    const handleClickFavorite = () => {
        const newIsFavorite = !isFavorite;
        if (user) {
            setIsFavorite(newIsFavorite);
            localStorage.setItem(`isFavorite_${idx}`, JSON.stringify(newIsFavorite));
        } else {
            toast.error("Faça login antes de curtir ou favoritar.", {
                autoClose: 1000,
                theme: 'colored'
            })
        }

        if (newIsFavorite && user) {
            toast.success('Publicação favoritada!', {
                autoClose: 2000,
                theme: 'colored'
            });
        };
    };

    return (
        <>
            <Box p={"0"} display={"flex"} justifyContent={"center"} mb={"1rem"}>
                <Card
                    border={"1px solid"}
                    borderColor={"black.100"}
                    boxShadow={"none"}
                    p={"0rem"}
                    borderRadius={"lg"}
                >
                    <CardHeader>
                        <Flex align={"center"} gap={2}>
                            <Avatar src={item?.user?.picture?.medium} objectFit={"cover"} />
                            <Box mb={"1rem"} mt={"1rem"}>
                                <Text fontWeight={"bold"}>
                                    {item?.user?.name?.first} {item?.user?.name?.last} publicou algo
                                </Text>
                            </Box>
                        </Flex>

                        <Box>
                            <Text fontSize={"1rem"} textAlign={"left"}>
                                {item?.newsDataUsApi?.title}
                            </Text>
                        </Box>
                    </CardHeader>

                    <CardBody p={"0"}>
                        <Img src={item?.newsDataUsApi?.image_url} h={"100%"} w={"100%"} objectFit={"cover"} />
                        <Box p={"0.3rem"}>
                            {isLike && user ? (
                                <Text display={"flex"} color={"black.500"} alignItems={"center"} ml={"1rem"} gap={1}>
                                    <BiSolidLike color="#8535fd" size={16} /> Você e mais {item?.user?.location?.street?.number} pessoas
                                </Text>
                            ) : (
                                <Text color={"violet.600"} display={"flex"} alignItems={"center"} ml={"1rem"} gap={1}>
                                    <BiSolidLike color="violet.600" size={16} /> {item?.user?.location?.street?.number} pessoas curtiram
                                </Text>
                            )}
                        </Box>
                    </CardBody>

                    <Divider mt={"2rem"} border={"1px solid"} borderColor={"black.300"} />

                    <CardFooter gap={4}>
                        <Button
                            onClick={handleClickLike}
                            bg={"transparent"}
                            p={"0.5rem"}
                            _hover={{
                                color: 'violet.800'
                            }}
                            justifyContent={"center"}
                            display={"flex"}
                            flexDir={"column"}
                            alignItems={"center"}
                            color={isLike && user ? 'violet.600' : ''}
                        >
                            {isLike && user ? <Icon boxSize={"1.5rem"} as={BiSolidLike} /> : <Icon boxSize={"1.5rem"} as={GrLike} />}
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
                            onClick={handleClickFavorite}
                            color={isFavorite && user ? 'violet.600' : ''}
                        >
                            {isFavorite && user ? <Icon boxSize={"1.5rem"} as={FaHeart} /> : <Icon boxSize={"1.5rem"} as={BiHeart} />}
                            <Text>Favoritar</Text>
                        </Button>
                    </CardFooter>
                </Card>
            </Box>
        </>
    )
}