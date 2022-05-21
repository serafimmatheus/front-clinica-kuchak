import { Flex } from "@chakra-ui/react";
import { Input } from "../form/input";

export const InputVacinas = ({ petsVacinas }: any) => {
  return (
    <Flex flexDir={["column"]} padding={["10px"]}>
      <Flex>
        <Input
          padding={["10px"]}
          name="nome"
          label="Nome"
          value={petsVacinas.nome}
        />
        <Input
          padding={["10px"]}
          name="raca"
          label="Raça"
          value={petsVacinas.raca}
        />
      </Flex>

      <Flex>
        <Input
          padding={["10px"]}
          name="data_nascimento"
          label="Aniversário"
          value={petsVacinas.data_nascimento}
        />
        <Input
          padding={["10px"]}
          name="pelagem"
          label="Pelagem"
          value={petsVacinas.pelagem}
        />
      </Flex>

      <Flex w={["50%"]}>
        <Input
          padding={["10px"]}
          name="castrado"
          label="Castrado"
          value={petsVacinas.is_castrado ? "Sim" : "Não"}
        />
      </Flex>
    </Flex>
  );
};
