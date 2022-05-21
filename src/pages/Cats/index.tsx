import { Flex } from "@chakra-ui/react";
import { CardVacinasCats } from "../../components/CardVacinasCats";
import { HeaderPets } from "../../components/HeeaderPets";
import img from "../../assets/cliente.svg";

export const Cats = () => {
  return (
    <>
      <HeaderPets />
      <Flex
        as="main"
        w={["100%"]}
        h={["auto"]}
        padding={["10px"]}
        bg={["rgb(239, 140, 158)"]}
        bgImage={img}
        bgRepeat={["no-repeat"]}
        bgPosition={["bottom"]}
        bgSize={["100%"]}
      >
        <CardVacinasCats />
      </Flex>
    </>
  );
};
