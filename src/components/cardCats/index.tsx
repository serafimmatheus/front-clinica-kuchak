import { Flex, Text, useDisclosure } from "@chakra-ui/react";
import { FaSyringe, FaTrash } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { useHistory } from "react-router-dom";
import { ModalEditCats } from "../modalEditCats";

export const CardCats = ({ cats }: any) => {
  const { onClose, isOpen, onOpen } = useDisclosure();

  const newData = cats.data_nascimento.split(" ");

  const dataFormated = newData.slice(1, 4).join("/");

  const history = useHistory();
  return (
    <>
      <ModalEditCats isOpen={isOpen} onClose={onClose} cats={cats} />
      <Flex
        w="90%"
        flexDir={"column"}
        bgColor={"rgba(255, 194, 205, 0.7)"}
        borderRadius={"10px"}
        position="absolute"
      >
        <Flex flexDir={"row-reverse"} marginRight="10px" marginTop={"5px"}>
          <Flex>
            <FaTrash />
          </Flex>

          <Flex margin="0 10px">
            <FiEdit onClick={onOpen} />
          </Flex>

          <Flex>
            <FaSyringe
              onClick={() => history.push(`/dashboard/cats/${cats.id}`)}
            />
          </Flex>
        </Flex>

        <Flex flexDir={"column"}>
          <Text>Nome: {cats.nome}</Text>
          <Text>Raça: {cats.raca}</Text>
          <Text>Data de nascimento: {dataFormated}</Text>
          <Text>Pelagem: {cats.pelagem}</Text>
          <Text>Castrado: {cats.is_castrado ? "Sim" : "Não"}</Text>
          <Text>Testado: {cats.is_testado ? "Sim" : "Não"}</Text>
        </Flex>
      </Flex>
    </>
  );
};
