import { useCallback, useContext, createContext, useState } from "react";

import { api } from "../../services/api";

interface LoginChildren {
  children: React.ReactNode;
}

interface User {
  id: number;
  nome: string;
  img_url: string;
  email: string;
}

interface AuthState {
  accessToken: string;
  user: User;
}

interface LoginProviderProps {
  data: any;
  handleLogin: (data: any) => void;
}

const LoginContext = createContext<LoginProviderProps>(
  {} as LoginProviderProps
);

export const UseLogin = () => {
  const context = useContext(LoginContext);

  if (!context) {
    throw new Error("LoginProvider must be used within as Provider");
  }

  return context;
};

export const LoginProvider = ({ children }: LoginChildren) => {
  const [data, setData] = useState<AuthState>(() => {
    const accessToken = localStorage.getItem("@token:clinica-kuchak");
    const user = localStorage.getItem("@token:clinica-kuchak");

    if (accessToken && user) {
      return { accessToken, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const handleLogin = useCallback(async (data: any) => {
    const response = await api.post("/login", data);

    console.log(response.data);
  }, []);

  return (
    <LoginContext.Provider value={{ data, handleLogin }}>
      {children}
    </LoginContext.Provider>
  );
};
