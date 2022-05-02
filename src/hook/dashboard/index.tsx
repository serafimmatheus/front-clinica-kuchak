import {
  useCallback,
  useState,
  useContext,
  createContext,
  ReactNode,
} from "react";

import { api } from "../../services/api";

interface ChildrenProps {
  children: ReactNode;
}

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

interface DashboarProvidersProps {
  getClientesData: (token: string) => Promise<void>;
  clientes: ClientesProps[];
  deleteOneCliente: (cpf_cliente: string, token: string) => Promise<void>;
  createClientes: (data: any, token: string) => Promise<void>;
  editeClientes: (
    data: any,
    cpf_cliente: string,
    token: string
  ) => Promise<void>;
  getClienteByCpf: (cliente_cpf: string, token: string) => Promise<void>;
  oneCliente: ClientesProps;
}

const DashboardContext = createContext<DashboarProvidersProps>(
  {} as DashboarProvidersProps
);

export const UseDashboard = () => {
  const context = useContext(DashboardContext);

  if (!context) {
    throw new Error("DashboardProvider must be used within as Provider");
  }

  return context;
};

export const DashboardProvider = ({ children }: ChildrenProps) => {
  const [clientes, setClientes] = useState<ClientesProps[]>([]);

  const [oneCliente, setOneCliente] = useState<ClientesProps>(
    {} as ClientesProps
  );

  const getClientesData = useCallback(async (token: string) => {
    const response = await api.get("/users/clientes", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    setClientes(response.data);
  }, []);

  const deleteOneCliente = useCallback(
    async (cpf_cliente: string, token: string) => {
      const response = await api.delete(`/users/clientes/${cpf_cliente}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
    []
  );

  const createClientes = useCallback(async (data: any, token: string) => {
    console.log(data);
    const response = await api.post(`/users/clientes`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }, []);

  const editeClientes = useCallback(
    async (data: any, cpf_cliente: string, token: string) => {
      const response = api.patch(`/users/clientes/${cpf_cliente}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
    []
  );

  const getClienteByCpf = useCallback(
    async (cliente_cpf: string, token: string) => {
      const response = await api.get(`/users/clientes/${cliente_cpf}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setOneCliente(response.data);
    },
    []
  );

  return (
    <DashboardContext.Provider
      value={{
        getClientesData,
        clientes,
        deleteOneCliente,
        createClientes,
        editeClientes,
        getClienteByCpf,
        oneCliente,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};
