import { Book } from "../components/Books";
import { Layout } from "../layout/Bookadinho/Layout";
import { SimpleGrid } from "@chakra-ui/react";
import { InputPattern } from "../components/Input";
import { home } from "../utils/routes/routes";
import { useEffect, useState } from "react";

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
    <Layout title="Input">
      <SimpleGrid columns={2} spacing={10}>
        {books.map((book) => (
          <Book
            key={book.id}
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
