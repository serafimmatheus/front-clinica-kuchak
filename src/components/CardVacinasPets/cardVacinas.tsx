import { Flex, useDisclosure } from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { Input } from "../form/input";
import { ModalDescricaoPets } from "../modalDescricaoPets";
import { MdDescription } from "react-icons/md";

interface IVacinas {
  data_aplicacao: string;
  data_revacinacao: string;
  descricao: string;
  id: number;
  is_pupies: boolean;
  nome: string;
}

interface ICardVacinas {
  vacina: IVacinas;
}

export const CardVacinas = ({ vacina }: ICardVacinas) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <>
      <ModalDescricaoPets
        isOpen={isOpen}
        onClose={onClose}
        pet={vacina.descricao}
      />
      <Flex
        flexDir={["column"]}
        bgColor={["#9F3548"]}
        padding="10px"
        borderRadius={["10px"]}
      >
        <Flex
          marginTop={["20px"]}
          w={["100%"]}
          justifyContent={"flex-end"}
          marginRight={["45px"]}
        >
          <Flex>
            <MdDescription size={"25px"} onClick={onOpen} />
          </Flex>

          <Flex margin="0 10px">
            <FiEdit size={"25px"} />
          </Flex>

          <Flex>
            <FaTrash size={"25px"} />
          </Flex>
        </Flex>
        <Input
          padding={["10px"]}
          name="vacina"
          label="Vacina"
          value={vacina.nome}
        />
        <Input
          padding={["10px"]}
          name="data_vacinacao"
          label="Data Vacinação"
          value={vacina.data_aplicacao}
        />
        <Input
          padding={["10px"]}
          name="data_revacinacao"
          label="Data Revacinação"
          value={vacina.data_revacinacao}
        />
        <Input
          padding={["10px"]}
          name="filhote"
          label="filhote"
          value={vacina.is_pupies ? "Sim" : "Não"}
        />
      </Flex>
    </>
  );
};
