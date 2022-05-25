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
  useToast,
} from "@chakra-ui/react";
import { Input } from "../form/input";

import { FaCat } from "react-icons/fa";
import { BiIdCard } from "react-icons/bi";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { UseLogin } from "../../hook/login";
import { UseDashboard } from "../../hook/dashboard";
import { useParams } from "react-router-dom";
import { GiBubblingBowl } from "react-icons/gi";
import { functionDataFormated } from "../../utils";

interface PropsModal {
  isOpen: boolean;
  onClose: () => void;
  cats: any;
}

interface ClienteCpfProps {
  idCliente: string;
}

export const ModalEditCats = ({ isOpen, onClose, cats }: PropsModal) => {
  const { idCliente } = useParams<ClienteCpfProps>();
  const [value, setValue] = useState("false");
  const [value2, setValue2] = useState("false");

  const { data: user_id } = UseLogin();
  const { handleUpdatecats, getClienteByCpf } = UseDashboard();

  const [login, setLogin] = useState(false);

  const toast = useToast();

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

  const handleSubmitCats = (data: any) => {
    setLogin(true);
    handleUpdatecats(data, cats.id, user_id.token)
      .then((_) => {
        getClienteByCpf(idCliente, user_id.token);
        setLogin(false);
        onClose();
      })
      .catch((_) => {
        setLogin(false);
        toast({
          title: "Algo deu errado.",
          description: "Verifique se a data está no modo americano.",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      });
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          bgColor={"rgba(255, 194, 205,0.8)"}
          as="form"
          onSubmit={handleSubmit(handleSubmitCats)}
          w="90vw"
        >
          <ModalHeader>Editar Gatinho</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex>
              <Input
                placeholder="Digite a raça..."
                label="Raça"
                icon={GiBubblingBowl}
                {...register("raca")}
                p="10px"
                error={errors}
                defaultValue={cats.raca}
              />

              <Input
                marginLeft={"5px"}
                placeholder="Digite o nome..."
                label="Nome"
                icon={FaCat}
                {...register("nome")}
                p="10px"
                error={errors}
                defaultValue={cats.nome}
              />
            </Flex>

            <Flex>
              <Input
                label="Aniversário"
                icon={BiIdCard}
                {...register("data_nascimento")}
                p="10px"
                type={"date"}
                error={errors}
                defaultValue={functionDataFormated(cats.data_nascimento)}
              />
              <Input
                marginLeft={"5px"}
                placeholder="Digite a pelagem..."
                label="Pelagem"
                icon={FaCat}
                {...register("pelagem")}
                p="10px"
                error={errors}
                defaultValue={cats.pelagem}
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
                defaultValue={cats.is_castrado}
              >
                <Stack direction="row">
                  <Radio value="true">Sim</Radio>
                  <Radio value="false">Não</Radio>
                </Stack>
              </RadioGroup>
            </Flex>

            <Flex marginTop={"10px"} flexDir={"column"}>
              <Heading marginLeft={"10px"} fontSize={"16px"}>
                Testado:
              </Heading>
              <RadioGroup
                marginLeft={"5px"}
                marginTop={"5px"}
                value={value2}
                {...register("is_testado")}
                onChange={setValue2}
                defaultValue={cats.is_testado}
              >
                <Stack direction="row">
                  <Radio value="true">Sim</Radio>
                  <Radio value="false">Não</Radio>
                </Stack>
              </RadioGroup>
            </Flex>
          </ModalBody>

          <ModalFooter>
            <Button type="submit" colorScheme="blue" mr={3}>
              Editar Gatinho
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
