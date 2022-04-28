import {
  Text,
  Flex,
  Wrap,
  WrapItem,
  Center,
  Box,
  useDisclosure,
} from "@chakra-ui/react";
import { Header } from "../../components/Heeader";
import imgdashboard from "../../assets/img-dashboard.svg";
import { useEffect } from "react";
import { UseDashboard } from "../../hook/dashboard";
import { UseLogin } from "../../hook/login";
import { CardsClientes } from "../../components/cardsClientes";
import { FiEdit } from "react-icons/fi";
import { FaTrash, FaUserAlt, FaWhatsapp } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { ModalEditeCliente } from "../../components/modalEditClientes";

export const Dashboard = () => {
  const { getClientesData, clientes } = UseDashboard();
  const { data } = UseLogin();
  const { isOpen, onClose, onOpen } = useDisclosure();

  useEffect(() => {
    getClientesData(data.token);
  }, []);

  return (
    <>
      <Flex
        width={["100%"]}
        h={["100vh"]}
        bgColor={["#EF8C9E"]}
        bgImage={imgdashboard}
        bgPosition="bottom"
        bgRepeat="no-repeat"
        bgSize={"100vw"}
        flexDir={"column"}
      >
        <Header />

        <Flex flexWrap={"wrap"}>
          {clientes.length > 0 ? (
            clientes.map((elem) => (
              <Flex flexWrap={"wrap"} margin={"10px auto"}>
                <ModalEditeCliente
                  isOpen={isOpen}
                  onClose={onClose}
                  cliente={elem}
                />
                <CardsClientes cliente={elem} openModal={onOpen} />
              </Flex>
            ))
          ) : (
            <Center w="100vw">
              <Flex
                marginTop={"40px"}
                justifyContent={"center"}
                alignItems={"center"}
                border={"2px dashed #f4f4f4"}
                w={["255px"]}
                h={["130px"]}
              >
                <Text
                  fontWeight={"bold"}
                  color={"#f4f4f4"}
                  textAlign={"center"}
                >
                  “ Animais são pacotinhos de amor embrulhados em pelos “
                </Text>
              </Flex>
            </Center>
          )}
        </Flex>
      </Flex>
    </>
  );
};
