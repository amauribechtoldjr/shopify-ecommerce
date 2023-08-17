import s from './Navbar.module.scss'
import Link from 'next/link'
import Logo from '@components/icons/Logo'
import { useUI } from '@hooks'
import { Burguer, Snake } from '@components/icons'
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

const Navbar = () => {
  const { openSidebar, openBurguerMenu } = useUI()
  const { data } = useCart()

  return (
    <div className={s['navbar']}>
      <header className={s.header}>
        <Link href={ROUTES.HOME} passHref>
          <Logo classes={s['logo-img']} />
        </Link>
        <nav className={s['nav-container']}>
          <ul className={s['nav-box']}>
            <li className={s['not-mobile-navigation']}>
              <Link href={ROUTES.PRODUCTS} passHref className={s['nav-link']}>
                PRODUTOS
              </Link>
            </li>
            <li className={s['not-mobile-navigation']}>
              <Link href={ROUTES.ABOUT} passHref className={s['nav-link']}>
                SOBRE
              </Link>
            </li>
            <li>
              <div onClick={openSidebar}>
                <Snake classes={s.icons} />
                <span className={s['cart-count']}>
                  {data?.lineItems?.length}
                </span>
              </div>
            </li>
            <li className={s['burguer-when-mobile']}>
              <div onClick={() => openBurguerMenu()}>
                <Burguer classes={s.icons} />
              </div>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default Navbar
