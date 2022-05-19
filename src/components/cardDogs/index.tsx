import { Flex, Text, useDisclosure } from "@chakra-ui/react";
import { FaDog, FaTrash } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { UseDashboard } from "../../hook/dashboard";
import { UseLogin } from "../../hook/login";
import { useParams } from "react-router-dom";
import { ModalEditDogs } from "../modalEditDogs";

interface ClienteCpfProps {
  idCliente: string;
}

export const CardDogs = ({ dogs, current }: any) => {
  const { handleDeleteDogs, getClienteByCpf, handleUpdateDogs } =
    UseDashboard();
  const { data } = UseLogin();

  const { idCliente } = useParams<ClienteCpfProps>();

  const deleteDog = () => {
    handleDeleteDogs(dogs.id, data.token)
      .catch((_) => {
        getClienteByCpf(idCliente, data.token);
      })
      .then((_) => {});
  };

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <ModalEditDogs isOpen={isOpen} onClose={onClose} dogs={dogs} />
      <Flex
        w="90%"
        flexDir={"column"}
        bgColor={"rgba(255, 194, 205, 0.7)"}
        borderRadius={"10px"}
        position="absolute"
      >
        <Flex flexDir={"row-reverse"} marginRight="10px" marginTop={"5px"}>
          <Flex>
            <FaTrash onClick={deleteDog} />
          </Flex>

          <Flex marginRight="10px">
            <FiEdit onClick={onOpen} />
          </Flex>
        </Flex>

        <Flex flexDir={"column"}>
          <Text>Nome: {dogs.nome}</Text>
          <Text>Raça: {dogs.raca}</Text>
          <Text>Data de nascimento: {dogs.data_nascimento}</Text>
          <Text>Pelagem: {dogs.pelagem}</Text>
          <Text>Castrado: {dogs.is_castrado ? "Sim" : "Não"}</Text>
        </Flex>
      </Flex>
    </>
  );
};
