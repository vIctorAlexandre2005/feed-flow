import { Fragment } from "react";
import { contentPost } from "../../../../../utils/lists/posts";
import { Avatar, Box, Card, CardBody, CardFooter, CardHeader, Flex, Icon, Text, VStack } from "@chakra-ui/react";

export function RightSidebar() {
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
                            <Avatar src={'./image1.jpg'} />
                            <Box mb={"1rem"} mt={"1rem"}>
                                <Text fontWeight={"bold"}>Tu compartilhou este post</Text>
                            </Box>
                        </Flex>

                        <Box>
                            <Text fontSize={"1rem"} textAlign={"left"}>Olá, victor!! kkkkkkkk</Text>
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