import { useContextFeedContext } from "@/Components/Context";
import { Box, Button, Flex, Img, Link, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from "@chakra-ui/react";
import { FcAbout } from "react-icons/fc";
import { aboutProjectModalBody } from "../../lists/AboutProject";
import { Fragment } from "react";

interface ModalPWAProps {
    isOpen: boolean;
    onClose: () => void;
}

export function ModalPWA({ isOpen, onClose }: ModalPWAProps) {
    const { handleInstall } = useContextFeedContext();

    return (
        <Modal isCentered size={"md"} isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />

            <ModalContent>
                <ModalHeader justifyContent={"center"} display={"flex"} alignItems={"center"} gap={1}>
                    <Text
                        fontSize={{
                            sm: '1.2rem',
                            xs: '0.85rem'
                        }}
                        display={"flex"}
                        gap={1.5}
                    >
                        Instale o
                        <Text
                            fontSize={{
                                sm: '1.2rem',
                                xs: '0.85rem'
                            }}
                            color={"violet.600"}
                        >
                            FeedFlow
                        </Text>
                        em seu dispositivo!
                    </Text>
                </ModalHeader>

                <ModalBody display={"flex"} justifyContent={"center"}>
                    <Img src="./undraw_install_pwa.svg" h={"75%"} w={"75%"} objectFit={"cover"} />
                </ModalBody>

                <ModalFooter gap={4} display={"flex"}>
                    <Button
                        w={"100%"}
                        bg={"red"}
                        color={"white"}
                        onClick={onClose}
                        _hover={{
                            bg: 'red.600'
                        }}
                    >
                        Não
                    </Button>

                    <Button
                        w={"100%"}
                        onClick={handleInstall}
                        color={"white"}
                        bg={"violet.600"}
                        _hover={{
                            bg: 'violet.800'
                        }}
                    >
                        Sim
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}