import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Agrega aquí otros elementos del Head como estilos o favicon */}
        <script src="https://app.lemonsqueezy.com/js/lemon.js" defer></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
