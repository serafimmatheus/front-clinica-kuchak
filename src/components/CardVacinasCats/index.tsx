import { Flex, Heading } from "@chakra-ui/react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { UseDashboard } from "../../hook/dashboard";
import { UseLogin } from "../../hook/login";
import { InputVacinasCats } from "./input";
import { VaciansCats } from "./vacinas";

interface IPetIdProps {
  idCat: string;
}

export const CardVacinasCats = () => {
  const { handleVacinaByIdCat, catsVacinas, vacinasCats } = UseDashboard();
  const { data } = UseLogin();

  const { idCat } = useParams<IPetIdProps>();

  useEffect(() => {
    handleVacinaByIdCat(idCat, data.token);
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
      <InputVacinasCats catsVacinas={catsVacinas} />
      <VaciansCats />
    </Flex>
  );
};
