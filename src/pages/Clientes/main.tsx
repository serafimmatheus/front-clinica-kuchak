import { Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import dogCliente from "../../assets/cliente.svg";
import { CardDogs } from "../../components/cardDogs";
import { UseDashboard } from "../../hook/dashboard";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { CardCats } from "../../components/cardCats";

export const MainClientes = ({ cliente }: any) => {
  const { cats, dogs } = UseDashboard();

  const [current, setCurrent] = useState(0);
  const [currentCat, setCurrentCat] = useState(0);

  const catsLength = cats.length;
  const dogssLength = dogs.length;

  const nextCard = () => {
    setCurrent(current === dogssLength - 1 ? 0 : current + 1);
  };

  const backCard = () => {
    setCurrent(current === 0 ? dogssLength - 1 : current - 1);
  };

  const nextCardCats = () => {
    setCurrentCat(currentCat === catsLength - 1 ? 0 : currentCat + 1);
  };

  const backCardCats = () => {
    setCurrentCat(currentCat === 0 ? catsLength - 1 : currentCat - 1);
  };

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
        w="90%"
        h="40%"
        bgColor={["rgba(239, 140, 158,0.7)"]}
        border={"2px dashed #f4f4f4"}
        textAlign="center"
        alignItems={["center"]}
        fontSize="20px"
        fontWeight={["bold"]}
        padding={["0 15px"]}
        position={"relative"}
      >
        {dogssLength > 0 ? (
          <>
            <Flex position={"absolute"} left={"-17px"} zIndex="10">
              <BsFillArrowLeftCircleFill size={"30px"} onClick={backCard} />
            </Flex>
            {dogs.map(
              (elem, index) =>
                index === current && <CardDogs key={elem.id} dogs={elem} />
            )}
            <Flex position={"absolute"} zIndex="10" right={"-15px"}>
              <BsFillArrowRightCircleFill
                z={"2"}
                size={"30px"}
                onClick={nextCard}
              />
            </Flex>
          </>
        ) : (
          <Text color={["#f4f4f4"]}>
            “ Animais são pacotinhos de amor embrulhados em pelos “
          </Text>
        )}
      </Flex>

      <Flex
        w="90%"
        h="40%"
        bgColor={["rgba(239, 140, 158,0.7)"]}
        border={"2px dashed #f4f4f4"}
        textAlign="center"
        alignItems={["center"]}
        fontSize="20px"
        fontWeight={["bold"]}
        padding={["0 15px"]}
        position={"relative"}
        marginTop="20px"
      >
        {catsLength > 0 ? (
          <>
            <Flex position={"absolute"} left={"-17px"} zIndex="10">
              <BsFillArrowLeftCircleFill size={"30px"} onClick={backCardCats} />
            </Flex>
            {cats.map(
              (elem, index) =>
                index === currentCat && <CardCats key={elem.id} cats={elem} />
            )}
            <Flex position={"absolute"} zIndex="10" right={"-15px"}>
              <BsFillArrowRightCircleFill
                z={"2"}
                size={"30px"}
                onClick={nextCardCats}
              />
            </Flex>
          </>
        ) : (
          <Text color={["#f4f4f4"]}>
            “ Animais são pacotinhos de amor embrulhados em pelos “
          </Text>
        )}
      </Flex>
    </Flex>
  );
};
