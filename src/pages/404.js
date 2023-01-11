import { Button, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";

export default function Custom404() {
  return (
    <Flex
      justify={"center"}
      alignItems={"center"}
      height="100vh"
      gap="2rem"
      flexDirection={"column"}
    >
      <Image src="/assets/404.svg" alt="404" width="400" height="400" />
      <Text>Página não encontrada.</Text>
      <Text
        fontFamily={"Dm Sans"}
        fontWeight="normal"
        fontSize="1rem"
        maxWidth={"20rem"}
        color="blackX.400"
        textAlign={"center"}
      >
        Desculpe, nós não conseguimos encontrar a página que você está
        procurando.
      </Text>
      <Button
        onClick={() => (window.location.href = `/`)}
        variant="outline"
        colorScheme="orangeX"
        size="lg"
      >
        Voltar para a Home
      </Button>
    </Flex>
  );
}
