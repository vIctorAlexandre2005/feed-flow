import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text } from "@chakra-ui/react";

interface ModalPropsError {
    isOpen: boolean;
    onClose: () => void;
}

export function ModalError({ isOpen, onClose } : ModalPropsError) {
    return (
        <Modal isCentered isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>

                <ModalHeader>
                    Como funciona os dados do FeedFlow?
                </ModalHeader>

                <ModalBody>
                    <Text>
                    Os dados são pegos de um banco de dados públicos, ou seja, para você conseguir vê-los é necessário internet.
                    </Text>

                    <Text>Por ser um banco de dados gratuito e com notícias reais, o acesso a esse banco é limitado a um número específico por dia, e não é por pessoa, mas sim, por requisição em geral. Ou seja, a cada busca de dados que você e outros usuários fazem, eles vão contando até chegar o limite diário. Excedendo esse limite, automaticamente para de vim dados, ou seja, aparece a telinha de erro que apareceu para você!</Text>

                    <Text>Nesse caso, pode ser que esperar 15 minutinhos e tentar voltar a usar resolva. Se não, provavelmente só no dia seguinte!</Text>

                    <Text>Mas para evitar que isso aconteça frequentemente, evite ficar recarregando a página desnecessariamente e esteja sempre atento com sua conexão da internet!</Text>
                </ModalBody>

                <ModalFooter>
                    <Button bg={"red"} color={"white"} _hover={{ bg: 'red.700' }} onClick={onClose}>
                        Fechar
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}