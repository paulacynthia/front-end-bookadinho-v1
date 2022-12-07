import { Book } from "../components/Books";
import { SimpleGrid } from "@chakra-ui/react";
import { home } from "../utils/routes/routes";
import { useEffect, useState } from "react";
import { Layout } from "../layout/Bookadinho/Layout";

export default function Home() {
  const [books, setBooks] = useState([])

  useEffect(() => {
    const handleBooks = async () => {
      const reqBooks = await home()
      setBooks(reqBooks.result)
    }
    handleBooks()
  }, [])

  return (
    <Layout title="Home">
      <SimpleGrid columns={2} spacing={10}>
        {books.map((book) => (
          <Book
            key={book.id}
            id={book.id}
            title={book.name}
            author={book.author}
            image={book.photo}
            imageDescription={`Livro ${book.name}`}
            description={book.description}
            />
          ))
        }
      </SimpleGrid>
    </Layout>
  );
}
