import { Modal, ModalContent, ModalHeader, ModalOverlay } from "@chakra-ui/react";

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
                    Leia sobre o App!
                </ModalHeader>
            </ModalContent>
        </Modal>
    )
}