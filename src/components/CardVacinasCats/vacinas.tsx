import { Flex, Heading } from "@chakra-ui/react";
import { useState } from "react";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { UseDashboard } from "../../hook/dashboard";
import { CardVacinasCats } from "./CardVacinasCats";

export const VaciansCats = () => {
  const { vacinasCats } = UseDashboard();

  const [current, setCurrent] = useState(0);

  const vacinasLength = vacinasCats.length;

  const nextCard = () => {
    setCurrent(current === vacinasLength - 1 ? 0 : current + 1);
  };

  const backCard = () => {
    setCurrent(current === 0 ? vacinasLength - 1 : current - 1);
  };

  return (
    <Flex
      w={["90%"]}
      h="auto"
      border={"2px solid #9F3548"}
      flexDir={["column"]}
      alignItems={"center"}
      padding={"10px"}
      position={"relative"}
    >
      <Heading>Vacinas tomadas</Heading>

      <Flex>
        <Flex position={"absolute"} top={"50%"} zIndex={1} left={"-20px"}>
          <BsFillArrowLeftCircleFill size={"30px"} onClick={backCard} />
        </Flex>
        {vacinasCats.map(
          (elem, index) =>
            index === current && (
              <CardVacinasCats key={elem.id} vacina={elem} dog={false} />
            )
        )}
        <Flex position={"absolute"} top={"50%"} zIndex={1} right={"-20px"}>
          <BsFillArrowRightCircleFill
            z={"2"}
            size={"30px"}
            onClick={nextCard}
          />
        </Flex>
      </Flex>
    </Flex>
  );
};
