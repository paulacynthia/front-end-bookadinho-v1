import { Button, Flex } from "@chakra-ui/react";
import { ModalLogin } from "./ModalLogin";

export default function InitialScreenButtons() {
  return (
    <Flex gap="1.5rem">
      <Button
        backgroundColor="whiteX.600"
        color="blackX.600"
        borderRadius="8rem"
        minWidth="10rem"
        fontWeight="500"
        _hover={{
          color: "orangeX.600",
          background: "#F9E0D9",
        }}
        transition="all 0.2s"
        _active={{ backgroundColor: "orangeX.600", color: "#F9E0D9" }}
        onClick={() => (window.location.href = "/cadastro")}
      >
        Cadastrar-se
      </Button>
      <ModalLogin
        titleButton="Login"
        form={{
          titleForm: "Login",
          user: "Nome de usuário",
          placeholderUser: "Nome de usuário",
          password: "Senha",
          placeholderPassword: "Senha",
        }}
      />
    </Flex>
  );
}
