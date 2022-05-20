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

import { FaDog } from "react-icons/fa";
import { GiDogBowl } from "react-icons/gi";
import { BiIdCard } from "react-icons/bi";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { UseLogin } from "../../hook/login";
import { UseDashboard } from "../../hook/dashboard";
import { useParams } from "react-router-dom";

interface PropsModal {
  isOpen: boolean;
  onClose: () => void;
  dogs: any;
}

interface ClienteCpfProps {
  idCliente: string;
}

export const ModalEditDogs = ({ isOpen, onClose, dogs }: PropsModal) => {
  const { idCliente } = useParams<ClienteCpfProps>();

  const [value, setValue] = useState("false");

  const { data: user_id } = UseLogin();
  const { handleUpdateDogs, getClienteByCpf } = UseDashboard();

  const [login, setLogin] = useState(false);

  const schema = yup.object().shape({
    nome: yup.string().required("Nome obrigatório!"),
    raca: yup.string().required("raca obrigatório!"),
    data_nascimento: yup.string().required("Campo obrigatório!"),
    pelagem: yup.string().required("Campo obrigatório!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleEditDogs = (data: any) => {
    setLogin(true);
    handleUpdateDogs(data, dogs.id, user_id.token)
      .then((_) => {
        setLogin(false);
        onClose();
        getClienteByCpf(idCliente, user_id.token);
      })
      .catch((_) => {
        setLogin(false);
      });
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          bgColor={"rgba(255, 194, 205,0.8)"}
          as="form"
          onSubmit={handleSubmit(handleEditDogs)}
          w="90vw"
        >
          <ModalHeader>Editar Doguinho</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex>
              <Input
                placeholder="Digite a raça do doguinho..."
                defaultValue={dogs.raca}
                label="Raça"
                icon={GiDogBowl}
                {...register("raca")}
                p="10px"
                error={errors}
              />

              <Input
                marginLeft={"5px"}
                placeholder="Digite o nome do doguinho..."
                defaultValue={dogs.nome}
                label="Nome"
                icon={FaDog}
                {...register("nome")}
                p="10px"
                error={errors}
              />
            </Flex>

            <Flex>
              <Input
                type={"date"}
                label="Aniversário"
                icon={BiIdCard}
                {...register("data_nascimento")}
                p="10px"
                error={errors}
              />
              <Input
                marginLeft={"5px"}
                placeholder="Digite a pelagem..."
                defaultValue={dogs.pelagem}
                label="Pelagem"
                icon={FaDog}
                {...register("pelagem")}
                p="10px"
                error={errors}
              />
            </Flex>

            <Flex marginTop={"10px"} flexDir={"column"}>
              <Heading marginLeft={"10px"} fontSize={"16px"}>
                Castrado:
              </Heading>
              <RadioGroup
                marginLeft={"5px"}
                marginTop={"5px"}
                value={value}
                {...register("is_castrado")}
                onChange={setValue}
                defaultValue={dogs.is_castrado}
              >
                <Stack direction="row">
                  <Radio value={"true"}>Sim</Radio>
                  <Radio value={"false"}>Não</Radio>
                </Stack>
              </RadioGroup>
            </Flex>
          </ModalBody>

          <ModalFooter>
            <Button isLoading={login} type="submit" colorScheme="blue" mr={3}>
              Editar Doguinho
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
