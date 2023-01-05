import { Box, Button, Flex, Icon, Image, Text } from "@chakra-ui/react";
import { AiOutlineUser } from "react-icons/ai";
import { Layout } from "../../layout/Bookadinho/Layout";

interface BookProps {
  id: string;
  name: string;
  author: string;
  description: string;
  photo: string;
  profile: {
    id: string;
    userName: string;
  };
}

export const getStaticPaths = async () => {
  const api = "https://back-end-bookadinho.vercel.app/home";

  const res = await fetch(`${api}`);
  const data = await res.json();

  // params
  const paths = data.result.map((books: BookProps) => {
    return {
      params: {
        bookId: books.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.bookId;

  const res = await fetch(
    `https://back-end-bookadinho.vercel.app/change_book/${id}`
  );

  const data = await res.json();
  return {
    props: {
      book: data.result[0],
    },
  };
};

export default function Livro({ book }) {
  return (
    <Layout title={book.name} titleTag={book.name}>
      <Flex flexDirection="column" maxWidth="40rem" gap="1rem" margin="0 auto">
        <Image
          fallbackSrc="https://via.placeholder.com/107x149"
          src={book.photo}
          margin="0 auto"
          maxWidth="30%"
          height="110%"
          borderRadius={"md"}
        />

        <Box maxWidth="30rem" margin="0 auto">
          <Text color="blackX.500" fontFamily={"Dm Sans"} fontWeight="normal">
            <Icon as={AiOutlineUser} marginRight="10px" />
            {book.profile.userName}
          </Text>

          <Text
            margin="2rem"
            fontFamily={"Dm Sans"}
            fontWeight="normal"
            textAlign="justify"
          >
            {book.description}
          </Text>
          <Button
            width="400px"
            display="block"
            background={"orangeX.600"}
            color="#F9F9F9"
            letterSpacing="1px"
            borderRadius={"1.25rem"}
            _hover={{
              color: "orangeX.600",
              background: "#F9E0D9",
            }}
            transition="all 0.2s"
            _active={{ backgroundColor: "orangeX.600", color: "#F9E0D9" }}
            margin="0 auto"
            onClick={() => (window.location.href = `/chat`)}
          >
            Tenho interesse!
          </Button>
        </Box>
      </Flex>
    </Layout>
  );
}
