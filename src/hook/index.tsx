import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles/theme";
import { LoginProvider } from "../hook/login";

interface AppProvidersProps {
  children: React.ReactNode;
}

export const AppProvider = ({ children }: AppProvidersProps) => (
  <LoginProvider>
    <ChakraProvider theme={theme}>{children}</ChakraProvider>
  </LoginProvider>
);
