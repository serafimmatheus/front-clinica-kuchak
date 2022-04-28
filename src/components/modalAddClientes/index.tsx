import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Flex,
  RadioGroup,
  Stack,
  Radio,
  Heading,
} from "@chakra-ui/react";
import { Input } from "../form/input";

import { FaUserAlt, FaPhoneAlt, FaLocationArrow } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { BiIdCard } from "react-icons/bi";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { UseLogin } from "../../hook/login";
import { UseDashboard } from "../../hook/dashboard";

interface PropsModal {
  isOpen: boolean;
  onClose: () => void;
}

export const ModalAddCliente = ({ isOpen, onClose }: PropsModal) => {
  const [value, setValue] = useState("true");

  const { createClientes, getClientesData } = UseDashboard();

  const { data: user_id } = UseLogin();

  const schema = yup.object().shape({
    nome: yup.string().required("Nome obrigatório!"),
    email: yup.string().required("Email obrigatório!").email("Email inválido!"),
    cpf: yup.string().required("CPF obrigatório!"),
    telefone: yup.string().required("Telefone obrigatório!"),
    endereco: yup.string().required("Endereço obrigatório!"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleSubmitClientes = (data: any) => {
    createClientes(data, user_id.token).then((_) => {
      getClientesData(user_id.token);
      onClose();
    });
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent as="form" onSubmit={handleSubmit(handleSubmitClientes)}>
          <ModalHeader>Adiconar cliente</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input
              placeholder="Digite o nome completo..."
              label="Nome"
              icon={FaUserAlt}
              {...register("nome")}
            />

            <Input
              placeholder="Digite o email..."
              label="Email"
              icon={FiMail}
              {...register("email")}
            />
            <Input
              placeholder="Digite o CPF..."
              label="CPF"
              icon={BiIdCard}
              {...register("cpf")}
            />
            <Input
              placeholder="Digite o telefone..."
              label="Telefone"
              icon={FaPhoneAlt}
              {...register("telefone")}
            />
            <Input
              placeholder="Digite o endereço completo..."
              label="Endereço"
              icon={FaLocationArrow}
              {...register("endereco")}
            />
            <Flex marginTop={"10px"} flexDir={"column"}>
              <Heading marginLeft={"10px"} fontSize={"16px"}>
                WhatsApp:
              </Heading>
              <RadioGroup
                marginLeft={"5px"}
                marginTop={"5px"}
                value={value}
                {...register("is_whatsapp")}
                onChange={setValue}
              >
                <Stack direction="row">
                  <Radio value="True">Sim</Radio>
                  <Radio value="False">Não</Radio>
                </Stack>
              </RadioGroup>
            </Flex>
          </ModalBody>

          <ModalFooter>
            <Button type="submit" colorScheme="blue" mr={3}>
              Adicionar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
