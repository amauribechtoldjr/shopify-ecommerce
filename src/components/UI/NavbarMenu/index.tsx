import { useUI } from '@hooks'
import classNames from 'classnames'
import s from './index.module.scss'
import { MdOutlineClose } from 'react-icons/md'
import Link from 'next/link'
import { ROUTES } from '../Navbar/Navbar'

const NavbarMenu = () => {
  const { closeBurguerMenu, isBurguerMenuOpen } = useUI()

  const sidebarStyles = classNames(s['sidebar-container'], {
    [s.closed]: !isBurguerMenuOpen
  })

  const modalContainerClassnames = classNames({
    [s['modal-background-container']]: isBurguerMenuOpen
  })

  const handleCloseOutsideSidebar = () => console.log('fechar')

  return (
    <div
      className={modalContainerClassnames}
      onClick={handleCloseOutsideSidebar}
    >
      <section className={sidebarStyles}>
        {isBurguerMenuOpen ? (
          <div>
            <div className={s['top-close-container']}>
              <MdOutlineClose
                onClick={() => closeBurguerMenu()}
                className={s['close-button']}
                height={20}
                width={20}
              />
            </div>
            <nav className={s['nav-container']}>
              <ul className={s['nav-box']}>
                <li
                  className={s['nav-item']}
                  onClick={() => closeBurguerMenu()}
                >
                  <Link href={ROUTES.PRODUCTS} passHref>
                    <a className={s['nav-link']}>PRODUTOS</a>
                  </Link>
                </li>
                <li
                  className={s['nav-item']}
                  onClick={() => closeBurguerMenu()}
                >
                  <Link href={ROUTES.ABOUT} passHref>
                    <a className={s['nav-link']}>SOBRE</a>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        ) : null}
      </section>
    </div>
  )
}

export default NavbarMenu
