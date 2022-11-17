import './Footer.module.scss'
import { FC } from 'react'
import Link from 'next/link'

const Footer: FC = () => {
  const getCurrentYear = () => {
    return new Date().getUTCFullYear()
  }

  return (
    <div>
      <div>@ Travesssa {getCurrentYear()}</div>
      <div>
        <Link href="/about">Sobre</Link>
        <Link href="/last-collection">Última coleção</Link>
      </div>
    </div>
  )
}

export default Footer
