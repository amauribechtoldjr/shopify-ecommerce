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
        <Heading as="h2">Criação de travessinhas e travessuras</Heading>
      </Container>
      <Container>
        <div className={s['stepshero-grid']}>
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
                  <Heading as="h3">PREGANDO PEÇAS 👻 EM CERÂMICA</Heading>
                  <p className={s.desctiption}>
                    Nesta primeira etapa, eu mergulho na minha mente caótica e
                    dou vida aos conceitos das peças. Moldo a argila, dando
                    forma e propósito a cada uma delas, enquanto questiono se
                    estou construindo uma obra-prima ou apenas alimentando meu
                    vício por sujeira, para depois me preocupar com meu
                    perfeccionismo compulsivo por limpeza. Atualmente crio
                    principalmente com as técnicas de placa, torno e acordelado.
                    Depois de modelar, é esperar, até as peças estar em ponto de
                    couro para dar acabamento. Essa etapa mais longa do processo
                    durando mais ou menos 45 dias.
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
                  <Heading as="h3">FEITA COM CALOR ❤️‍🔥</Heading>
                  <p className={s.desctiption}>
                    A segunda etapa é dedicada aos detalhes que fazem a
                    diferença. Após a secagem de todas as peças e da primeira
                    queima, aplico esmaltes que realçam a cor e a textura da
                    cerâmica. Então, as peças vão para a segunda queima no
                    forno. É como se elas passassem por uma prova de fogo para
                    amadurecerem e se tornarem peças resistentes. Essa etapa
                    dura cerca de 15 dias.
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
                  <Heading as="h3">TRAVESSSURAS & GOSTOSURAS 😈</Heading>
                  <p className={s.desctiption}>
                    Na última etapa, tiro o meu chapéu de ceramista e coloco o
                    de fotógrafa. Registro minhas criações em todo o seu
                    esplendor para exibi-las em um site ou catálogo. Depois
                    disso, é hora de mostrar ao mundo! Promovo minhas peças nas
                    redes sociais, participo de feiras de arte e realizo vendas
                    diretas. E quando uma peça é vendida, é com todo o cuidado e
                    carinho que a embalo e envio para o seu novo lar. Essa
                    última etapa dura cerca de 15 dias.
                  </p>
                </div>
              )
            }}
          />
        </div>
      </Container>
    </section>
  )
}

export default StepsHero
