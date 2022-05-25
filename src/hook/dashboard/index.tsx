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

interface IvacinasProps {
  data_aplicacao: string;
  data_revacinacao: string;
  descricao: string;
  id: number;
  is_pupies: boolean;
  nome: string;
}

interface DogsProps {
  id: number;
  raca: string;
  nome: string;
  data_nascimento: string;
  pelagem: string;
  is_castrado: boolean;
  cliente_id?: number;
  vacinas?: IvacinasProps[];
}
interface CatsProps {
  id: number;
  raca: string;
  nome: string;
  data_nascimento: string;
  pelagem: string;
  is_castrado: boolean;
  is_testado: boolean;
  vacinas?: IvacinasProps[];
  cliente_id?: number;
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
  handleVacinaByIdPet: (id: number, token: string) => Promise<void>;
  handleVacinaByIdCat: (id: number, token: string) => Promise<void>;
  createVacinas: (data: any, token: string) => Promise<void>;
  updateVacinas: (data: any, id: number, token: string) => Promise<void>;
  deleteVacinas: (id: number, token: string) => Promise<void>;
  petsVacinas: DogsProps[];
  vacinas: IvacinasProps[];
  catsVacinas: CatsProps[];
  vacinasCats: IvacinasProps[];
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

  const [petsVacinas, setPetsVacinas] = useState<DogsProps[]>([]);
  const [vacinas, setVacinas] = useState<IvacinasProps[]>([]);

  const [catsVacinas, setCatsVacinas] = useState<CatsProps[]>([]);
  const [vacinasCats, setVacinasCats] = useState<IvacinasProps[]>([]);

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
      await api.delete(`/users/clientes/${cpf_cliente}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
    []
  );

  const createClientes = useCallback(async (data: any, token: string) => {
    data["is_whatsapp"] = !!data["is_whatsapp"];
    await api.post(`/users/clientes`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }, []);

  const editeClientes = useCallback(
    async (data: any, cpf_cliente: string, token: string) => {
      data["is_whatsapp"] = !!data["is_whatsapp"];
      await api.patch(`/users/clientes/${cpf_cliente}`, data, {
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
      await api.post(`/users/clientes/dogs`, dog, {
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
      await api.post(`/users/clientes/cats`, cat, {
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

      await api.patch(`/users/clientes/dogs/${idDog}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
    []
  );

  const handleVacinaByIdPet = useCallback(async (id: number, token: string) => {
    const response = await api.get(`/users/clientes/dogs/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    setPetsVacinas(response.data);
    setVacinas(response.data.vacinas);
  }, []);

  const handleVacinaByIdCat = useCallback(async (id: number, token: string) => {
    const response = await api.get(`/users/clientes/cats/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    setCatsVacinas(response.data);
    setVacinasCats(response.data.vacinas);
  }, []);

  const handleDeleteDogs = useCallback(async (idDog: number, token: string) => {
    await api.delete(`/users/clientes/dogs/${idDog}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }, []);

  const handleUpdatecats = useCallback(
    async (data: any, idCat: number, token: string) => {
      data["is_castrado"] = !!data["is_castrado"];
      data["is_testado"] = !!data["is_testado"];

      await api.patch(`/users/clientes/cats/${idCat}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
    []
  );

  const createVacinas = useCallback(async (data: any, token: string) => {
    console.log(data);
    data["is_pupies"] = !!data["is_pupies"];
    await api.post(`/users/clientes/pets/vacinas`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }, []);

  const updateVacinas = useCallback(
    async (data: any, id: number, token: string) => {
      data["is_pupies"] = !!data["is_pupies"];
      await api.patch(`/users/clientes/pets/vacinas/${id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
    []
  );

  const deleteVacinas = useCallback(async (id: number, token: string) => {
    await api.delete(`/users/clientes/pets/vacinas/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }, []);

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
        handleVacinaByIdPet,
        petsVacinas,
        vacinas,
        handleVacinaByIdCat,
        catsVacinas,
        vacinasCats,
        createVacinas,
        deleteVacinas,
        updateVacinas,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};
