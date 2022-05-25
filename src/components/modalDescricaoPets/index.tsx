import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Textarea,
} from "@chakra-ui/react";

interface PropsModal {
  isOpen: boolean;
  onClose: () => void;
  pet: string;
}

export const ModalDescricaoPets = ({ isOpen, onClose, pet }: PropsModal) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bgColor={"rgba(255, 194, 205)"} w="90vw">
          <ModalHeader>Descrição</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Textarea isDisabled placeholder="Here is a sample placeholder">
              {pet}
            </Textarea>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
