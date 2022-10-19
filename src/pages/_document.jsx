import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import Header from "../components/header";

const document = () => {
  return (
    <Html lang="pt">
      <Head>
        <meta name="description" content="Correio Elegante CTPM-Uberlândia" />

        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Lovers+Quarrel&family=Raleway:ital,wght@0,300;0,400;0,700;1,300&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Header />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default document;
