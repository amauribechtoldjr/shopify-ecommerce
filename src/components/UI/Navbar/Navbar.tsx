import s from './Navbar.module.scss'
import Link from 'next/link'
import { FC } from 'react'
import { Usernav } from '@components/UI'

const Navbar: FC = () => {
  return (
    <header className={s.header}>
      <nav className={s['nav-box']}>
        <Link href="/">
          <img
            src="/icons/logoname.svg"
            alt="Logo da travesssa"
            className={s['logo-img']}
          />
        </Link>
        <div>
          <Link href="/products" passHref>
            <a className={s['nav-link']}>Produtos</a>
          </Link>
          <Link href="/products" passHref>
            <a className={s['nav-link']}>Sobre</a>
          </Link>
          <Link href="/products" passHref>
            <a className={s['nav-link']}>Coleções</a>
          </Link>
          <Link href="/products" passHref>
            <a className={s['nav-link']}>Travesssuras</a>
          </Link>
          {/* <Usernav /> */}
        </div>
      </nav>
    </header>
  )
}

export default Navbar
