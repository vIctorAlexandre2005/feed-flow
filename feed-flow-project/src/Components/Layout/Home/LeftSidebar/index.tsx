import { useContextFeedContext } from "@/Components/Context";
import { Avatar, Box, Card, CardBody, CardFooter, CardHeader, Flex, Icon, Img, Text, VStack } from "@chakra-ui/react";
import { Fragment } from "react";

export function LeftSidebar() {

    const { user } = useContextFeedContext();

    return (
        <Fragment>
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
                            <Avatar src={user?.photoURL || undefined} />
                            <Box mb={"1rem"} mt={"1rem"}>
                                <Text fontWeight={"bold"}>{user?.displayName}</Text>
                            </Box>
                        </Flex>

                        <Box>
                            <Text fontSize={"1rem"} textAlign={"left"}>Aproveite o FeedFlow!</Text>
                        </Box>
                    </CardHeader>

                    <CardBody p={"0"}>
                        {/* <Img src={item.image} h={"50%"} w={"100%"} objectFit={"cover"} /> */}
                    </CardBody>
                </Card>
            </Box>
        </Fragment>
    )
}