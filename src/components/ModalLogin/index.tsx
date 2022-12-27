import React, { useState } from 'react';
import {
	Button,
	useToast,
	FormControl,
	FormLabel,
	Input,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	useDisclosure,
	InputRightElement,
	InputGroup,
	Icon,
} from '@chakra-ui/react';
import { GrFormViewHide, GrFormView } from 'react-icons/gr';
import { login } from '../../utils/routes/routes';

interface ModalLoginPros {
	titleButton: string;
	form: {
		titleForm: string;
		user: string;
		placeholderUser: string;
		password: string;
		placeholderPassword: string;
	};
}

export function ModalLogin({ titleButton, form }: ModalLoginPros) {
	const [show, setShow] = useState(false);
	const { isOpen, onOpen, onClose } = useDisclosure();
	const errorLogin = useToast();
	const userNameRef = React.useRef(null);
	const passwordRef = React.useRef(null);

	async function handleLogin() {
		const { value: userName } = userNameRef.current;
		const { value: password } = passwordRef.current;
		const userLogin = await login({ userName, password });

		if (userLogin.status == '200' || userLogin.result?.id) {
			localStorage.setItem('profile', JSON.stringify(userLogin.result));
			return (window.location.href = '/home');
		}
		return errorLogin({
			description: 'Nome de usuário ou senha incorreta.',
			position: 'top',
			status: 'warning',
			duration: 2000,
			isClosable: true,
		});
	}

	return (
		<>
			<Button
				backgroundColor="blackX.600"
				color="whiteX.600"
				width={[150, 250, 350, 450, 550, 650]}
				height={['2.5rem', '4rem']}
				fontSize={['0.8rem', '1rem', '1.5rem']}
				fontWeight="500"
				_hover={{
					backgroundColor: 'orangeX.600',
					border: '1px solid #0F241D',
					color: 'blackX.600',
				}}
				_active={{ backgroundColor: 'whiteX.600', color: 'blackX.600' }}
				onClick={onOpen}
			>
				{titleButton}
			</Button>

			<Modal
				initialFocusRef={userNameRef}
				finalFocusRef={passwordRef}
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
							<Input
								ref={userNameRef}
								letterSpacing="1px"
								fontWeight="400"
								placeholder={form.placeholderUser}
								_hover={{
									borderColor: 'blackX.600',
									boxShadow: '0 0 0 transparent',
								}}
								_focus={{
									borderColor: 'blackX.600',
									boxShadow: '0px 0px 5px #989B9A',
								}}
								_placeholder={{
									color: 'blackX.500',
									fontWeight: '400',
									fontSize: '0.9rem',
								}}
								borderColor="blackX.500"
							/>
						</FormControl>

						<FormControl mt={4}>
							<FormLabel>{form.password}</FormLabel>
							<InputGroup size="md">
								<Input
									ref={passwordRef}
									type={show ? 'text' : 'password'}
									placeholder={form.placeholderPassword}
									letterSpacing="1px"
									_hover={{
										borderColor: 'blackX.600',
										boxShadow: '0 0 0 transparent',
									}}
									_focus={{
										borderColor: 'blackX.600',
										boxShadow: '0px 0px 5px #989B9A',
									}}
									_placeholder={{
										color: 'blackX.500',
										fontWeight: '400',
										fontSize: '0.9rem',
									}}
									borderColor="blackX.500"
								/>
								<InputRightElement width="4.5rem">
									<Button
										h="1.75rem"
										size="sm"
										onClick={() => setShow(!show)}
										background="none"
									>
										<Icon
											as={show ? GrFormViewHide : GrFormView}
											fontSize="20"
										/>
									</Button>
								</InputRightElement>
							</InputGroup>
						</FormControl>
					</ModalBody>

					<ModalFooter>
						<Button
							type="submit"
							backgroundColor="orangeX.600"
							color="whiteX.700"
							border="1px solid #0F241D"
							_hover={{ color: 'blackX.600' }}
							_active={{
								backgroundColor: 'orangeX.600',
								opacity: '0.8',
								color: 'blackX.600',
							}}
							onClick={() => handleLogin()}
						>
							Entrar
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
}
