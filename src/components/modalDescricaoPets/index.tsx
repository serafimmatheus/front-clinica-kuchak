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
  Textarea,
} from "@chakra-ui/react";
import { Input } from "../form/input";

import { FaCat, FaPhoneAlt, FaLocationArrow } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { BiIdCard } from "react-icons/bi";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { UseLogin } from "../../hook/login";
import { UseDashboard } from "../../hook/dashboard";
import { useParams } from "react-router-dom";
import { GiBubblingBowl } from "react-icons/gi";
import { number } from "yup/lib/locale";

interface PropsModal {
  isOpen: boolean;
  onClose: () => void;
  pet: string;
}

interface ClienteCpfProps {
  idCliente: string;
}

export const ModalDescricaoPets = ({ isOpen, onClose, pet }: PropsModal) => {
  // const { idCliente } = useParams<ClienteCpfProps>();
  // const [value, setValue] = useState("true");
  // const [value2, setValue2] = useState("true");

  // const [valueSet, setValueSet] = useState("");

  // const { data: user_id } = UseLogin();
  // const { handleUpdatecats, getClienteByCpf } = UseDashboard();

  // const [login, setLogin] = useState(false);

  // const toast = useToast();

  // const schema = yup.object().shape({
  //   nome: yup.string().required("Nome obrigatório!"),
  //   raca: yup.string().required("raca obrigatório!"),
  //   data_nascimento: yup.string().required("Campo obrigatório!"),
  //   pelagem: yup.string().required("Campo obrigatório!"),
  // });

  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm({
  //   resolver: yupResolver(schema),
  // });

  // const handleSubmitCats = (data: any) => {
  //   setLogin(true);
  //   handleUpdatecats(data, cats.id, user_id.token)
  //     .then((_) => {
  //       getClienteByCpf(idCliente, user_id.token);
  //       setLogin(false);
  //       onClose();
  //     })
  //     .catch((_) => {
  //       setLogin(false);
  //       toast({
  //         title: "Algo deu errado.",
  //         description: "Verifique se a data está no modo americano.",
  //         status: "error",
  //         duration: 9000,
  //         isClosable: true,
  //       });
  //     });
  // };

  // const newData = cats.data_nascimento.split(" ");

  // const dataFormated = newData.slice(1, 4).join("/");

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bgColor={"rgba(255, 194, 205)"} w="90vw">
          <ModalHeader>Descrição</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Textarea isDisabled placeholder="Here is a sample placeholder">
              {pet}
            </Textarea>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
