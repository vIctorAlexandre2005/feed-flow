import { Box, Button, Flex, Img, Text, useDisclosure } from "@chakra-ui/react";
import { ModalError } from "../../../utils/modals/ThereAreNoInternet";

export function NotFound404() {

    const { onClose, isOpen, onOpen } = useDisclosure();

    return (
        <Flex justify={"center"} h={"100vh"} direction={"column"}>
            <Box mb={"1rem"} display={"flex"} justifyContent={"center"}>
                <Img src="./error2.svg" h={"12rem"} w={"20rem"} objectFit={"cover"} />
            </Box>

            <Text
                fontSize={"1.26rem"}
                textAlign={"center"}
            >
                Oops, não consegui buscar os dados para você! Clique no botão abaixo e veja as instruções do que fazer para resolver.
            </Text>

            <Flex justify={"center"}>
            <Button
                color={"white"}
                bg={"violet.700"}
                _hover={{
                    bg: 'violet.900'
                }}
                onClick={onOpen}
                w={"24rem"}
                mt={"2rem"}
            >
                Ver instruções
            </Button>
            </Flex>

            {isOpen && (
                <ModalError isOpen={isOpen} onClose={onClose} />
            )}
        </Flex>
    )
}