import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import { Layout, UIProvider } from '@components/UI'

import GlobalStyle from '../styles/global'
import theme from '../styles/theme'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <UIProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <GlobalStyle />
      </UIProvider>
    </ThemeProvider>
  )
}

export default MyApp
