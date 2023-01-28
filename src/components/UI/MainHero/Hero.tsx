import s from './Hero.module.scss'
import { FC } from 'react'
import { Grid, LinkButton } from '@components/UI'
import Heading from '../Heading/Heading'

interface Props {
  headline?: string
  image?: {
    alt: string
    url: string
  }
}

const Hero: FC<Props> = ({
  headline = 'Pregando peças em cerâmica',
  image = { alt: 'Travessuras', url: '/images/hero-img.jpg' }
}) => {
  return (
    <section className={s.hero}>
      <Grid cols={2} extraClasses={[s['grid-box']]}>
        <div className={s['hero-img-box']}>
          <img src={image.url} alt={image.alt} className={s['hero-img']} />
        </div>
        <div className={s['headline-box']}>
          <Heading className={s['headline-text']}>
            {headline.toUpperCase()}
          </Heading>
          <LinkButton href="/produtos" className={s['hero-buy-button']}>
            COMPRAR
          </LinkButton>
          <LinkButton href="/produtos" className={s['hero-buy-button']} outline>
            TRAVESSURAS
          </LinkButton>
        </div>
      </Grid>
    </section>
  )
}

export default Hero
