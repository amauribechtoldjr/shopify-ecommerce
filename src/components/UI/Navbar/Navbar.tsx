import s from './Navbar.module.scss'
import Link from 'next/link'
import { FC } from 'react'
import Logo from '@components/icons/Logo'
import { useUI } from '@hooks'
import { Snake } from '@components/icons'
import Container from '../Container/Container'
import { useCart } from '@framework/hooks'

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
  const { openSidebar } = useUI()
  const { data } = useCart()

  return (
    <Container>
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
                <a className={s['nav-link']}>PRODUTOS</a>
              </Link>
            </li>
            <li>
              <Link href={ROUTES.ABOUT} passHref>
                <a className={s['nav-link']}>SOBRE</a>
              </Link>
            </li>
            <li>
              <div onClick={openSidebar}>
                <Snake classes={s['snake-icon']} />
                {/** TODO: substituir por quantidade de items reais */}
                <span className={s['cart-count']}>
                  {data?.lineItems?.length}
                </span>
              </div>
            </li>
          </ul>
        </nav>
      </header>
    </Container>
  )
}

export default Navbar
