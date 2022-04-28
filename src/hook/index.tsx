import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles/theme";
import { LoginProvider } from "../hook/login";
import { DashboardProvider } from "./dashboard";

interface AppProvidersProps {
  children: React.ReactNode;
}

export const AppProvider = ({ children }: AppProvidersProps) => (
  <DashboardProvider>
    <LoginProvider>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </LoginProvider>
  </DashboardProvider>
);
