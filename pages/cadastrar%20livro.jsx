import {
  Box,
  Flex,
  Input,
  Text,
  Textarea,
  Image,
  Button,
} from '@chakra-ui/react'
import { useRef } from 'react'
import { Layout } from '../layout/Bookadinho/Layout'
import { registerBook } from '../utils/routes/routes'

export default function CadastrarLivro() {
  const titleRf = useRef()
  const authorRf = useRef()
  const descriptionRf = useRef()
  const photoRf = useRef()

  const  postRegisterBook = async () => {
    const name = titleRf.current.value
    const author = authorRf.current.value
    const description = descriptionRf.current.value
    const photo = photoRf.current.value
    const bookRegisted = await registerBook({name, author, description, photo, profileid: '0001'})
  }


  return (
    <Layout title="Cadastrar Livro">
      <Flex flexDirection="column" maxWidth="40rem" gap="2rem" margin="0 auto">
        <Flex
          flexDirection="column"
          maxWidth="40rem"
          gap="1rem"
          margin="0 auto"
        >
          <Box maxWidth="30rem" margin="0 auto">
            <Text color="blackX.500" fontFamily={'Dm Sans'} fontWeight="normal">
              Nome do Livro
            </Text>
            <Input
              ref={titleRf}
              placeholder="Nome do Livro"
              variant="filled"
              size="lg"
              color="blackX.500"
              fontFamily={'Dm Sans'}
              fontWeight="normal"
              _placeholder={{ color: 'blackX.500' }}
              _focus={{ borderColor: 'orangeX.600' }}
            />
          </Box>
          <Box maxWidth="30rem" margin="0 auto">
            <Text color="blackX.500" fontFamily={'Dm Sans'} fontWeight="normal">
              Autor
            </Text>
            <Input
              ref={authorRf}
              placeholder="Autor"
              variant="filled"
              size="lg"
              color="blackX.500"
              fontFamily={'Dm Sans'}
              fontWeight="normal"
              _placeholder={{ color: 'blackX.500' }}
              _focus={{ borderColor: 'orangeX.600' }}
            />
          </Box>
          <Box maxWidth="30rem" margin="0 auto">
            <Text color="blackX.500" fontFamily={'Dm Sans'} fontWeight="normal">
              Descrição
            </Text>
            <Textarea
              ref={descriptionRf}
              placeholder="Descrição"
              variant="filled"
              size="lg"
              color="blackX.500"
              fontFamily={'Dm Sans'}
              fontWeight="normal"
              _placeholder={{ color: 'blackX.500' }}
              _focus={{ borderColor: 'orangeX.600' }}
            />
          </Box>
          <Box maxWidth="30rem" margin="0 auto">
            <Text color="blackX.500" fontFamily={'Dm Sans'} fontWeight="normal">
              Foto
            </Text>
            <Input
              ref={photoRf}
              placeholder="Foto"
              variant="filled"
              size="lg"
              color="blackX.500"
              fontFamily={'Dm Sans'}
              fontWeight="normal"
              _placeholder={{ color: 'blackX.500' }}
              _focus={{ borderColor: 'orangeX.600' }}
            />
          </Box>
        </Flex>
        <Button
          background={'orangeX.600'}
          color="#F9F9F9"
          letterSpacing="1px"
          borderRadius={'1.25rem'}
          _hover={{
            color: 'orangeX.600',
            background: '#F9E0D9',
          }}
          transition="all 0.2s"
          _active={{ backgroundColor: 'orangeX.600', color: '#F9E0D9' }}
          onClick={() => postRegisterBook()}
        >
          Publicar
        </Button>
      </Flex>
    </Layout>
  )
}
