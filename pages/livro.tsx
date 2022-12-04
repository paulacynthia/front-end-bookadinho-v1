import { Layout } from "../layout/Bookadinho/Layout";
import { changeBook } from "../utils/routes/routes";
import { useEffect, useState } from "react";
import { useRouter } from 'next/router'
import { AiOutlineUser } from "react-icons/ai";
import { Box, Flex, Spinner, Image, Text, Icon, Button } from "@chakra-ui/react";

export default function Bola() {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [books, setBooks] = useState({
    id: '',
    name: '',
    author: '',
    description: '',
    photo: '',
    profile: {
      id: '',
      userName: ''
    }
  })

  useEffect(() => {
    const getBook = async () => {
      console.log('router', router.query.id)
      const request = await changeBook({bookid: router.query.id})
      setBooks(request.result[0])
      setLoading(false)
    }
    if(router.query.id) {
      getBook()
    }
  }, [router])
  
  return (
    loading ? (
      <Flex
        alignItems="center"
        justifyContent="center"
        height="100vh"
      >
        <Spinner
          thickness='4px'
          speed='0.65s'
          emptyColor='gray.200'
          color='orangeX.600'
          size='xl'
        />
      </Flex>
    ) : (
      <Layout title={books.name}>
        <Flex flexDirection="column" maxWidth="40rem" gap="1rem" margin="0 auto">
          <Image src={books.photo} margin="0 auto" maxWidth="30%" height="110%" />

          <Box maxWidth="30rem" margin="0 auto">
            <Text color="blackX.500" fontFamily={"Dm Sans"} fontWeight="normal">
              <Icon as={AiOutlineUser} marginRight="10px"/>
              {books.profile.userName}
            </Text>

            <Text
              margin="2rem"
              fontFamily={"Dm Sans"}
              fontWeight="normal"
              textAlign="justify"
            >
              {books.description}
            </Text>

            <Button
              width="400px"
              display="block"
              background={"orangeX.600"}
              color="#F9F9F9"
              letterSpacing="1px"
              borderRadius={"1.25rem"}
              _hover={{
                color: "blackX.600",
              }}
              margin="0 auto"
              _active={{ backgroundColor: "blackX.600", color: "whiteX.600" }}
              // onClick={() => window.location.href = `/livro/?id=${id}&titulo=${title.replace(' ', '-')}`}
            >
              Tenho interesse!
            </Button>
          </Box>

        </Flex>
      </Layout>
    )
  );
}
