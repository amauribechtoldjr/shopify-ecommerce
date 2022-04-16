import { FC } from 'react'
import Link from 'next/link'
import * as S from './styles'

interface Props {
  headline: string
  description: string
}

const Hero: FC<Props> = ({ headline, description }) => {
  return (
    <S.HeroContainer>
      <h2>{headline}</h2>
      <div>
        <p>{description}</p>
        <Link href="#">
          <S.HeroLinkContainer>Read it here</S.HeroLinkContainer>
        </Link>
      </div>
    </S.HeroContainer>
  )
}

export default Hero
