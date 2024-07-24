import { Avatar, Box, Button, Card, CardBody, CardFooter, CardHeader, Flex, Icon, Img, Text } from "@chakra-ui/react";
import { BiHeart } from "react-icons/bi";
import { BsChat } from "react-icons/bs";
import { GrLike } from "react-icons/gr";

export function RenderNewsTwo({ item }: any) {
    return (
        <>
            {item?.newsAp?.image_url === null ? (
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
                                <Avatar src={item?.user100?.picture?.medium} objectFit={"cover"} />
                                <Box mb={"1rem"} mt={"1rem"}>
                                    <Text fontWeight={"bold"}>{item?.user100?.name?.first} {item?.user100?.name?.last} publicou algo</Text>
                                </Box>
                            </Flex>

                            <Box>
                                <Text fontSize={"1rem"} textAlign={"left"}>{item?.newsAp?.description}</Text>
                            </Box>
                        </CardHeader>

                        <CardBody p={"0"}>
                            <Img src={item?.newsAp?.urlToImage} h={"100%"} w={"100%"} objectFit={"cover"} />
                        </CardBody>

                        <CardFooter borderTop={"1px solid"} mt={"1rem"} borderTopColor={"black.200"} gap={4}>
                            <Button bg={"transparent"} p={"0.5rem"} _hover={{ color: 'violet.800' }} justifyContent={"center"} display={"flex"} flexDir={"column"} alignItems={"center"}>
                                <Icon boxSize={"1.5rem"} as={GrLike} />
                                <Text>Curtir</Text>
                            </Button>

                            <Button bg={"transparent"} p={"0.5rem"} _hover={{ color: 'violet.800' }} justifyContent={"center"} display={"flex"} flexDir={"column"} alignItems={"center"}>
                                <Icon boxSize={"1.5rem"} as={BiHeart} />
                                <Text>Favoritar</Text>
                            </Button>

                            <Button bg={"transparent"} p={"0.5rem"} _hover={{ color: 'violet.800' }} justifyContent={"center"} display={"flex"} flexDir={"column"} alignItems={"center"}>
                                <Icon boxSize={"1.5rem"} as={BsChat} />
                                <Text>Comente</Text>
                            </Button>
                        </CardFooter>
                    </Card>
                </Box>
            )}
        </>
    )
}