import { Flex, Link } from "@chakra-ui/react";

export function MenuLinks() {
  return (
    <Flex direction="column" gap="1rem">
      {[
        "Home",
        "Chat",
        "Maps",
        "Notificações",
        "Perfil",
        "Cadastrar Livro",
        "Livros Cadastrados",
        "Salvos",
      ].map((item, index) => (
        <Link
          key={index}
          color="#0F241D"
          fontWeight="400"
          fontFamily="Dm Sans"
          fontSize="1rem"
          _hover={{
            color: "orangeX.600",
            fontWeight: "700",
          }}
          href={`/${item}`.toLowerCase()}
        >
          {item}
        </Link>
      ))}
    </Flex>
  );
}
