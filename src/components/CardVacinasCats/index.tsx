import { Flex, Heading, useDisclosure } from "@chakra-ui/react";
import { useEffect } from "react";
import { BiAddToQueue } from "react-icons/bi";
import { BsArrowLeftSquare } from "react-icons/bs";
import { useHistory, useParams } from "react-router-dom";
import { UseDashboard } from "../../hook/dashboard";
import { UseLogin } from "../../hook/login";
import { ModalAddVacinas } from "../modalAddVacinas";
import { InputVacinasCats } from "./input";
import { VaciansCats } from "./vacinas";

interface IPetIdProps {
  idCat: string;
}

export const CardVacinasCats = () => {
  const { handleVacinaByIdCat, catsVacinas } = UseDashboard();
  const { data } = UseLogin();

  const { idCat } = useParams<IPetIdProps>();

  useEffect(() => {
    handleVacinaByIdCat(parseInt(idCat), data.token);
  }, []);

  const { isOpen, onClose, onOpen } = useDisclosure();

  const history = useHistory();

  return (
    <>
      <ModalAddVacinas
        isOpen={isOpen}
        onClose={onClose}
        pet={catsVacinas}
        dog={false}
      />
      <Flex
        w={["100%"]}
        h={["auto"]}
        bg={["rgba(255, 194, 205, 0.8)"]}
        flexDir={["column"]}
        alignItems={"center"}
      >
        <Flex pos={"relative"}>
          <Flex pos={"absolute"} left={"-100px"} top={"10px"}>
            <BsArrowLeftSquare size={"20px"} onClick={() => history.goBack()} />
          </Flex>
          <BiAddToQueue onClick={onOpen} />
          <Heading>Vacinas</Heading>
        </Flex>
        <InputVacinasCats catsVacinas={catsVacinas} />
        <VaciansCats />
      </Flex>
    </>
  );
};
