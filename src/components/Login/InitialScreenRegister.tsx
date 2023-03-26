import { Flex, useMediaQuery, Text, Icon } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { phrasesAndAuthors } from "../../mocks/phrasesAndAuthors";
import InitialScreenButtons from "./InitialScreenButtons";
import { RiDoubleQuotesL } from "react-icons/ri";

export default function InitialScreenRegister() {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

  const [phrasesMoment, setPhrasesMoment] = useState("");
  const [authorMoment, setAuthorMoment] = useState("");
  const [bookMoment, setBookMoment] = useState("");

  useEffect(() => {
    let average = Math.floor(Math.random() * phrasesAndAuthors.length);
    setPhrasesMoment(phrasesAndAuthors[average].phrase);
    setBookMoment(phrasesAndAuthors[average].book);
    setAuthorMoment(phrasesAndAuthors[average].author);
  }, []);

  return (
    <Flex
      width="100%"
      height="100%"
      backgroundColor="orangeX.600"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      gap="0.5rem"
      color="whiteX.700"
      padding="2rem 0 2rem 0"
    >
      <Text
        maxWidth={!isLargerThan768 ? "20rem" : "30rem"}
        fontSize={!isLargerThan768 ? "1rem" : "1.5rem"}
        fontWeight="700"
        textAlign="center"
      >
        <Icon
          as={RiDoubleQuotesL}
          fontSize={!isLargerThan768 ? "1rem" : "1.5rem"}
        />
        {phrasesMoment}
      </Text>

      <Text
        maxWidth={!isLargerThan768 ? "15rem" : "20rem"}
        fontSize={!isLargerThan768 ? "0.8rem" : "1rem"}
        fontFamily={"Dm Sans"}
        fontWeight="normal"
        color="whiteX.600"
        textAlign="center"
      >
        {bookMoment} - {authorMoment}
      </Text>
      <Text
        as="p"
        maxWidth="22rem"
        fontSize="1.125rem"
        color="whiteX.600"
        margin={!isLargerThan768 ? "2rem 0 2rem 0" : "2.5rem 0 2rem 0"}
        textAlign="center"
      >
        Conheça o Bookadinho e dê uma nova vida para o seu livro.
      </Text>
      <InitialScreenButtons />
    </Flex>
  );
}
