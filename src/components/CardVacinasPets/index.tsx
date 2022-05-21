import { Flex, Heading } from "@chakra-ui/react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { UseDashboard } from "../../hook/dashboard";
import { UseLogin } from "../../hook/login";
import { InputVacinas } from "./input";
import { Vacians } from "./vacinas";

interface IPetIdProps {
  idPet: string;
}

export const CardVacinasPets = () => {
  const { handleVacinaByIdPet, petsVacinas } = UseDashboard();
  const { data } = UseLogin();

  const { idPet } = useParams<IPetIdProps>();

  useEffect(() => {
    handleVacinaByIdPet(idPet, data.token);
  }, []);

  return (
    <Flex
      w={["100%"]}
      h={["auto"]}
      bg={["rgba(255, 194, 205, 0.8)"]}
      flexDir={["column"]}
      alignItems={"center"}
    >
      <Heading>Vacinas</Heading>
      <InputVacinas petsVacinas={petsVacinas} />
      <Vacians />
    </Flex>
  );
};
