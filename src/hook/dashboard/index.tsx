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
  cats: CatsProps[];
  dogs: DogsProps[];
  handleAddDogs: (dog: any, token: string, clienteId: string) => Promise<void>;
  handleAddCats: (cat: any, token: string, clienteId: string) => Promise<void>;
  handleUpdateDogs: (data: any, idDog: number, token: string) => Promise<void>;
  handleDeleteDogs: (idDog: number, token: string) => Promise<void>;
  handleUpdatecats: (data: any, idCat: number, token: string) => Promise<void>;
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

  const [cats, setCats] = useState<CatsProps[]>([]);
  const [dogs, setDogs] = useState<DogsProps[]>([]);

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
      data["is_whatsapp"] = !!data["is_whatsapp"];
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
      setDogs(response.data.dogs);
      setCats(response.data.cats);
    },
    []
  );

  const handleAddDogs = useCallback(
    async (dog: any, token: string, clienteId: string) => {
      dog["cliente_id"] = clienteId;
      dog["is_castrado"] = !!dog["is_castrado"];
      const response = await api.post(`/users/clientes/dogs`, dog, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
    []
  );

  const handleAddCats = useCallback(
    async (cat: any, token: string, clienteId: string) => {
      cat["cliente_id"] = clienteId;
      cat["is_castrado"] = !!cat["is_castrado"];
      cat["is_testado"] = !!cat["is_testado"];
      const response = await api.post(`/users/clientes/cats`, cat, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
    []
  );

  const handleUpdateDogs = useCallback(
    async (data: any, idDog: number, token: string) => {
      data["is_castrado"] = !!data["is_castrado"];

      const response = await api.patch(`/users/clientes/dogs/${idDog}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
    []
  );

  const handleDeleteDogs = useCallback(async (idDog: number, token: string) => {
    const response = await api.delete(`/users/clientes/dogs/${idDog}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const filtered = dogs.filter((elem) => elem.id != idDog);
  }, []);

  const handleUpdatecats = useCallback(
    async (data: any, idCat: number, token: string) => {
      data["is_castrado"] = !!data["is_castrado"];
      data["is_testado"] = !!data["is_testado"];

      const response = await api.patch(`/users/clientes/cats/${idCat}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
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
        cats,
        dogs,
        handleAddCats,
        handleAddDogs,
        handleDeleteDogs,
        handleUpdateDogs,
        handleUpdatecats,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};
