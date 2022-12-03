import { Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react"
import React, { useEffect } from "react"

import {login} from '../routes/routes'

interface ModalLoginPros {
  titleButton: string | any
  form: object | any
}

export function ModalLogin({titleButton, form}: ModalLoginPros) {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const userName = React.useRef(null)
  const password = React.useRef(null)

  async function handleLogin() {
    console.log('handleLogin')
  }

  return (
    <>
      <Button
        backgroundColor="blackX.600"
        color="whiteX.600"
        width={[150, 250, 350, 450, 550, 650]}
        height={["2.5rem", "4rem"]}
        fontSize={["0.8rem", "1rem", "1.5rem"]}
        fontWeight="500"
        _hover={{
          backgroundColor: "orangeX.600",
          border: "1px solid #0F241D",
          color: "blackX.600",
        }}
        _active={{ backgroundColor: "whiteX.600", color: "blackX.600" }} onClick={onOpen}
      >
        {titleButton}
      </Button>
      

      <Modal
        initialFocusRef={userName}
        finalFocusRef={password}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent background="whiteX.600">
          <ModalHeader>{form.titleForm}</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel color="blackX.600">{form.user}</FormLabel>
              <Input ref={userName} letterSpacing="1px" fontWeight="400" placeholder={form.placeholderUser} _hover={{borderColor: 'blackX.600', boxShadow: '0 0 0 transparent'}} _focus={{borderColor: 'blackX.600', boxShadow: '0px 0px 5px #989B9A'}} _placeholder={{color: 'blackX.500', fontWeight: "400", fontSize: "0.9rem"}}  borderColor="blackX.500"/>
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>{form.password}</FormLabel>
              <Input ref={password} placeholder={form.placeholderPassword} letterSpacing="1px" _hover={{borderColor: 'blackX.600', boxShadow: '0 0 0 transparent'}} _focus={{borderColor: 'blackX.600', boxShadow: '0px 0px 5px #989B9A'}} _placeholder={{color: 'blackX.500', fontWeight: "400", fontSize: "0.9rem"}}  borderColor="blackX.500"/>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              backgroundColor="orangeX.600" color="whiteX.700"
              border="1px solid #0F241D"
              _hover={{ color: "blackX.600" }}
              _active={{ backgroundColor: "orangeX.600", opacity: '0.8', color: "blackX.600" }} onClick={() => handleLogin()}
            >
              Entrar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}