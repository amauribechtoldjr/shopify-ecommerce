import s from './index.module.scss'
import { FC } from 'react'
import { LinkButton } from '@components/UI'
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
  image = { alt: 'Travessuras', url: '/images/main-hero.png' }
}) => {
  return (
    <section className={s.hero}>
      <div className={s['grid-box']}>
        <div className={s['hero-img-box']}>
          <img src={image.url} alt={image.alt} className={s['hero-img']} />
        </div>
        <div className={s['title-container']}>
          <div className={s['headline-container']}>
            <Heading as="h1" className={s['headline-text']}>
              {headline.toUpperCase()}
            </Heading>
          </div>
          <LinkButton href="/produtos" className={s['hero-buy-button']}>
            COMPRAR
          </LinkButton>
        </div>
      </div>
    </section>
  )
}

export default Hero
