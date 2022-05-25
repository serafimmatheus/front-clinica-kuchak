import { Button, Box, Flex, Heading, useToast } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { UseLogin } from "../../hook/login";
import img3 from "../../assets/img3.svg";
import { FaUserAlt } from "react-icons/fa";
import { BiLockAlt } from "react-icons/bi";
import { Input } from "../../components/form/input";
import { useHistory } from "react-router-dom";
import { useState } from "react";

export const Login = () => {
  const { handleLogin } = UseLogin();

  const [isLoading, setIsLoading] = useState(false);

  const toast = useToast();

  const history = useHistory();

  const schema = yup.object().shape({
    email: yup.string().required("Email obrigatório").email("Email inválido"),
    password: yup.string().required("Senha obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const login = (data: any) => {
    setIsLoading(true);
    handleLogin(data)
      .then((_) => {
        toast({
          title: "Logando...",
          description: "Você esta logando",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
        setIsLoading(false);

        history.push("/dashboard");
      })
      .catch((_) => {
        toast({
          title: "Login ou Senha Inválidos",
          description: "Verifique seu login e senha",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
        setIsLoading(false);
      });
  };

  return (
    <Box
      w={"100%"}
      bgImage={img3}
      bgRepeat={"no-repeat"}
      bgPosition={"bottom"}
      bgColor="#9F3548"
      h="100vh"
      padding={["20px"]}
      bgSize={["100%", "50%", "40%", "30%"]}
    >
      <Box
        as="form"
        onSubmit={handleSubmit(login)}
        padding="20px"
        border={["2px"]}
        borderColor="#EF8C9E"
        w={["100%", "100%", "50%", "40%", "400px"]}
        position={["relative"]}
        left={["50%"]}
        transform={"translateX(-50%)"}
      >
        <Heading marginBottom={["30px"]} color={["#500613"]}>
          Clinica Kuchak
        </Heading>

        <Flex>
          <Input
            placeholder="Digite seu Email"
            icon={FaUserAlt}
            {...register("email")}
            label="Email"
            type="email"
            error={errors.email}
          />
        </Flex>

        <Flex marginTop={["10px"]}>
          <Input
            placeholder="Digite sua Senha"
            icon={BiLockAlt}
            {...register("password")}
            label="Senha"
            type="password"
            error={errors.password}
          />
        </Flex>

        <Flex
          w={["100%"]}
          display={["flex"]}
          justifyContent="center"
          alignItems={"center"}
          shadow={["20px"]}
          marginTop={["30px"]}
        >
          <Button
            isLoading={isLoading}
            color={["#f4f4f4"]}
            bg={["#d87184"]}
            w={["100%"]}
            h={["40px"]}
            type="submit"
          >
            Enviar
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};
