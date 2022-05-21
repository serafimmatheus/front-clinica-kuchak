import { Flex, Heading, useDisclosure } from "@chakra-ui/react";
import { useEffect } from "react";
import { BiAddToQueue } from "react-icons/bi";
import { useParams } from "react-router-dom";
import { UseDashboard } from "../../hook/dashboard";
import { UseLogin } from "../../hook/login";
import { ModalAddVacinas } from "../modalAddVacinas";
import { ModalEditVacinas } from "../modalEditVacinas";
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
    handleVacinaByIdPet(parseInt(idPet), data.token);
  }, []);

  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <>
      <ModalAddVacinas
        isOpen={isOpen}
        onClose={onClose}
        pet={petsVacinas}
        dog={true}
      />
      <Flex
        w={["100%"]}
        h={["auto"]}
        bg={["rgba(255, 194, 205, 0.8)"]}
        flexDir={["column"]}
        alignItems={"center"}
      >
        <Flex>
          <BiAddToQueue onClick={onOpen} />
          <Heading>Vacinas</Heading>
        </Flex>
        <InputVacinas petsVacinas={petsVacinas} />
        <Vacians />
      </Flex>
    </>
  );
};
