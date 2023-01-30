import { FC } from 'react'
import Container from '../Container/Container'
import Grid from '../Grid/Grid'
import Heading from '../Heading/Heading'
import s from './StepsHero.module.scss'

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

const StepsHero: FC = () => {
  return (
    <section className={s['steps-hero-section']}>
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

export default StepsHero
