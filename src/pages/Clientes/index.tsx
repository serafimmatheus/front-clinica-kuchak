import { Flex } from "@chakra-ui/react";
import { Header } from "../../components/Heeader";
import { useParams } from "react-router-dom";

export const Clientes = () => {
  const params = useParams();
  const idCliente = params;
  console.log(idCliente);
  return (
    <>
      <Header />
      <Flex>Cliente</Flex>
    </>
  );
};
