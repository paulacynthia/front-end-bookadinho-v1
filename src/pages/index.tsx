import { Flex, useMediaQuery } from "@chakra-ui/react";
import Head from "next/head";

import Apresentation from "../components/Login/Apresentation";
import InitialScreenRegister from "../components/Login/InitialScreenRegister";

export default function Login() {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
      </Head>
      <Flex
        backgroundColor="whiteX.600"
        justifyContent="center"
        alignItems="center"
        flexDirection={!isLargerThan768 ? "column" : "row"}
        height={!isLargerThan768 ? "none" : "100vh"}
        fontFamily="Poppins"
        fontWeight={"bold"}
        textAlign="center"
      >
        <Apresentation />
        <InitialScreenRegister />
      </Flex>
    </>
  );
}
