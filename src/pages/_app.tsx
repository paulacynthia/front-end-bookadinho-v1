import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import { theme } from '../styles/theme';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<meta charSet="UTF-8" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta name="description" content="Bookadinho" />
				<meta
					name="author"
					content="Site feito por Felipe Gomes e Paula Cynthia"
				/>
				<meta name="keywords" content="leitura" />

				<link rel="alternate" href="" hrefLang="pt-br" />
				<meta name="robots" content="index, follow" />

				<meta
					name="viewport"
					content="width=device-width, initial-scale=1, maximum-scale=1"
				/>
				<meta property="og:url" content="URL" />
				<meta property="og:title" content="Bookadinho" />
				<meta property="og:image" content="/assets/imageLogin.svg" />
				<meta
					property="og:description"
					content="Site voltado para o compartilhamento de livros democratizando a leitura."
				/>
				<title>{'Bookadinho'}</title>
				<meta name="theme-color" content="#E97558" />
			</Head>

			<ChakraProvider theme={theme}>
				<Component {...pageProps} />
			</ChakraProvider>
		</>
	);
}

export default MyApp;
