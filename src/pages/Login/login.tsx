import { Button, Box, Flex, Image, Heading } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import * as yup from "yup";
import { UseLogin } from "../../hook/login";
import img1 from "../../assets/img1.svg";
import { FaUserAlt } from "react-icons/fa";
import { BiLockAlt } from "react-icons/bi";
import { Input } from "../../components/form/input";

export const Login = () => {
  const { handleLogin } = UseLogin();

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

  return (
    <Box w={"100%"} bgColor="#9F3548" h="100vh" padding={["20px"]}>
      <Box
        as="form"
        onSubmit={handleSubmit(handleLogin)}
        padding="20px"
        border={["2px"]}
        borderColor="#EF8C9E"
      >
        <Heading marginBottom={["30px"]} color={["#500613"]}>
          Clinaca Kuchak
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
          marginTop={["30px"]}
        >
          <Button bg={["#500613"]} w={["100%"]} h={["40px"]} type="submit">
            Enviar
          </Button>
        </Flex>
      </Box>

      <Flex position={["relative"]} top={["-30px"]} zIndex={["1"]}>
        <Image
          src={img1}
          alt="https://i.pinimg.com/736x/ef/22/a6/ef22a632a46ca447cc98cf9aac036116.jpg"
        />
      </Flex>
    </Box>
  );
};
