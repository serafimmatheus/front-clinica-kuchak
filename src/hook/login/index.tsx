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
  token: string;
  user: User;
}

interface LoginProviderProps {
  data: any;
  handleLogin: (data: any) => Promise<void>;
  handleSignOut: () => Promise<void>;
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
    const token = localStorage.getItem("@token:clinica-kuchak");
    const user = localStorage.getItem("@user:clinica-kuchak");

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const handleLogin = useCallback(async (data: any) => {
    const response = await api.post("/login", data);

    const { token, user } = response.data;

    localStorage.setItem("@token:clinica-kuchak", token);
    localStorage.setItem("@user:clinica-kuchak", JSON.stringify(user));

    setData({ token, user });
  }, []);

  const handleSignOut = useCallback(async () => {
    localStorage.removeItem("@token:clinica-kuchak");
    localStorage.removeItem("@user:clinica-kuchak");

    setData({} as AuthState);
  }, []);

  return (
    <LoginContext.Provider value={{ data, handleLogin, handleSignOut }}>
      {children}
    </LoginContext.Provider>
  );
};
