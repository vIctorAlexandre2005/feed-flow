import { useContextFeedContext } from "@/Components/Context";
import { Box, Flex, Link, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from "@chakra-ui/react";
import { FcAbout } from "react-icons/fc";
import { aboutProjectModalBody } from "../../lists/AboutProject";
import { Fragment } from "react";

interface ModalAboutProps {
    isOpen: boolean;
    onClose: () => void;
}

export function ModalAbout({ isOpen, onClose }: ModalAboutProps) {
    const { user } = useContextFeedContext();

    const textWpp = "Olá, vim pelo FeedFlow!";
    const linkWpp = `https://web.whatsapp.com/send?phone=+55(21)980478184&text=${textWpp}&app_absent=0`;


    return (
        <Modal size={"xl"} isCentered isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader display={"flex"} alignItems={"center"} gap={1}>
                    <Text color={"violet.600"}>FeedFlow</Text> - Sobre <FcAbout size={24} color="purple" />
                </ModalHeader>

                <ModalBody maxH={"28rem"} overflow={"auto"}>
                    <Text mb={"1rem"} fontWeight={"bold"} fontSize={"1.2rem"}>
                        {user ? `Seja bem-vindo, ${user?.displayName}!` : 'Seja bem-vindo, visitante!'}
                    </Text>
                    <Text mb={"1rem"}>
                    Fico feliz que você tenha acessado e, provavelmente, utilizado o FeedFlow! Como pode ver, este projeto é basicamente um feed que contém notícias, fotos e vídeos para você navegar (tudo vindo de APIs)! Abaixo seguem algumas observações:
                    </Text>
                    {aboutProjectModalBody.map((item, idx) => (
                        <Fragment key={idx}>
                            <Text mb={"1rem"}>{item.topic} - {item.text}</Text>
                        </Fragment>
                    ))}
                </ModalBody>

                <ModalFooter display={"flex"} justifyContent={"left"}>
                    <Box>
                        <Flex gap={1}>
                            <Text>Projeto desenvolvido por: </Text>
                            <Text color={"violet.600"} fontWeight={"bold"}>Victor Alexandre</Text>
                        </Flex>

                        <Flex gap={1}>
                            <Text>Acesse meu</Text>
                            <Link color={"violet.600"} fontWeight={"bold"} href="https://linkedin.com/in/victoralexandredasilvamarins/">
                                Linkedin
                            </Link>
                        </Flex>

                        <Flex gap={1}>
                            <Text>Acesse meu</Text>
                            <Link color={"violet.600"} fontWeight={"bold"} href="https://github.com/vIctorAlexandre2005">
                                GitHub
                            </Link>
                        </Flex>

                        <Flex gap={1}>
                            <Text>Meu email:</Text>
                            <Link href="mailto:victoralexandredasilvamarins@gmail.com" fontWeight={"bold"} color={"violet.600"}>victoralexandredasilvamarins@gmail.com</Link>
                        </Flex>

                        <Flex gap={1}>
                            <Text>Meu telefone:</Text>
                            <Link href={linkWpp} fontWeight={"bold"} color={"violet.600"}>+55 (21) 98047-8184</Link>
                        </Flex>
                    </Box>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}