import { Flex } from "@chakra-ui/react";
import { CardVacinasCats } from "../../components/CardVacinasCats";
import { HeaderPets } from "../../components/HeeaderPets";
import img from "../../assets/cliente.svg";
import { UseDashboard } from "../../hook/dashboard";
import { UseLogin } from "../../hook/login";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

interface IPetIdProps {
  idCat: string;
}

export const Cats = () => {
  const { handleVacinaByIdCat, catsVacinas } = UseDashboard();
  const { data } = UseLogin();
  const { idCat } = useParams<IPetIdProps>();

  useEffect(() => {
    handleVacinaByIdCat(parseInt(idCat), data.token);
  }, []);

  return (
    <>
      <HeaderPets namePet={catsVacinas} />
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
        <CardVacinasCats />
      </Flex>
    </>
  );
};
