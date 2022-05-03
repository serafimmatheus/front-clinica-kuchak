import { Flex, Text } from "@chakra-ui/react";
import { FaDog, FaTrash } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";

export const CardDogs = ({ dogs }: any) => {
  console.log(dogs);
  return (
    <Flex
      w="100vh"
      flexDir={"column"}
      bgColor={"rgba(255, 194, 205, 0.7)"}
      borderRadius={"10px"}
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
        <Text>Nome: {dogs.nome}</Text>
        <Text>Raça: {dogs.raca}</Text>
        <Text>Data de nascimento: {dogs.data_nascimento}</Text>
        <Text>Pelagem: {dogs.pelagem}</Text>
        <Text>Castrado: {dogs.is_castrado ? "Sim" : "Não"}</Text>
      </Flex>
    </Flex>
  );
};
