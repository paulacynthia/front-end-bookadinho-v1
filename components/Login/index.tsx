import { Box, Text, Image, useMediaQuery, Flex  } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { ModalLogin } from "../ModalLogin";

export function Login() {
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)')
  const phrases = [
    'Só se vê bem com o coração, o essencial é invisível aos olhos.',
    'Quando acordei hoje de manhã, eu sabia quem eu era, mas acho que já mudei muitas vezes desde então.',
    'As coisas têm vida própria. Tudo é questão de despertar a sua alma.',
    'Por você, faria isso mil vezes.',
    'Tudo depende do tipo de lente que você utiliza para ver as coisas.',
    'É muito raro encontrar quem veja o mesmo mundo como o seu.',
    'Quando os pés estão corretos, todo o resto nos acompanha.',
    'Amor não é coisa que se possa pedir a alguém.',
    'Sentir é estar distraído.',
    'É feia. Mas é uma flor. Furou o asfalto, o tédio, o nojo e o ódio.',
    'Esse é o problema da dor. Ela precisa ser sentida.',
    'Tudo o que temos de decidir é o que fazer com o tempo que nos é dado.'
  ]

  const [phrasesMoment, setPhrasesMoment] = useState('')
  useEffect(() => {
    setPhrasesMoment(phrases[Math.floor(Math.random() * phrases.length)])
  }, [])
  
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      height="100vh"
      flexDirection={!isLargerThan768  ? "column" : "row"}
      textAlign="center"
      fontFamily="Poppins"
      fontWeight={"bold"}
      overflowY="hidden"
      backgroundColor="whiteX.600"
    >
      <Box width="100%" padding={!isLargerThan768 && "2rem"} >
        <Flex
          maxWidth="full"
          justify="center"
          align="center"
          flexDirection="column"
          gap="2.5rem"
        >
          <Image
            src={"/assets/imageLogin.svg"}
            alt="Image of two people reading"
            margin="0 auto"
            width="50%"
          />
          <Flex flexDirection="column" gap="1rem">
            <Text as="h2" fontWeight="700" maxWidth="25rem" fontSize={!isLargerThan768 ? "1.2rem" : "2rem"}>
              Dê uma nova vida <br />
              para o seu livro.
            </Text>
            <Text
              as="p"
              maxWidth="25rem"
              fontSize="1rem"
              textAlign="center"
              fontFamily="Dm Sans"
              fontWeight="normal"
            >
              Site voltado para o compartilhamento de livros democratizando a
              leitura.
            </Text>
          </Flex>
        </Flex>
      </Box>

      <Box
        backgroundColor="orangeX.600"
        color="whiteX.700"
        height="100%"
        width="100%"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        padding="2rem"
      >
        <Text as="h1" maxWidth="25rem" fontSize={!isLargerThan768 ? "1rem" : "2rem"} fontWeight="700">
          {phrasesMoment}
        </Text>
        <Text as="p" color="whiteX.600" fontSize="1.125rem" margin={!isLargerThan768 ? "1rem 0 1rem 0" : "2.5rem 0 5rem 0"} maxWidth="22rem">
          Conheça o Bookadinho e dê uma nova vida para o seu livro.
        </Text>
        <Button
          backgroundColor="whiteX.600"
          color="blackX.600"
          width={[150, 250, 350, 450, 550, 650]}
          height={["2.5rem", "4rem"]}
          fontSize={["0.8rem", "1rem", "1.5rem"]}
          fontWeight="500"
          _hover={{
            backgroundColor: "orangeX.600",
            border: "1px solid #fff",
            color: "whiteX.700",
          }}
          marginBottom="2rem"
          _active={{ backgroundColor: "whiteX.700", color: "blackX.600" }}
          onClick={() => {
            window.location.href = "/home";
          }}
        >
          Cadastrar-se
        </Button>
        <ModalLogin titleButton="Login" form={{titleForm: "Login", user: "Nome de usuário", placeholderUser: "Nome de usuário", password: "Senha", placeholderPassword: "Senha"}}/>

      </Box>
    </Flex>
  );
}
