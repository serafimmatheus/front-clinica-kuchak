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
  Textarea,
} from "@chakra-ui/react";
import { Input } from "../form/input";
import { GiDogBowl } from "react-icons/gi";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { UseLogin } from "../../hook/login";
import { UseDashboard } from "../../hook/dashboard";
import { functionDataFormated } from "../../utils";

interface PropsModal {
  isOpen: boolean;
  onClose: () => void;
  pet: any;
  dog?: boolean;
  idPet: number;
}

export const ModalEditVacinas = ({
  isOpen,
  onClose,
  pet,
  dog,
  idPet,
}: PropsModal) => {
  const [value, setValue] = useState("false");

  const { data: user_id } = UseLogin();
  const { updateVacinas, handleVacinaByIdPet, handleVacinaByIdCat } =
    UseDashboard();

  const [login, setLogin] = useState(false);

  const schema = yup.object().shape({
    nome: yup.string().required("Nome obrigatório!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleSubmitDogs = (data: any) => {
    console.log(data);
    updateVacinas(data, pet.id, user_id.token)
      .then((_) => {
        setLogin(false);
        onClose();
        if (dog) {
          handleVacinaByIdPet(idPet, user_id.token);
        } else {
          handleVacinaByIdCat(idPet, user_id.token);
        }
        reset();
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
          onSubmit={handleSubmit(handleSubmitDogs)}
          w="90vw"
        >
          <ModalHeader>Editar Vacina</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input
              placeholder="Digite o nome da vacina..."
              label="Nome"
              icon={GiDogBowl}
              {...register("nome")}
              p="10px"
              error={errors}
              defaultValue={pet.nome}
            />

            <Input
              defaultValue={functionDataFormated(pet.data_aplicacao)}
              type="date"
              label="Dia da Aplicação"
              {...register("data_aplicacao")}
              p="10px"
              error={errors}
            />
            <Input
              defaultValue={functionDataFormated(pet.data_revacinacao)}
              type={"date"}
              label="Dia da Revacinação"
              {...register("data_revacinacao")}
              p="10px"
              error={errors}
            />

            <Textarea
              mt={"10px"}
              placeholder={"Descrição do pacientinho..."}
              color={"white"}
              _placeholder={{ color: "black" }}
              bgColor={"#9F3548"}
              h="100px"
              {...register("descricao")}
              defaultValue={pet.descricao}
            ></Textarea>

            <Flex marginTop={"10px"} flexDir={"column"}>
              <Heading marginLeft={"10px"} fontSize={"16px"}>
                Filhote:
              </Heading>
              <RadioGroup
                marginLeft={"5px"}
                marginTop={"5px"}
                value={value}
                {...register("is_pupies")}
                onChange={setValue}
                defaultValue={pet.is_pupies ? "true" : "false"}
              >
                <Stack direction="row">
                  <Radio value="true">Sim</Radio>
                  <Radio value="false">Não</Radio>
                </Stack>
              </RadioGroup>
            </Flex>
          </ModalBody>

          <ModalFooter>
            <Button isLoading={login} type="submit" colorScheme="blue" mr={3}>
              Editar vacina
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
