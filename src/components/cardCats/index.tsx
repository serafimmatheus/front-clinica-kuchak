import { Flex, Text } from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";

export const CardCats = ({ cats }: any) => {
  return (
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

        <Flex marginRight="10px">
          <FiEdit />
        </Flex>
      </Flex>

      <Flex flexDir={"column"}>
        <Text>Nome: {cats.nome}</Text>
        <Text>Raça: {cats.raca}</Text>
        <Text>Data de nascimento: {cats.data_nascimento}</Text>
        <Text>Pelagem: {cats.pelagem}</Text>
        <Text>Castrado: {cats.is_castrado ? "Sim" : "Não"}</Text>
        <Text>Testado: {cats.is_testado ? "Sim" : "Não"}</Text>
      </Flex>
    </Flex>
  );
};
