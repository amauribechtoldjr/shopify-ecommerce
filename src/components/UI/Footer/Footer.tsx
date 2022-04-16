import { FC } from 'react'
import Link from 'next/link'
import * as S from './styles'

const Footer: FC = () => {
  const getCurrentYear = () => {
    return new Date().getUTCFullYear()
  }

  return (
    <S.FooterContainer>
      <S.AboutTravesssa>@ Travesssa {getCurrentYear()}</S.AboutTravesssa>
      <S.TravesssaLinksContainer>
        <Link href="/about">Sobre</Link>
        <Link href="/last-collection">Última coleção</Link>
      </S.TravesssaLinksContainer>
    </S.FooterContainer>
  )
}

export default Footer
