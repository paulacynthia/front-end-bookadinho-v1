import {
  Box,
  Flex,
  Input,
  Text,
  Textarea,
  Image,
  Button,
} from '@chakra-ui/react'
import { Layout } from '../layout/Bookadinho/Layout'

export default function CadastrarLivro() {
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
        >
          Publicar
        </Button>
      </Flex>
    </Layout>
  )
}
