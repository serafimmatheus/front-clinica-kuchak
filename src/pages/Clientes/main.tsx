import { Flex, Text } from "@chakra-ui/react";
import dogCliente from "../../assets/cliente.svg";
import { CardDogs } from "../../components/cardDogs";
import { UseDashboard } from "../../hook/dashboard";

export const MainClientes = ({ cliente }: any) => {
  const { cats, dogs } = UseDashboard();
  return (
    <Flex
      w="100vw"
      h="calc(100vh - 70px)"
      bgColor={"#EF8C9E"}
      bgImage={dogCliente}
      bgPosition={"bottom"}
      bgSize={"100vw"}
      bgRepeat={"no-repeat"}
      justifyContent="center"
      flexDir={["column"]}
      alignItems="center"
    >
      <Flex
        w="80%"
        h="40%"
        bgColor={["rgba(239, 140, 158,0.7)"]}
        border={"2px dashed #f4f4f4"}
        textAlign="center"
        alignItems={["center"]}
        fontSize="20px"
        fontWeight={["bold"]}
      >
        {dogs.length > 0 ? (
          dogs.map((elem) => <CardDogs key={elem.id} dogs={elem} />)
        ) : (
          <Text color={["#f4f4f4"]}>
            “ Animais são pacotinhos de amor embrulhados em pelos “
          </Text>
        )}
      </Flex>

      <Flex
        w="80%"
        h="40%"
        bgColor={["rgba(239, 140, 158,0.7)"]}
        marginTop={["20px"]}
        border={"2px dashed #f4f4f4"}
        textAlign="center"
        alignItems={["center"]}
        fontSize="20px"
        fontWeight={["bold"]}
      >
        {cats.length > 0 ? (
          <Text>Sim tem dog</Text>
        ) : (
          <Text color={["#f4f4f4"]}>
            “ Animais são pacotinhos de amor embrulhados em pelos “
          </Text>
        )}
      </Flex>
    </Flex>
  );
};
