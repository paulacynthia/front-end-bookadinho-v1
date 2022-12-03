import { Book } from "../components/Books";
import { Layout } from "../layout/Bookadinho/Layout";
import { SimpleGrid } from "@chakra-ui/react";
import { InputPattern } from "../components/Input";

export default function Home() {
  return (
    <Layout title="Input">
      <SimpleGrid columns={2} spacing={10}>
        <Book
          title={"HARRY POTTER E A PEDRA FILOSOFAL"}
          author={"JK ROWLING"}
          image={"./assets/harryPotter.png"}
          imageDescription={"Livro do Harry Potter"}
          description={
            "Harry Potter e a Pedra Filosofal foi um livro que me tirou da monotonia e me levou para um mundo esplêndido. Hoje, com cerca de 3 leituras acredito que ele mereça encontrar um novo potterhead!"
          }
        />
        <Book
          title={"JOGADOR N°1"}
          author={"ERNEST CLINE"}
          image={"./assets/jogadorN1.png"}
          imageDescription={"Livro do Jogador N°1"}
          description={
            "Eu tinha visto primeiro o filme e tinha gostado bastante. Não sabia que existia o livro, mas quando eu li. Me apaixonei na mesma hora, foi incrível. É como se eu estivesse sentindo as mesmas emoções."
          }
        />
        <Book
          title={"RAINHA VERMELHA"}
          author={"VICTORIA AVEYARD"}
          image={"./assets/rainhaVermelha.png"}
          imageDescription={"Livro da Rainha Vermelha"}
          description={
            "No início eu estava esperando um roteiro óbvio, mas depois que li o livro inteiro, me apaixonei! A história é muito boa, a escrita é melhor ainda, recomendo muito!!"
          }
        />
        <Book
          title={"AS EXTRAORDINÁRIAS CORES DO AMANHÃ"}
          author={"Emily X. R. Pan"}
          image={"./assets/asExtraodinariasCoresDoAmanha.png"}
          imageDescription={"Livro As Extraordinárias Cores do Amanhã"}
          description={
            "Esse livro faz você chegar no fundo do poço e te tira de lá. É uma história que te faz refletir sobre a vida e sobre o que você quer para ela. É um livro que te faz chorar, rir e se emocionar."
          }
        />
      </SimpleGrid>
    </Layout>
  );
}
