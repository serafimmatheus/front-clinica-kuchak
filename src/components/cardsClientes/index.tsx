import { Center, Flex, Text, useDisclosure, useToast } from "@chakra-ui/react";
import { FaTrash, FaUserAlt, FaWhatsapp } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { MdOutlineMailOutline } from "react-icons/md";
import { UseDashboard } from "../../hook/dashboard";
import { UseLogin } from "../../hook/login";
import { ModalEditeCliente } from "../modalEditClientes";

interface ClienteProps {
  cpf: string;
  nome: string;
  email: string;
  telefone: string;
  endereco: string;
  is_whatsapp?: boolean;
  user_id?: number;
}

interface CardsClientesProps {
  cliente: ClienteProps;
  openModal: () => void;
}

export const CardsClientes = ({ cliente, openModal }: CardsClientesProps) => {
  const { getClientesData, deleteOneCliente } = UseDashboard();
  const { data } = UseLogin();

  const toast = useToast();

  const handleDeleteCliente = (cpf_cliente: string) => {
    deleteOneCliente(cpf_cliente, data.token)
      .then((_) => {
        getClientesData(data.token);
      })
      .catch((_) => {
        toast({
          title: "ALgo de errado!",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      });
  };
  return (
    <Flex
      w="45vw"
      minH="80px"
      bg="red.200"
      flexDir={"column"}
      p="10px"
      bgColor={"rgba(255, 194, 205, 0.8)"}
      borderRadius="10px"
    >
      <Flex justifyContent={"right"}>
        <Flex marginRight={"5px"}>
          <FiEdit onClick={() => openModal()} />
        </Flex>

        <Flex>
          <FaTrash onClick={() => handleDeleteCliente(cliente.cpf)} />
        </Flex>
      </Flex>

      <Flex flexDir={"column"}>
        <Center>
          <FaUserAlt />
          <Text marginLeft={["5px"]} isTruncated wordBreak={"break-all"}>
            {cliente.nome}
          </Text>
        </Center>

        <Center>
          <MdOutlineMailOutline size={"30px"} />
          <Text isTruncated wordBreak={"break-all"} marginLeft={["5px"]}>
            {cliente.email}
          </Text>
        </Center>

        <Center>
          <FaWhatsapp />
          <Text marginLeft={["5px"]} wordBreak={"break-all"}>
            {cliente.telefone}
          </Text>
        </Center>
      </Flex>
    </Flex>
  );
};
