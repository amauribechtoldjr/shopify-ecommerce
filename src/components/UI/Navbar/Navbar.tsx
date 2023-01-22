import s from './Navbar.module.scss'
import Link from 'next/link'
import { FC } from 'react'
import LinkButton from '../LinkButton/LinkButton'
// import { Usernav } from '@components/UI'

const Navbar: FC = () => {
  return (
    <header className={s.header}>
      <Link href="/">
        <img
          src="/icons/logoname.svg"
          alt="Logo da travesssa"
          className={s['logo-img']}
        />
      </Link>
      <nav className={s['nav-container']}>
        <ul className={s['nav-box']}>
          <li>
            <Link href="/products" passHref>
              <a className={s['nav-link']}>Produtos</a>
            </Link>
          </li>
          <li>
            <Link href="/products" passHref>
              <a className={s['nav-link']}>Sobre</a>
            </Link>
          </li>
          <li>
            <Link href="/products" passHref>
              <a className={s['nav-link']}>Coleções</a>
            </Link>
          </li>
          <li>
            <LinkButton href="/products" className={s['nav-link-button']}>
              Travessuras
            </LinkButton>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
