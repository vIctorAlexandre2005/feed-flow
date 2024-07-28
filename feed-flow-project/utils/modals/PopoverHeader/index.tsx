import { handleSignIn } from "@/Components/services/Login";
import { Logout } from "@/Components/services/Logout";
import { Button, Img, Link, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverFooter, PopoverHeader, PopoverTrigger, Portal, Text, useDisclosure } from "@chakra-ui/react";
import { User } from "firebase/auth";
import { BiLogOutCircle } from "react-icons/bi";
import { FcAbout } from "react-icons/fc";
import { FiExternalLink } from "react-icons/fi";
import { ModalAboutApp } from "../AboutTheAppModal";

interface HeaderPopover {
    user: User | null | undefined;
}

export function HeaderPopover({ user }: HeaderPopover) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <PopoverContent w={user ? '12rem' : '100%'}>
            <PopoverArrow />
            <PopoverCloseButton />
            {user && (
                <PopoverBody display={"flex"} justifyContent={"center"} flexDir={"column"} w={"100%"}>
                    <Link mb={"0.5rem"} justifyContent={"center"} w={"100%"} display={"flex"} href="/profile">
                        <Text gap={1} alignItems={"center"} display={"flex"} fontWeight={"bold"}>
                            Perfil <FiExternalLink size={20} />
                        </Text>
                    </Link>

                    <Button
                        onClick={Logout}
                        bg={"transparent"}
                        display={"flex"}
                        justifyContent={"center"}
                        alignItems={"center"}
                    >
                        <Text
                            textAlign={"center"}
                            gap={1}
                            alignItems={"center"}
                            display={"flex"}
                            fontWeight={"bold"}
                        >
                            Sair <BiLogOutCircle size={20} />
                        </Text>
                    </Button>

                    <Button 
                        bg={"transparent"}
                        display={"flex"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        onClick={onOpen}
                    >
                        <Text
                            textAlign={"center"}
                            gap={1}
                            alignItems={"center"}
                            display={"flex"}
                            fontWeight={"bold"}
                        >
                            Sobre <FcAbout size={20} />
                        </Text>
                    </Button>
                </PopoverBody>
            )}

            {!user && (
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
            {isOpen && (
                <ModalAboutApp isOpen={isOpen} onClose={onClose} />
            )}
        </PopoverContent>
    )
}