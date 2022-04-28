import { Text, Flex, Grid, useToast, useDisclosure } from "@chakra-ui/react";
import { Header } from "../../components/Heeader";
import imgdashboard from "../../assets/img-dashboard.svg";
import { useEffect } from "react";
import { UseDashboard } from "../../hook/dashboard";
import { UseLogin } from "../../hook/login";
import { FiEdit } from "react-icons/fi";
import { FaTrash, FaUserAlt, FaWhatsapp } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { ModalEditeCliente } from "../../components/modalEditClientes";
import { elementDragControls } from "framer-motion/types/gestures/drag/VisualElementDragControls";

export const Dashboard = () => {
  const { getClientesData, clientes, deleteOneCliente } = UseDashboard();
  const { data } = UseLogin();

  const toast = useToast();

  useEffect(() => {
    getClientesData(data.token);
  }, []);

  const handleDeleteCliente = (cpf_cliente: string) => {
    deleteOneCliente(cpf_cliente, data.token)
      .then((_) => {
        getClientesData(data.token);
      })
      .catch((_) => {
        toast({
          title: "ALgo de errado!",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      });
  };

  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <>
      <Flex
        width={["100%"]}
        h={["100vh"]}
        bgColor={["#EF8C9E"]}
        bgImage={imgdashboard}
        bgPosition="bottom"
        bgRepeat="no-repeat"
        flexDir={"column"}
      >
        <Header />

        <Flex>
          {clientes.length > 0 ? (
            clientes.map((elem) => (
              <Flex
                key={elem.cpf}
                w={"130px"}
                minH={"115px"}
                bgColor={["rgba(255, 194, 205,0.8)"]}
                margin={["10px"]}
                borderRadius={["10px"]}
                flexDirection={"column"}
                justifyContent={"space-evenly"}
              >
                <ModalEditeCliente
                  isOpen={isOpen}
                  onClose={onClose}
                  cliente={elem}
                />
                <Flex
                  w={"100%"}
                  h={"20px"}
                  justifyContent={"right"}
                  marginTop={["2px"]}
                  marginLeft={["-2px"]}
                >
                  <Flex marginRight={"5px"}>
                    <FiEdit
                      onClick={() => {
                        onOpen();
                      }}
                    />
                  </Flex>

                  <Flex>
                    <FaTrash onClick={() => handleDeleteCliente(elem.cpf)} />
                  </Flex>
                </Flex>

                <Flex w="100%" flexDir={"column"}>
                  <Flex marginTop={"5px"} w="100%" justifyContent={"center"}>
                    <FaUserAlt size={"15px"} />
                    <Text
                      wordBreak={"break-all"}
                      marginLeft={"5px"}
                      fontSize={"12px"}
                    >
                      {elem.nome}
                    </Text>
                  </Flex>

                  <Flex marginTop={"5px"} w="100%" justifyContent={"center"}>
                    <Flex marginLeft={"5px"} marginRight={"5px"}>
                      <MdOutlineMailOutline size={"15px"} />
                    </Flex>
                    <Text
                      wordBreak={"break-all"}
                      marginLeft={"5px"}
                      fontSize={"12px"}
                    >
                      {elem.email}
                    </Text>
                  </Flex>

                  <Flex marginTop={"5px"} w="100%" justifyContent={"center"}>
                    {elem.is_whatsapp ? (
                      elem.telefone
                    ) : (
                      <FaWhatsapp size={"15px"} />
                    )}

                    <Text
                      wordBreak={"break-all"}
                      marginLeft={"5px"}
                      fontSize={"12px"}
                    >
                      {elem.telefone}
                    </Text>
                  </Flex>
                </Flex>
              </Flex>
            ))
          ) : (
            <Flex
              marginTop={"40px"}
              justifyContent={"center"}
              alignItems={"center"}
              border={"2px dashed #f4f4f4"}
              w={["255px"]}
              h={["130px"]}
              marginLeft={["30px"]}
            >
              <Text fontWeight={"bold"} color={"#f4f4f4"} textAlign={"center"}>
                “ Animais são pacotinhos de amor embrulhados em pelos “
              </Text>
            </Flex>
          )}
        </Flex>
      </Flex>
    </>
  );
};
