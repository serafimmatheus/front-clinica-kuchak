import { useParams } from "react-router-dom";
import { UseDashboard } from "../../hook/dashboard";
import { useEffect } from "react";
import { UseLogin } from "../../hook/login";
import { HeaderClientes } from "../../components/HeeaderClientes";
import { MainClientes } from "./main";

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

  return (
    <>
      <HeaderClientes cpf={oneCliente} />
      <MainClientes cliente={oneCliente} />
    </>
  );
};
