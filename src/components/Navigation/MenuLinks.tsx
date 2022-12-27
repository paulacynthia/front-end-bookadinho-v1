import React from 'react';
import { Button, Flex, Link } from '@chakra-ui/react';
import { FiLogOut } from 'react-icons/fi';

export function MenuLinks() {
	function clearLocalStorage() {
		localStorage.clear();
		return (window.location.href = '/');
	}

	return (
		<Flex
			direction={'column'}
			justifyContent="space-between"
			width="full"
			gap="10rem"
		>
			<Flex direction="column" gap="1rem">
				{[
					'Home',
					'Chat',
					'Notificações',
					'Perfil',
					'Cadastrar Livro',
					'Livros Cadastrados',
				].map((item, index) => (
					<Link
						key={index}
						color="#0F241D"
						fontWeight="400"
						fontFamily="Dm Sans"
						fontSize="1rem"
						_hover={{
							color: 'orangeX.600',
							fontWeight: '700',
						}}
						href={`/${item === 'Notificações' ? 'Notificacao' : item}`
							.toLowerCase()
							.split(' ')
							.join('')}
					>
						{item}
					</Link>
				))}
			</Flex>
			<Button
				rightIcon={<FiLogOut />}
				onClick={() => clearLocalStorage()}
				colorScheme="orangeX"
				variant="outline"
			>
				Sair
			</Button>
		</Flex>
	);
}
