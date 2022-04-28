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

interface ClienteProps {
  cpf: string;
  nome: string;
  email: string;
  telefone: string;
  endereco: string;
  is_whatsapp?: boolean;
}

interface PropsModal {
  isOpen: boolean;
  onClose: () => void;
  cliente: ClienteProps;
}

export const ModalEditeCliente = ({ isOpen, onClose, cliente }: PropsModal) => {
  const [value, setValue] = useState("true");

  const { editeClientes, getClientesData } = UseDashboard();

  const { data: user_id } = UseLogin();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSubmitClientes = (data: any) => {
    editeClientes(data, cliente.cpf, user_id.token).then((_) => {
      getClientesData(user_id.token);
      onClose();
    });
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          bgColor={"rgba(255, 194, 205,0.8)"}
          as="form"
          onSubmit={handleSubmit(handleSubmitClientes)}
          w="90vw"
        >
          <ModalHeader>Editar cliente</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex>
              <Input
                placeholder="Digite o nome completo..."
                label="Nome"
                icon={FaUserAlt}
                {...register("nome")}
                padding={["10px"]}
              />
              <Input
                marginLeft={"5px"}
                placeholder="Digite o email..."
                label="Email"
                icon={FiMail}
                {...register("email")}
                padding={["10px"]}
              />
            </Flex>

            <Flex>
              <Input
                placeholder="Digite o CPF..."
                label="CPF"
                icon={BiIdCard}
                {...register("cpf")}
                padding={["10px"]}
              />

              <Input
                marginLeft={"5px"}
                placeholder="Digite o telefone..."
                label="Telefone"
                icon={FaPhoneAlt}
                {...register("telefone")}
                padding={["10px"]}
              />
            </Flex>

            <Input
              placeholder="Digite o endereço completo..."
              label="Endereço"
              icon={FaLocationArrow}
              {...register("endereco")}
              padding={["10px"]}
              w="calc(100% + 5px)"
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
