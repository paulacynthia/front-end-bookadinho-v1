import { Box, Button, Divider, Flex, FormControl, FormLabel, Icon, Input, InputGroup, InputRightElement, Text, Textarea, useMediaQuery, useToast } from "@chakra-ui/react";
import React, { useRef, useEffect, useState } from "react"
import { createProfile } from "../components/routes/routes";
import { GrFormViewHide, GrFormView } from "react-icons/gr";


export default function Register() {
  const [isLargerThan600] = useMediaQuery('(min-width: 600px)')
  const [show, setShow] = useState(false)
  const errorLogin = useToast()

  const nameRef = useRef(null)
  const userNameRef = useRef(null)
  const passwordRef = useRef(null)
  const photoRef = useRef(null)
  const descriptionRef = useRef(null)

  const [isNameWarning, setIsNameWarning] = useState(false)
  const [isUserNameWarning, setIUserNameWarning] = useState(false)
  const [isPasswordWarning, setIsPasswordWarning] = useState(false)

  const handleCreateProfile = async () => {
    const name = nameRef.current.value
    const userName = userNameRef.current.value
    const password = passwordRef.current.value
    const photo = photoRef.current.value
    const description = descriptionRef.current.value
   
    !name && setIsNameWarning(true)
    !userName && setIUserNameWarning(true)
    !password && setIsPasswordWarning(true)
    
    name && setIsNameWarning(false)
    userName && setIUserNameWarning(false)
    password && setIsPasswordWarning(false)
    
    if(!name || !userName || !password) {
      return errorLogin({
        description: "Alguns campos são obrigatórios!",
        position: 'top',
        status: 'warning',
        duration: 2000,
        isClosable: true,
      })
    }

    const createdProfile = await createProfile({name, userName, password, photo, description})

    if(createdProfile.message === "Nome de usuário já existente!") {
      return errorLogin({
        description: "Opa... O nome de usuário já existe!",
        position: 'top',
        status: 'warning',
        duration: 2000,
        isClosable: true,
      })
    }

    if(createdProfile.status === "200") {
      return window.location.href = "/home";
    }
  }

  return (
    <Box minH="100vh" bg="#F7F8FA">
      <Flex
        justify="center"
        alignItems="center"
        height={isLargerThan600 ? "100vh" : "auto"}
        padding="2rem"
      >
        <Flex bgColor="whiteX.700" maxWidth="100%" flexDirection="column" alignItems="flex-end" borderRadius="0.5rem">
          <Box maxWidth="100%">
            <Flex padding="1.875rem">
              <Text
              as="a"
              href="/"
              color="orangeX.600"
              fontWeight="800"
              fontSize="1.5rem"
              textAlign="center"
            >
              Bookadinho
            </Text>
            </Flex>
            <Divider borderColor="whiteX.500" />
            <FormControl padding="1.875rem" bgColor="whiteX.700">
              <Box>
                <FormLabel color="blackX.600">Nome completo</FormLabel>
                <Input ref={nameRef} letterSpacing="1px" maxWidth="100%" fontWeight="400" placeholder="Nome completo" _hover={{borderColor: 'blackX.600', boxShadow: '0 0 0 transparent'}} _focus={{borderColor: 'blackX.600', boxShadow: '0px 0px 5px #989B9A'}} _placeholder={{color: 'blackX.500', fontWeight: "400", fontSize: "0.9rem"}}  borderColor={isNameWarning ? "red" : "blackX.500"}/>
              </Box>
              
              <Flex marginTop="1rem" flexDirection={isLargerThan600 ? "row" : "column"} justifyContent="space-between" gap="1rem">
                <Box>
                  <FormLabel color="blackX.600">Nome de usuário</FormLabel>
                  <Input ref={userNameRef} maxWidth="100%" letterSpacing="1px" fontWeight="400" placeholder="Nome de usuário" _hover={{borderColor: 'blackX.600', boxShadow: '0 0 0 transparent'}} _focus={{borderColor: 'blackX.600', boxShadow: '0px 0px 5px #989B9A'}} _placeholder={{color: 'blackX.500', fontWeight: "400", fontSize: "0.9rem"}}  borderColor={isUserNameWarning ? "red" : "blackX.500"}/>
                </Box>
                <Box>
                  <FormLabel color="blackX.600">Senha</FormLabel>
                  <InputGroup>
                  <Input ref={passwordRef} type={show ? 'text' : 'password'} maxWidth="100%" letterSpacing="1px" fontWeight="400" placeholder="Senha" _hover={{borderColor: 'blackX.600', boxShadow: '0 0 0 transparent'}} _focus={{borderColor: 'blackX.600', boxShadow: '0px 0px 5px #989B9A'}} _placeholder={{color: 'blackX.500', fontWeight: "400", fontSize: "0.9rem"}}  borderColor={isPasswordWarning ? "red" : "blackX.500"}/>
                    <InputRightElement width='4.5rem'>
                      <Button h='1.75rem' size='sm' onClick={() => setShow(!show)} background="none">
                        <Icon as={show ? GrFormViewHide : GrFormView} fontSize="20"/>
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </Box>
              </Flex>

              <Box marginTop="1rem">
                <FormLabel color="blackX.600">URL da foto de perfil</FormLabel>
                <Input ref={photoRef} letterSpacing="1px" fontWeight="400" placeholder="Link da imagem" _hover={{borderColor: 'blackX.600', boxShadow: '0 0 0 transparent'}} _focus={{borderColor: 'blackX.600', boxShadow: '0px 0px 5px #989B9A'}} _placeholder={{color: 'blackX.500', fontWeight: "400", fontSize: "0.9rem"}}  borderColor="blackX.500"/>
              </Box>

              <Box marginTop="1rem">
                <FormLabel color="blackX.600">Descrição do perfil</FormLabel>
                <Textarea ref={descriptionRef} resize="none" letterSpacing="1px" height="10rem" fontWeight="400" placeholder="Descrição do perfil" _hover={{borderColor: 'blackX.600', boxShadow: '0 0 0 transparent'}} _focus={{borderColor: 'blackX.600', boxShadow: '0px 0px 5px #989B9A'}} _placeholder={{color: 'blackX.500', fontWeight: "400", fontSize: "0.9rem"}}  borderColor="blackX.500"/>
              </Box>
            </FormControl>
          </Box>

          <Button
            margin="1.875rem"
            type="submit"
            backgroundColor="orangeX.600" color="whiteX.700"
            border="1px solid #0F241D"
            _hover={{ color: "blackX.600" }}
            _active={{ backgroundColor: "orangeX.600", opacity: '0.8', color: "blackX.600" }}
            onClick={() => handleCreateProfile()}
          >
            Entrar
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
}
