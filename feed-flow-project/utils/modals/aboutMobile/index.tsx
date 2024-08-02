import { useContextFeedContext } from "@/Components/Context";
import { Box, Divider, Flex, Link, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from "@chakra-ui/react";
import { FcAbout } from "react-icons/fc";
import { aboutProjectModalBody } from "../../lists/AboutProject";
import { Fragment } from "react";

interface ModalAboutProps {
    isOpen: boolean;
    onClose: () => void;
}

export function ModalAboutMobile({ isOpen, onClose }: ModalAboutProps) {
    const { user } = useContextFeedContext();

    const textWpp = "Olá, vim pelo FeedFlow!";
    const linkWpp = `https://web.whatsapp.com/send?phone=+55(21)980478184&text=${textWpp}&app_absent=0`;

    return (
        <Modal isCentered size={"full"} isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            
            <ModalContent>
                <ModalHeader display={"flex"} alignItems={"center"} gap={1}>
                    <Text color={"violet.600"}>FeedFlow</Text> - Sobre <FcAbout size={24} color="purple" />
                    <ModalCloseButton />
                </ModalHeader>

                <ModalBody maxH={"28rem"} overflow={"auto"}>
                    <Text mb={"1rem"} fontWeight={"bold"} fontSize={"1.2rem"}>
                        {user ? `Seja bem-vindo, ${user?.displayName}!` : 'Seja bem-vindo, visitante!'}
                    </Text>
                    <Text mb={"0.5rem"} fontSize={"0.86rem"}>
                    Fico feliz que você tenha acessado e, provavelmente, utilizado o FeedFlow! Como pode ver, este projeto é basicamente um feed que contém notícias, fotos e vídeos para você! Abaixo seguem algumas observações:
                    </Text>
                    {aboutProjectModalBody.map((item, idx) => (
                        <Fragment key={idx}>
                            <Text fontSize={"0.86rem"} mb={"0.5rem"}>{item.topic} - {item.text}</Text>
                        </Fragment>
                    ))}
                </ModalBody>

                <Divider borderColor={"violet.200"} mt={"0.5rem"} />

                <ModalFooter display={"flex"} justifyContent={"left"}>
                    <Box>
                        <Flex gap={1}>
                            <Text fontSize={"0.86rem"}>Projeto desenvolvido por: </Text>
                            <Text fontSize={"0.86rem"} color={"violet.600"} fontWeight={"bold"}>Victor Alexandre</Text>
                        </Flex>

                        <Flex gap={1}>
                            <Text fontSize={"0.86rem"}>Acesse meu</Text>
                            <Link fontSize={"0.86rem"} color={"violet.600"} fontWeight={"bold"} href="https://linkedin.com/in/victoralexandredasilvamarins/">
                                Linkedin
                            </Link>
                        </Flex>

                        <Flex gap={1}>
                            <Text fontSize={"0.86rem"}>Acesse meu</Text>
                            <Link fontSize={"0.86rem"} color={"violet.600"} fontWeight={"bold"} href="https://github.com/vIctorAlexandre2005">
                                GitHub
                            </Link>
                        </Flex>

                        <Flex gap={1}>
                            <Text fontSize={"0.86rem"}>Meu email:</Text>
                            <Link fontSize={"0.86rem"} href="mailto:victoralexandredasilvamarins@gmail.com" fontWeight={"bold"} color={"violet.600"}>victoralexandredasilvamarins@gmail.com</Link>
                        </Flex>

                        <Flex gap={1}>
                            <Text fontSize={"0.86rem"}>Meu telefone:</Text>
                            <Link fontSize={"0.86rem"} href={linkWpp} fontWeight={"bold"} color={"violet.600"}>+55 (21) 98047-8184</Link>
                        </Flex>
                    </Box>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}