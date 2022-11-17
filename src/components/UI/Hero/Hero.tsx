import s from './Hero.module.scss'
import { FC } from 'react'
import { LinkButton } from '@components/UI'

interface Props {
  headline?: string
  image?: {
    alt: string
    url: string
  }
}

const Hero: FC<Props> = ({
  headline = 'Olhe para os dois lados antes de atravesssar',
  image = { alt: 'Travessuras', url: '/images/hero-img.jpg' }
}) => {
  return (
    <section className={s.hero}>
      <div className={s['grid-box']}>
        <div className={s['headline-box']}>
          <h1 className={s['headline-text']}>{headline.toUpperCase()}</h1>
          <LinkButton href="/produtos" className={s['hero-buy-button']}>
            COMPRAR
          </LinkButton>
          <LinkButton href="/produtos" className={s['hero-buy-button']} outline>
            TRAVESSURAS
          </LinkButton>
        </div>
        <div className={s['hero-img-box']}>
          <img src={image.url} alt={image.alt} className={s['hero-img']} />
        </div>
      </div>
    </section>
  )
}

export default Hero
