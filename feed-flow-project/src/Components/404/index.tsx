import { Box, Flex, Img, Text } from "@chakra-ui/react";

export function NotFound404() {
    return (
       <Flex justify={"center"} h={"100vh"} direction={"column"}>
        <Box mb={"1rem"} display={"flex"} justifyContent={"center"}>
            <Img src="./error2.svg" h={"12rem"} w={"20rem"} objectFit={"cover"} />
        </Box>

        <Text 
            fontSize={"1.26rem"}
            textAlign={"center"}
        >
            Oops, não consegui buscar os dados para você! Verifique sua internet ou tente novamente mais tarde!
        </Text>
       </Flex>
    )
}