import { Flex, Input, SimpleGrid } from "@chakra-ui/react";
import { useState } from "react";
import { Book } from "../components/Books";
import { Layout } from "../layout/Bookadinho/Layout";

interface AllBooksProps {
  id: string;
  name: string;
  author: string;
  description: string;
  photo: string;
}

export async function getStaticProps() {
  const res = await fetch("https://back-end-bookadinho.vercel.app/home");
  const data = await res.json();

  return {
    props: {
      allBooks: data.result,
    },
  };
}

export default function Home({ allBooks }) {
  const [search, setSearch] = useState("");

  const lowerCaseSearch = search.toLowerCase();

  const filterBooks = search
    ? allBooks.filter((book: AllBooksProps) =>
        book.name.toLowerCase().includes(lowerCaseSearch)
      )
    : [];

  return (
    <Layout title="Home" titleTag={"Home"}>
      <Flex direction={"column"} gap="2rem" width="full">
        <Input
          type="text"
          placeholder="Pesquise por um livro..."
          color="blackX.500"
          fontFamily={"Dm Sans"}
          fontWeight="normal"
          onChange={(e) => setSearch(e.target.value)}
          _focusVisible={{
            outline: "none",
          }}
          _focus={{ border: "2px solid", borderColor: "orangeX.600" }}
          value={search}
          width="full"
        />
        {search ? (
          <SimpleGrid columns={2} spacing={10}>
            {filterBooks.map((book: AllBooksProps) => (
              <Book
                key={book.id}
                id={book.id}
                title={book.name}
                author={book.author}
                image={book.photo}
                imageDescription={`Livro ${book.name}`}
                description={book.description}
              />
            ))}
          </SimpleGrid>
        ) : (
          <SimpleGrid columns={2} spacing={10}>
            {allBooks.map((book: AllBooksProps) => (
              <Book
                key={book.id}
                id={book.id}
                title={book.name}
                author={book.author}
                image={book.photo}
                imageDescription={`Livro ${book.name}`}
                description={book.description}
              />
            ))}
          </SimpleGrid>
        )}
      </Flex>
    </Layout>
  );
}
