import { Genius } from '@components/icons'
import { Heading } from '@components/UI'
import { ROUTES } from '../../Navbar/Navbar'
import { FC } from 'react'
import s from './EmptyState.module.scss'
import Link from 'next/link'
import { useUI } from '@hooks'

const EmptyState: FC = () => {
  const { closeSidebar } = useUI()

  const handleCallAction = () => {
    closeSidebar()
  }

  return (
    <div className={s.container}>
      <Genius className={s.icon} extraClassname={s['icon-extra']} />
      <Heading as="h5">O Carrinho está vazio!</Heading>
      <div className={s['action-container']}>
        <Link href={ROUTES.PRODUCTS} passHref>
          <a className={s['action-link']} onClick={() => handleCallAction()}>
            Clique aqui
          </a>
        </Link>
        <span> para adicionar seu primeiro produto ao carrinho!</span>
      </div>
    </div>
  )
}

export default EmptyState
