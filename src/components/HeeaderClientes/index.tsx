import { Flex, Heading, Image, useDisclosure } from "@chakra-ui/react";
import { UseLogin } from "../../hook/login";
import { FcSearch } from "react-icons/fc";
import { FaBars, FaCat, FaDog } from "react-icons/fa";
import { ModalMenu } from "../modalMenu";
import { ModalBackMenu } from "../modalBackMenu";

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
  const { data } = UseLogin();

  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <>
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
            <FaDog color="#f4f4f4" />
          </Flex>

          <Flex fontSize={"30px"}>
            <FaCat color="#f4f4f4" />
          </Flex>

          <Flex color={"#f4f4f4"} marginLeft={"10px"} fontSize={"30px"}>
            <FaBars onClick={onOpen} />
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};
