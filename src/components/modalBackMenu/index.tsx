import {
  Box,
  Flex,
  Modal,
  ModalContent,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { IoMdPersonAdd } from "react-icons/io";
import { BiExit } from "react-icons/bi";
import { UseLogin } from "../../hook/login";
import { ModalAddCliente } from "../modalAddClientes";
import { useHistory } from "react-router-dom";

export const ModalBackMenu = ({ isOpen, onClose }: any) => {
  const { handleSignOut } = UseLogin();

  const history = useHistory();

  const {
    isOpen: isOpenCliente,
    onClose: onCloseCliente,
    onOpen: onOpenCliente,
  } = useDisclosure();

  return (
    <>
      <ModalAddCliente onClose={onCloseCliente} isOpen={isOpenCliente} />

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <Box
            w={"150px"}
            minH={"20px"}
            position={"absolute"}
            p="10px"
            color="white"
            mt="4"
            bg="#9F3548"
            rounded="md"
            shadow="md"
            right={"5px"}
            top="-6px"
            zIndex={1}
          >
            <Flex
              w={"100%"}
              h="auto"
              justifyContent={"flex-start"}
              alignItems={"center"}
            >
              <IoMdPersonAdd />
              <Text
                onClick={() => history.push("/dashboard")}
                marginLeft={"10px"}
              >
                Home
              </Text>
            </Flex>

            <Flex
              w={"100%"}
              h="auto"
              justifyContent={"flex-start"}
              alignItems={"center"}
            >
              <BiExit />
              <Text onClick={handleSignOut} marginLeft={"10px"}>
                Sair
              </Text>
            </Flex>
          </Box>
        </ModalContent>
      </Modal>
    </>
  );
};
