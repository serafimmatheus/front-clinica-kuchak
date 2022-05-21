import { Flex } from "@chakra-ui/react";
import { Input } from "../form/input";

export const InputVacinasCats = ({ catsVacinas }: any) => {
  return (
    <Flex flexDir={["column"]} padding={["10px"]}>
      <Flex>
        <Input
          padding={["10px"]}
          name="nome"
          label="Nome"
          value={catsVacinas.nome}
        />
        <Input
          padding={["10px"]}
          name="raca"
          label="Raça"
          value={catsVacinas.raca}
        />
      </Flex>

      <Flex>
        <Input
          padding={["10px"]}
          name="data_nascimento"
          label="Aniversário"
          value={catsVacinas.data_nascimento}
        />
        <Input
          padding={["10px"]}
          name="pelagem"
          label="Pelagem"
          value={catsVacinas.pelagem}
        />
      </Flex>

      <Flex w={["100%"]}>
        <Input
          padding={["10px"]}
          name="castrado"
          label="Castrado"
          value={catsVacinas.is_castrado ? "Sim" : "Não"}
        />

        <Input
          padding={["10px"]}
          name="castrado"
          label="Testado"
          value={catsVacinas.is_testado ? "Sim" : "Não"}
        />
      </Flex>
    </Flex>
  );
};
