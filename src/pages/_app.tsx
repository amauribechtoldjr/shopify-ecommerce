import 'keen-slider/keen-slider.min.css'
import '../styles/globals.scss'

import { AppProps } from 'next/app'
import { Layout, UIProvider } from '@components/UI'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <UIProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UIProvider>
  )
}

export default MyApp
