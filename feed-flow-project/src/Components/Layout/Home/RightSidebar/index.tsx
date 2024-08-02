import { Fragment } from "react";
import { contentPost } from "../../../../../utils/lists/posts";
import { Avatar, Box, Card, CardBody, CardFooter, CardHeader, Flex, Icon, Link, Text, VStack } from "@chakra-ui/react";
import { useContextFeedContext } from "@/Components/Context";

export function RightSidebar() {

    const { combinedData, user } = useContextFeedContext();

    return (
        <Fragment>
            <Box display={"flex"} justifyContent={"center"} mb={"1rem"}>
                <Card
                    w={"20rem"}
                    maxW={"100%"}
                    border={"1px solid"}
                    borderColor={"black.100"}
                    boxShadow={"none"}
                    p={"1rem"}
                    borderRadius={"lg"}
                >
                    <CardHeader p={"0"}>
                        <Flex align={"center"} justify={"center"} gap={2}>
                            <Box mb={"1rem"} mt={"1rem"}>
                                <Text fontWeight={"500"} fontSize={"1.5rem"}>FeedFlow notícias</Text>
                            </Box>
                        </Flex>

                        <Box>
                            <Text fontSize={"1rem"} textAlign={"left"}></Text>
                        </Box>
                    </CardHeader>

                    <CardBody overflow={"auto"} p={"0"}>
                        <Flex maxH={"24rem"} direction={"column"}>
                            {combinedData?.map((item, idx) => (
                                <Fragment key={idx}>
                                    <Link 
                                        target="_blank" 
                                        mb={"0.5rem"} 
                                        fontWeight={"bold"} 
                                        color={"violet.500"} 
                                        href={item?.newsDataUsApi?.link}
                                    >
                                     <Text>{item?.newsDataApiCrime?.title}</Text>
                                    </Link>
                                </Fragment>
                            ))}
                        </Flex>
                    </CardBody>
                </Card>
            </Box>
        </Fragment>
    )
}