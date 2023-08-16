import 'keen-slider/keen-slider.min.css'
import '../styles/globals.scss'

import { AppProps } from 'next/app'
import { Layout, UIProvider } from '@components/UI'
import Head from 'next/head'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <UIProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </UIProvider>
    </>
  )
}

export default MyApp
