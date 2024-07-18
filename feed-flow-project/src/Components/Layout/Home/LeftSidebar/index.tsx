import { Avatar, Box, Card, CardBody, CardFooter, CardHeader, Flex, Icon, Img, Text, VStack } from "@chakra-ui/react";
import { contentPost } from "../../../../../utils/lists/posts";
import { Fragment } from "react";

export function LeftSidebar() {
    return (
        <>
        {contentPost.map((item, idx) => (
                <Fragment key={idx}>
                    <Box display={"flex"} justifyContent={"center"} mb={"1rem"}>
                        <Card
                            w={"100%"}
                            maxW={"100%"}
                            border={"1px solid"}
                            borderColor={"black.100"}
                            boxShadow={"none"}
                            p={"0rem"}
                            borderRadius={"lg"}
                        >
                            <CardHeader>
                                <Flex align={"center"} gap={2}>
                                    <Avatar src={item.image} />
                                    <Box mb={"1rem"} mt={"1rem"}>
                                        <Text fontWeight={"bold"}>{item.author} compartilhou este post</Text>
                                    </Box>
                                </Flex>

                                <Box>
                                    <Text fontSize={"1rem"} textAlign={"left"}>Olá, victor!! kkkkkkkk</Text>
                                </Box>
                            </CardHeader>

                            <CardBody p={"0"}>
                                {/* <Img src={item.image} h={"50%"} w={"100%"} objectFit={"cover"} /> */}
                            </CardBody>

                            <CardFooter borderTop={"1px solid"} mt={"1rem"} borderTopColor={"black.200"} gap={4}>
                                <Box justifyContent={"center"} display={"flex"} flexDir={"column"} alignItems={"center"}>
                                    <Icon boxSize={"1.5rem"} as={item.iconHeart} />
                                    <Text>Favoritar</Text>
                                </Box>

                                <Box justifyContent={"center"} display={"flex"} flexDir={"column"} alignItems={"center"}>
                                    <Icon boxSize={"1.5rem"} as={item.iconLike} />
                                    <Text>Curtir</Text>
                                </Box>
                            </CardFooter>
                        </Card>
                    </Box>
                </Fragment>
            ))}
        </>
    )
}