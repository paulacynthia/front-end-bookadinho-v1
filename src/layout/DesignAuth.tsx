import {
  Flex,
  Grid,
  GridItem, Text,
  useMediaQuery
} from "@chakra-ui/react";
import Image from "next/image";
import InitialScreenRegister from "../components/Login/InitialScreenRegister";

export function DesignAuth() {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

  return (
    <Grid
      templateColumns={{
        md: "repeat(1, 1fr)",
        lg: "repeat(4, 1fr)",
      }}
      width="100vw"
      height="100vh"
    >
      <GridItem
        width={"full"}
        colSpan={2}
        justifyContent="center"
        height={"100vh"}
        display={{ base: "none", lg: "block" }}

      >
        <Flex
          align="center"
          justifyContent={"center"}
          direction={"column"}
          h="100vh"
          padding={20}
        >
          <Flex width={"full"} direction={"column"} align="center" gap="2rem">
            <Image
              src={"/assets/imageLogin.svg"}
              alt="Image of two people reading"
              width={250}
              height={250}
            />
              <Text
                as="h2"
                maxWidth="25rem"
                fontSize={!isLargerThan768 ? "1.2rem" : "2rem"}
                fontWeight="700"
                textAlign="center"
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
      </GridItem>

      <GridItem colSpan={2} width={"full"} bgColor={"orangeX.600"} >
        <InitialScreenRegister/>
      </GridItem>
    </Grid>
  );
}
