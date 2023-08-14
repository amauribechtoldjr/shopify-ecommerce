import s from './index.module.scss'
import { FC } from 'react'
import Link from 'next/link'
import Container from '../Container/Container'
import Logo from '@components/icons/Logo'
import { BsInstagram } from 'react-icons/bs'

const Footer: FC = () => {
  const getCurrentYear = () => {
    return new Date().getUTCFullYear()
  }

  return (
    <footer className={s.footer}>
      <div className={s.container}>
        <div className={s['footer-grid']}>
          <div className={s['logo-box']}>
            <Link href="/" passHref>
              <Logo classes={s['logo-img']} />
            </Link>
            <p className={s.copyright}>&copy; Travesssa - {getCurrentYear()}</p>
          </div>
          <div className={s['footer-box']}>
            <p className={s['footer-heading']}>CONTATO</p>
            <address className={s['footer-box']}>
              <p className={s['street-text']}>
                Rua: Professor Anacleto Damiani, 89
              </p>
              <p>Florianópolis/SC</p>
              <p>CEP: 88020-570</p>
              <p>
                <a href="mailto:travesssuras@gmail.com">
                  travesssuras@gmail.com
                </a>
              </p>
            </address>
          </div>
          <div className={s['footer-box']}>
            <p className={s['footer-heading']}>TRAVESSSA</p>
            <div>
              <Link href="https://www.instagram.com/travesssa/" target="_blank">
                <BsInstagram className={s['media-link']} />
              </Link>
            </div>
            <Link href="/sobre" passHref className={s['footer-link']}>
              Sobre
            </Link>
            <Link href="/sobre#atelie" passHref className={s['footer-link']}>
              Ateliê
            </Link>
            <Link
              href="/sobre#bons-cuidados"
              passHref
              className={s['footer-link']}
            >
              Bons cuidados
            </Link>
            <Link
              href="/sobre#politicas-termos"
              passHref
              className={s['footer-link']}
            >
              Políticas e termos
            </Link>
          </div>
          <div className={s['footer-box']}>
            <p className={s['footer-heading']}>LOJA</p>
            <Link href="/produtos" passHref className={s['footer-link']}>
              Produtos
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
