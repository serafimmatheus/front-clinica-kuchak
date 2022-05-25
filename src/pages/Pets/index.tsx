import { Flex } from "@chakra-ui/react";
import { CardVacinasPets } from "../../components/CardVacinasPets";
import { HeaderPets } from "../../components/HeeaderPets";
import img from "../../assets/cliente.svg";
import { UseLogin } from "../../hook/login";
import { UseDashboard } from "../../hook/dashboard";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

interface IPetIdProps {
  idPet: string;
}
export const Pets = () => {
  const { handleVacinaByIdPet, petsVacinas } = UseDashboard();
  const { data } = UseLogin();
  const { idPet } = useParams<IPetIdProps>();

  console.log(petsVacinas);

  useEffect(() => {
    handleVacinaByIdPet(parseInt(idPet), data.token);
  }, []);

  return (
    <>
      <HeaderPets namePet={petsVacinas} />
      <Flex
        as="main"
        w={["100%"]}
        h={["auto"]}
        padding={["10px"]}
        bg={["rgb(239, 140, 158)"]}
        bgImage={img}
        bgRepeat={["no-repeat"]}
        bgPosition={["bottom"]}
        bgSize={["100%"]}
      >
        <CardVacinasPets />
      </Flex>
    </>
  );
};
