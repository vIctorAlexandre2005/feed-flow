import { Button } from "@chakra-ui/react";
import { handleSignIn } from "../services/Login";

export function LoginComponent() {
    return (
        <Button mt={"6rem"} onClick={handleSignIn}>
            Logar
        </Button>
    )
}