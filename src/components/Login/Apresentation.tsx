import { Flex, Text, useMediaQuery } from "@chakra-ui/react";
import Image from "next/image";

export default function Apresentation() {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

  return (
    <Flex
      width="100%"
      padding="4rem 2rem 2rem"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      gap="2.5rem"
    >
      <Image
        src={"/assets/imageLogin.svg"}
        alt="Image of two people reading"
        width={250}
        height={250}
      />

      <Flex flexDirection="column" gap="1rem">
        <Text
          as="h2"
          maxWidth="25rem"
          fontSize={!isLargerThan768 ? "1.2rem" : "2rem"}
          fontWeight="700"
        >
          Dê uma nova vida para o seu livro.
        </Text>
        <Text
          as="p"
          maxWidth="25rem"
          fontSize="1rem"
          textAlign="center"
          fontFamily="Dm Sans"
          fontWeight="normal"
          color="blackX.400"
          >
          Site voltado para o compartilhamento de livros democratizando a
          leitura.
        </Text>
      </Flex>
    </Flex>
  );
}
