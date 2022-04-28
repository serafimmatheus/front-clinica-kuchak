import { Box, Flex, ScaleFade, Text, useDisclosure } from "@chakra-ui/react";
import { IoMdPersonAdd } from "react-icons/io";
import { BiExit } from "react-icons/bi";
import { UseLogin } from "../../hook/login";
import { ModalAddCliente } from "../modalAddClientes";

export const ModalMenu = ({ isOpen }: any) => {
  const { handleSignOut } = UseLogin();

  const {
    isOpen: isOpenCliente,
    onClose: onCloseCliente,
    onOpen: onOpenCliente,
  } = useDisclosure();

  return (
    <>
      <ModalAddCliente isOpen={isOpenCliente} onClose={onCloseCliente} />
      <ScaleFade initialScale={0.9} in={isOpen}>
        <Box
          w={"auto"}
          minH={"20px"}
          position={"absolute"}
          p="10px"
          color="white"
          mt="4"
          bg="#9F3548"
          rounded="md"
          shadow="md"
          right={"0"}
          top="30px"
          zIndex={1}
        >
          <Flex
            w={"100%"}
            h="auto"
            justifyContent={"center"}
            alignItems={"center"}
          >
            <IoMdPersonAdd />
            <Text onClick={onOpenCliente} marginLeft={"10px"}>
              Adicionar cliente
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
      </ScaleFade>
    </>
  );
};
