import { Flex } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { UseDashboard } from "../../hook/dashboard";
import { useEffect } from "react";
import { UseLogin } from "../../hook/login";
import { HeaderClientes } from "../../components/HeeaderClientes";
import dogCliente from "../../assets/cliente.svg";

interface ClienteCpfProps {
  idCliente: string;
}

export const Clientes = () => {
  const { idCliente } = useParams<ClienteCpfProps>();

  const { getClienteByCpf, oneCliente } = UseDashboard();
  const { data } = UseLogin();

  useEffect(() => {
    getClienteByCpf(idCliente, data.token);
  }, []);

  console.log(oneCliente);
  return (
    <>
      <HeaderClientes cpf={oneCliente} />
      <Flex
        w="100vw"
        h="calc(100vh - 70px)"
        bgColor={"#EF8C9E"}
        bgImage={dogCliente}
        bgPosition={"bottom"}
        bgSize={"100vw"}
        bgRepeat={"no-repeat"}
      >
        Cliente
      </Flex>
    </>
  );
};
