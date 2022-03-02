import Head from 'next/head'

import TesteSVG from '../assets/teste.svg'
import { Container } from '../styles/pages/Home'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Homepage</title>
      </Head>
      <main>
        <TesteSVG />
        <h1>Hello world</h1>
      </main>
    </Container>
  )
}

export default Home
