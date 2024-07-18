import { Fragment } from "react";
import { PropsContentPost, contentPost } from "../../../../../utils/lists/posts";
import { Avatar, Box, Card, CardBody, CardFooter, CardHeader, Flex, HStack, Icon, Img, Text, VStack } from "@chakra-ui/react";

export function CenterFeed() {
    return (
        <>
            {contentPost.map((item, idx) => (
                <Fragment key={idx}>
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
                                    <Avatar src={item.image} />
                                    <Box mb={"1rem"} mt={"1rem"}>
                                        <Text fontWeight={"bold"}>{item.author} compartilhou este algo</Text>
                                    </Box>
                                </Flex>

                                <Box>
                                    <Text fontSize={"1rem"} textAlign={"left"}>{item.description}</Text>
                                </Box>
                            </CardHeader>

                            <CardBody p={"0"}>
                                <Img src={item.image} h={"100%"} w={"100%"} objectFit={"cover"} />
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