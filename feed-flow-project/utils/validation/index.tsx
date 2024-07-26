import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react";

interface ModalProps {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

export function ModalToWarningLogin(/* { isOpen, onOpen, onClose } : ModalProps */) {
    const {isOpen, onOpen, onClose} = useDisclosure();
    return (
        <Modal isOpen isCentered onClose={onClose}>
            <ModalOverlay />
            <ModalContent bg={"purple"}>
                <ModalHeader>

                </ModalHeader>

                <ModalBody>

                </ModalBody>

                <ModalFooter>

                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}