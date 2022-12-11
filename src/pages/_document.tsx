import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
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
          <meta name="theme-color" content="#E97558" />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500&family=Poppins:wght@700;800&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
