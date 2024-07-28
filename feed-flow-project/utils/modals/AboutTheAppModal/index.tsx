import { useContextFeedContext } from "@/Components/Context";
import { Modal, ModalBody, ModalContent, ModalHeader, ModalOverlay, Text } from "@chakra-ui/react";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function ModalAboutApp({ isOpen, onClose } : ModalProps) {

    return (
        <Modal isOpen={isOpen} onClose={onClose} isCentered size={"lg"}>
            <ModalOverlay />
            <ModalContent bg={"white"}>
                <ModalHeader>
                    Sobre este projeto
                </ModalHeader>

                <ModalBody>
                    <Text>
                        Meu nome é Victor e eu desenvolvi esse projeto sozinho. 
                    </Text>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}