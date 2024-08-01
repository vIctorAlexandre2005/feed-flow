import { Box } from "@chakra-ui/react";
import { ClipLoader } from "react-spinners";

export function Loader() {
    return (
        <Box display={"flex"} justifyContent={"center"} h={"100vh"} alignItems={"center"}>
            <ClipLoader size={40} color='#7118e9' />
        </Box>
    )
}