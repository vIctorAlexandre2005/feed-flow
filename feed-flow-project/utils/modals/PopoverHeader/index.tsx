import { handleSignIn } from "@/Components/services/Login";
import { Button, Img, Link, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverFooter, PopoverHeader, PopoverTrigger, Portal, Text } from "@chakra-ui/react";
import { User } from "firebase/auth";
import { FiExternalLink } from "react-icons/fi";

interface HeaderPopover {
    user: User | null | undefined;
}

export function HeaderPopover({ user }: HeaderPopover) {
    return (
        <PopoverContent w={user ? '12rem' : '100%'}>
            <PopoverArrow />
            <PopoverCloseButton />
            {user ? (
                <PopoverBody>
                    <Link justifyContent={"center"} w={"100%"} display={"flex"} href="/profile">
                        <Text gap={1} alignItems={"center"} display={"flex"} fontWeight={"bold"}>
                            Perfil <FiExternalLink size={20} />
                        </Text>
                    </Link>
                </PopoverBody>
            ) : (
                <PopoverBody>
                    <Button
                        gap={2}
                        bg={"violet.600"}
                        color={"white"}
                        _hover={{
                            bg: 'violet.800'
                        }}
                        w={"100%"}
                        onClick={handleSignIn}
                    >
                        Continue with Google
                        <Img
                            borderRadius={"50%"}
                            src="./google.jpg"
                            h={"20px"}
                            w={"20px"}
                            objectFit={"cover"}
                        />
                    </Button>
                </PopoverBody>
            )}
        </PopoverContent>
    )
}