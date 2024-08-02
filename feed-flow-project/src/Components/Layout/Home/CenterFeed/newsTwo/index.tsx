import { Avatar, Box, Button, Card, CardBody, CardFooter, CardHeader, Divider, Flex, Icon, Img, Link, Text } from "@chakra-ui/react";
import { useState } from "react";
import { BiHeart, BiSolidLike } from "react-icons/bi";
import { BsChat } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { GrLike } from "react-icons/gr";
import { toast } from "react-toastify";
import { Params } from "../../../../../../utils/interface/ParamsNews";
import { useContextFeedContext } from "@/Components/Context";

export function RenderNewsTwo({ item, idx }: Params) {

    const { user } = useContextFeedContext();

    const [isLike, setIsLike] = useState(() => {
        const savedIsLike = localStorage.getItem(`isLike_two${idx}`);
        return savedIsLike ? JSON.parse(savedIsLike) : false;
    });

    const [isFavorite, setIsFavorite] = useState(() => {
        const savedIsFavorite = localStorage.getItem(`isFavorite_two${idx}`);
        return savedIsFavorite ? JSON.parse(savedIsFavorite) : false;
    });

    const handleClickLike = () => {
        const newIsLike = !isLike;
        if (user) {
            setIsLike(newIsLike);
            localStorage.setItem(`isLike_two${idx}`, JSON.stringify(newIsLike));
        } else {
            toast.error("Faça login antes de curtir ou favoritar.", {
                theme: 'colored',
                autoClose: 1000
            });
        };

        if (newIsLike && user) {
            toast.success('Publicação curtida!', {
                theme: 'colored',
                autoClose: 2000,
            });
        }
    };

    const handleClickFavorite = () => {
        const newIsFavorite = !isFavorite;
        if (user) {
            setIsFavorite(newIsFavorite);
            localStorage.setItem(`isFavorite_two${idx}`, JSON.stringify(newIsFavorite));
        } else {
            toast.error("Faça login antes de curtir ou favoritar.", {
                theme: 'colored',
                autoClose: 1000
            });
        };

        if (newIsFavorite && user) {
            toast.success('Publicação favoritada!', {
                theme: 'colored',
                autoClose: 2000,
            });
        }
    };

    console.log(item?.newsUs)

    return (
        <>
            {item?.newsUs?.image_url === null ? (
                ''
            ) : (
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
                                <Avatar src={item?.user200?.picture?.medium} objectFit={"cover"} />
                                <Box mb={"1rem"} mt={"1rem"}>
                                    <Text fontWeight={"bold"}>
                                        {item?.user200?.name?.first} {item?.user200?.name?.last} publicou algo
                                    </Text>
                                </Box>
                            </Flex>

                            <Box>
                                <Text fontSize={"1rem"} textAlign={"left"}>
                                    {item?.newsUs?.title}...<Link target="_blank" href={item?.newsDataUsApi?.link} fontWeight={500} color={"violet.600"}>Saiba mais</Link>
                                </Text>
                            </Box>
                        </CardHeader>

                        <CardBody p={"0"}>
                            <Img src={item?.newsUs?.image_url} h={"100%"} w={"100%"} objectFit={"cover"} />

                            <Box p={"0.3rem"}>
                                {isLike ? (
                                    <Text display={"flex"} color={"black.500"} alignItems={"center"} ml={"1rem"} gap={1}>
                                        <BiSolidLike color="#8535fd" size={16} /> Você e mais {item?.user200?.location?.street?.number} pessoas
                                    </Text>
                                ) : (
                                    <Text color={"violet.600"} display={"flex"} alignItems={"center"} ml={"1rem"} gap={1}>
                                        <BiSolidLike color="violet.600" size={16} /> {item?.user200?.location?.street?.number} pessoas curtiram
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
                                color={isLike ? 'violet.600' : ''}
                            >
                                {isLike ? <Icon boxSize={"1.5rem"} as={BiSolidLike} /> : <Icon boxSize={"1.5rem"} as={GrLike} />}
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
                                color={isFavorite ? 'violet.600' : ''}
                            >
                                {isFavorite ? <Icon boxSize={"1.5rem"} as={FaHeart} /> : <Icon boxSize={"1.5rem"} as={BiHeart} />}
                                <Text>Favoritar</Text>
                            </Button>
                        </CardFooter>
                    </Card>
                </Box>
            )}
        </>
    )
}