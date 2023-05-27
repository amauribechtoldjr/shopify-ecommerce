import s from './LinkButton.module.scss'
import Link from 'next/link'
import { AnchorHTMLAttributes, ReactNode } from 'react'
import classnames from 'classnames'

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: string | ReactNode | ReactNode[]
  outline?: boolean
}

const LinkButton = ({ children, outline = false, ...props }: Props) => {
  return (
    <Link href={props.href} passHref>
      <a
        className={classnames(props.className, s['button-link'], {
          [s.outline]: outline
        })}
      >
        {children}
      </a>
    </Link>
  )
}

export default LinkButton
