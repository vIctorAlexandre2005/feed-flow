import { useContextFeedContext } from "@/Components/Context";
import { Avatar, Box, Button, Card, CardBody, CardFooter, CardHeader, Flex, Icon, Img, Text, VStack, useDisclosure } from "@chakra-ui/react";
import { Fragment } from "react";
import { ModalAbout } from "../../../../../utils/modals/about";

export function LeftSidebar() {

    const { user } = useContextFeedContext();
    const { isOpen, onOpen, onClose } = useDisclosure();

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
                        {!user && (
                            <Flex direction={"column"} align={"center"} gap={1}>
                            <Avatar h={"90px"} w={"90px"} />
                            <Box mb={"1rem"} mt={"1rem"}>
                                <Text fontWeight={"bold"}>Visitante</Text>
                            </Box>
                        </Flex>
                        )}
                        {user && (
                            <Flex direction={"column"} align={"center"} gap={1}>
                            <Avatar h={"90px"} w={"90px"} src={user?.photoURL || undefined} />
                            <Box mb={"1rem"} mt={"1rem"}>
                                <Text fontWeight={"bold"}>{user?.displayName}</Text>
                            </Box>
                        </Flex>
                        )}

                        <Box>
                            <Button 
                                onClick={onOpen}
                                bg={"violet.500"} 
                                _hover={{
                                    bg: 'violet.800'
                                }}
                                color={"white"}
                            >
                                Sobre este projeto
                            </Button>
                        </Box>
                    </CardHeader>
                </Card>
                {isOpen && (
                    <ModalAbout isOpen={isOpen} onClose={onClose} />
                )}
            </Box>
        </Fragment>
    )
}