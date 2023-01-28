// import { CardProduct } from '@components/product'
import { getConfig } from '@framework/api/config'
import type { InferGetStaticPropsType } from 'next'
import { getAllProducts } from '@framework/database/fetchers'
import { Grid, Hero, Container } from '@components/UI'
import Head from 'next/head'
import s from './index.module.scss'
import Heading from '@components/UI/Heading/Heading'
import { FC } from 'react'

export async function getStaticProps() {
  const config = getConfig()
  const products = await getAllProducts(config)

  return {
    props: {
      products
    },
    revalidate: 4 * 60 * 60
  }
}

interface StepProps {
  renderImageFirst?: boolean
  renderImage: () => JSX.Element
  renderText: () => JSX.Element
}

const Step: FC<StepProps> = ({
  renderImageFirst = false,
  renderImage,
  renderText
}) => {
  if (renderImageFirst) {
    return (
      <>
        {renderImage()}
        {renderText()}
      </>
    )
  }

  return (
    <>
      {renderText()}
      {renderImage()}
    </>
  )
}

const StepsHero = () => {
  return (
    <section>
      <Container className={s['heading-box']}>
        <span className={s.subheading}>Como funciona?</span>
        <Heading as="h2">Criação de travessinhas e travessuras.</Heading>
      </Container>
      <Container>
        <Grid cols={2} alignCenter>
          <Step
            renderImage={() => {
              return (
                <div className={s['step-img-box']}>
                  <img
                    src="/images/peca_06.jpg"
                    className={s['step-img']}
                    alt="Imagem da peça antes de ir ao forno"
                  />
                </div>
              )
            }}
            renderText={() => {
              return (
                <div className={s['step-text-box']}>
                  <p className={s['step-number']}>01</p>
                  <Heading as="h3">Momento de travessura</Heading>
                  <p className={s.desctiption}>
                    Primeiramente todas peças são projetadas e pensadas
                    previamente, na maior parte, pensadas como uma coleção,
                    separamos o material e iniciamos o desenvolvimento das
                    peças, todas manualmente e com muito amor bla bla bla bla
                    bla bla.
                  </p>
                </div>
              )
            }}
          />
          <Step
            renderImageFirst
            renderImage={() => {
              return (
                <div className={s['step-img-box']}>
                  <img
                    src="/images/peca_04.jpg"
                    className={s['step-img']}
                    alt="Imagem da peça antes de ir ao forno"
                  />
                </div>
              )
            }}
            renderText={() => {
              return (
                <div className={s['step-text-box']}>
                  <p className={s['step-number']}>02</p>
                  <Heading as="h3">Momento de travessura</Heading>
                  <p className={s.desctiption}>
                    Primeiramente todas peças são projetadas e pensadas
                    previamente, na maior parte, pensadas como uma coleção,
                    separamos o material e iniciamos o desenvolvimento das
                    peças, todas manualmente e com muito amor bla bla bla bla
                    bla bla.
                  </p>
                </div>
              )
            }}
          />
          <Step
            renderImage={() => {
              return (
                <div className={s['step-img-box']}>
                  <img
                    src="/images/peca_07.jpg"
                    className={s['step-img']}
                    alt="Imagem da peça antes de ir ao forno"
                  />
                </div>
              )
            }}
            renderText={() => {
              return (
                <div className={s['step-text-box']}>
                  <p className={s['step-number']}>03</p>
                  <Heading as="h3">Momento de travessura</Heading>
                  <p className={s.desctiption}>
                    Primeiramente todas peças são projetadas e pensadas
                    previamente, na maior parte, pensadas como uma coleção,
                    separamos o material e iniciamos o desenvolvimento das
                    peças, todas manualmente e com muito amor bla bla bla bla
                    bla bla.
                  </p>
                </div>
              )
            }}
          />
        </Grid>
      </Container>
    </section>
  )
}

const Home = ({ products }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div>
      <Head>
        <title>Travesssa</title>
      </Head>
      <main>
        <Container className={s['hero-container']}>
          <Hero />
        </Container>
        <Container>
          <StepsHero />
        </Container>
      </main>
    </div>
  )
}

export default Home
