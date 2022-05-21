import { Flex, Text, useDisclosure } from "@chakra-ui/react";
import { FaSyringe, FaTrash } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { UseDashboard } from "../../hook/dashboard";
import { UseLogin } from "../../hook/login";
import { useHistory, useParams } from "react-router-dom";
import { ModalEditDogs } from "../modalEditDogs";

interface ClienteCpfProps {
  idCliente: string;
}

export const CardDogs = ({ dogs, current }: any) => {
  const { handleDeleteDogs, getClienteByCpf, handleUpdateDogs } =
    UseDashboard();
  const { data } = UseLogin();

  const { idCliente } = useParams<ClienteCpfProps>();

  const history = useHistory();

  const deleteDog = () => {
    handleDeleteDogs(dogs.id, data.token)
      .then((_) => {
        getClienteByCpf(idCliente, data.token);
      })
      .catch((_) => {});
  };

  const { isOpen, onOpen, onClose } = useDisclosure();

  const newData = dogs.data_nascimento.split(" ");

  const dataFormated = newData.slice(1, 4).join("/");

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

          <Flex margin="0 10px">
            <FiEdit onClick={onOpen} />
          </Flex>

          <Flex>
            <FaSyringe
              onClick={() => history.push(`/dashboard/pets/${dogs.id}`)}
            />
          </Flex>
        </Flex>

        <Flex flexDir={"column"}>
          <Text>Nome: {dogs.nome}</Text>
          <Text>Raça: {dogs.raca}</Text>
          <Text>Data de nascimento: {dataFormated}</Text>
          <Text>Pelagem: {dogs.pelagem}</Text>
          <Text>Castrado: {dogs.is_castrado ? "Sim" : "Não"}</Text>
        </Flex>
      </Flex>
    </>
  );
};
