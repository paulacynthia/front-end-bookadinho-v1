import React from 'react';
import { Book } from '../components/Books';
import { Flex, Input, SimpleGrid } from '@chakra-ui/react';
import { home } from '../utils/routes/routes';
import { useEffect, useState } from 'react';
import { Layout } from '../layout/Bookadinho/Layout';

export default function Home() {
	const [books, setBooks] = useState([]);
	const [search, setSearch] = useState('');

	const lowerCaseSearch = search.toLowerCase();

	const filterBooks = search
		? books.filter((book) => book.name.toLowerCase().includes(lowerCaseSearch))
		: [];

	useEffect(() => {
		const handleBooks = async () => {
			const reqBooks = await home();
			setBooks(reqBooks.result);
		};
		handleBooks();
	}, []);

	return (
		<Layout title="Home" titleTag={'Home'}>
			<Flex direction={'column'} gap="2rem" width="full">
				<Input
					type="text"
					placeholder="Pesquise por um livro..."
					color="blackX.500"
					fontFamily={'Dm Sans'}
					fontWeight="normal"
					onChange={(e) => setSearch(e.target.value)}
					_focusVisible={{
						outline: 'none',
					}}
					_focus={{ border: '2px solid', borderColor: 'orangeX.600' }}
					value={search}
					width="full"
				/>
				{search ? (
					<SimpleGrid columns={2} spacing={10}>
						{filterBooks.map((book) => (
							<Book
								key={book.id}
								id={book.id}
								title={book.name}
								author={book.author}
								image={book.photo}
								imageDescription={`Livro ${book.name}`}
								description={book.description}
							/>
						))}
					</SimpleGrid>
				) : (
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
						))}
					</SimpleGrid>
				)}
			</Flex>
		</Layout>
	);
}
