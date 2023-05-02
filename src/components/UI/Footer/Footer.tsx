import s from './Footer.module.scss'
import { FC } from 'react'
import Link from 'next/link'
import Container from '../Container/Container'
import Grid from '../Grid/Grid'
import Logo from '@components/icons/Logo'
import { BsInstagram } from 'react-icons/bs'

const Footer: FC = () => {
  const getCurrentYear = () => {
    return new Date().getUTCFullYear()
  }

  return (
    <footer className={s.footer}>
      <Container>
        <div className={s['footer-grid']}>
          <div className={s['footer-box']}>
            <Link href="/" passHref>
              <a>
                <Logo classes={s['logo-img']} />
              </a>
            </Link>
            <p className={s.copyright}>
              Todos os direitos reservados por &copy; Travesssa -{' '}
              {getCurrentYear()}
            </p>
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
                <a target="_blank">
                  <BsInstagram className={s['media-link']} />
                </a>
              </Link>
            </div>
            <Link href="/sobre" passHref>
              <a className={s['footer-link']}>Sobre</a>
            </Link>
            <Link href="/sobre#atelie" passHref>
              <a className={s['footer-link']}>Ateliê</a>
            </Link>
            <Link href="/sobre#bons-cuidados" passHref>
              <a className={s['footer-link']}>Bons cuidados</a>
            </Link>
            <Link href="/sobre#politicas-termos" passHref>
              <a className={s['footer-link']}>Políticas e termos</a>
            </Link>
          </div>
          <div className={s['footer-box']}>
            <p className={s['footer-heading']}>LOJA</p>
            <Link href="/produtos" passHref>
              <a className={s['footer-link']}>Produtos</a>
            </Link>
            <Link href="/colecoes" passHref>
              <a className={s['footer-link']}>Coleções</a>
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
