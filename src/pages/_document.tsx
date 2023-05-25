import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        {/* <meta name="viewport" content="width=device-width, initial-scale=1.0" /> */}
        <link
          href={
            'https://fonts.googleapis.com/css2?family=Courier+Prime&family=Lexend+Zetta:wght@400,500;600;700;800;900&display=swap'
          }
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
