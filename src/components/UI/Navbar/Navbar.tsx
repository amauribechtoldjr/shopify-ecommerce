import s from './Navbar.module.scss'
import Link from 'next/link'
import { FC } from 'react'
import LinkButton from '../LinkButton/LinkButton'
import Logo from '@components/icons/Logo'
// import { Usernav } from '@components/UI'

export const ROUTES = {
  HOME: '/',
  PRODUCTS: '/produtos',
  ABOUT: '/sobre',
  COLLECTIONS: '/colecoes',
  STUDIO: '/sobre#atelie',
  GOOD_CARE: '/sobre#bons-cuidados',
  POLICIES: '/sobre/politicas-termos'
}

const Navbar: FC = () => {
  return (
    <header className={s.header}>
      <Link href={ROUTES.HOME} passHref>
        <a>
          <Logo classes={s['logo-img']} />
        </a>
      </Link>
      <nav className={s['nav-container']}>
        <ul className={s['nav-box']}>
          <li>
            <Link href={ROUTES.PRODUCTS} passHref>
              <a className={s['nav-link']}>Produtos</a>
            </Link>
          </li>
          <li>
            <Link href={ROUTES.ABOUT} passHref>
              <a className={s['nav-link']}>Sobre</a>
            </Link>
          </li>
          <li>
            <Link href={ROUTES.COLLECTIONS} passHref>
              <a className={s['nav-link']}>Coleções</a>
            </Link>
          </li>
          <li>
            <LinkButton href={ROUTES.HOME} className={s['nav-link-button']}>
              Travessuras
            </LinkButton>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
