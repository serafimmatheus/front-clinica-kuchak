import { Flex, Heading, useDisclosure } from "@chakra-ui/react";
import { UseLogin } from "../../hook/login";
import { FaBars, FaCat, FaDog } from "react-icons/fa";
import { ModalBackMenu } from "../modalBackMenu";
import { ModalAddDogs } from "../modalAddDogs";
import { ModalAddCats } from "../modalAddCats";

interface DogsProps {
  id: number;
  raca: string;
  nome: string;
  data_nascimento: string;
  pelagem: string;
  is_castrado: boolean;
  cliente_id: number;
}
interface CatsProps {
  id: number;
  raca: string;
  nome: string;
  data_nascimento: string;
  pelagem: string;
  is_castrado: boolean;
  is_testado: boolean;
  cliente_id: number;
}

interface ClientesProps {
  cpf: string;
  nome: string;
  email: string;
  endereco: string;
  is_whatsapp: boolean;
  telefone: string;
  dogs: DogsProps[];
  cats: CatsProps[];
}

export const HeaderClientes = ({ cpf }: any) => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  const {
    isOpen: isOpenDog,
    onClose: onCloseDog,
    onOpen: onOpenDog,
  } = useDisclosure();

  const {
    isOpen: isOpenCat,
    onClose: onCloseCat,
    onOpen: onOpenCat,
  } = useDisclosure();

  return (
    <>
      <ModalAddDogs isOpen={isOpenDog} onClose={onCloseDog} />
      <ModalAddCats isOpen={isOpenCat} onClose={onCloseCat} />
      <ModalBackMenu isOpen={isOpen} onClose={onClose} />
      <Flex
        w={["100%"]}
        h={["70px"]}
        bgColor={["#9F3548"]}
        justifyContent={["space-around"]}
        padding={["10px 0"]}
      >
        <Flex alignItems={"center"}>
          <Heading
            w={"100%"}
            color={["#f4f4f4"]}
            marginLeft={["10px"]}
            fontSize={["16px"]}
          >
            {cpf.nome}
          </Heading>
        </Flex>

        <Flex alignItems={"center"}>
          <Flex fontSize={"35px"} marginRight={["5px"]}>
            <FaDog onClick={onOpenDog} color="#f4f4f4" />
          </Flex>

          <Flex fontSize={"30px"}>
            <FaCat onClick={onOpenCat} color="#f4f4f4" />
          </Flex>

          <Flex color={"#f4f4f4"} marginLeft={"10px"} fontSize={"30px"}>
            <FaBars onClick={onOpen} />
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};
