import { Flex } from "@chakra-ui/react";
import { CardVacinasPets } from "../../components/CardVacinasPets";
import { HeaderPets } from "../../components/HeeaderPets";
import img from "../../assets/cliente.svg";

export const Pets = () => {
  return (
    <>
      <HeaderPets />
      <Flex
        as="main"
        w={["100%"]}
        h={["calc(100vh - 70px)"]}
        padding={["10px"]}
        bg={["rgb(239, 140, 158)"]}
        bgImage={img}
        bgRepeat={["no-repeat"]}
        bgPosition={["bottom"]}
        bgSize={["100%"]}
      >
        <CardVacinasPets />
      </Flex>
    </>
  );
};
