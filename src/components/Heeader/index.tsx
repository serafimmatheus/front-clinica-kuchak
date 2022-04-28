import { Flex, Heading, Image, useDisclosure } from "@chakra-ui/react";
import { UseLogin } from "../../hook/login";
import { FcSearch } from "react-icons/fc";
import { FaBars } from "react-icons/fa";
import { ModalMenu } from "../modalMenu";

export const Header = () => {
  const { data } = UseLogin();

  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <>
      <ModalMenu isOpen={isOpen} onClose={onClose} />
      <Flex
        w={["100%"]}
        h={["70px"]}
        bgColor={["#9F3548"]}
        justifyContent={["space-around"]}
        padding={["10px 0"]}
      >
        <Flex w={"50%"}>
          <Image borderRadius={"100%"} src={data.user.img_url} />

          <Heading
            w={"100%"}
            color={["#f4f4f4"]}
            marginLeft={["10px"]}
            fontSize={["12px"]}
            marginTop={["10px"]}
          >
            {data.user.nome}
          </Heading>
        </Flex>

        <Flex alignItems={"center"}>
          <Flex fontSize={"30px"}>
            <FcSearch />
          </Flex>

          <Flex color={"#f4f4f4"} marginLeft={"10px"} fontSize={"30px"}>
            <FaBars onClick={onOpen} />
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};
