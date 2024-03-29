import s from './LinkButton.module.scss'
import Link from 'next/link'
import { AnchorHTMLAttributes, FC, ReactNode } from 'react'
import classnames from 'classnames'

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: string | ReactNode | ReactNode[]
  outline?: boolean
}

const LinkButton: FC<Props> = ({ children, outline = false, ...props }) => {
  return (
    <Link href={props.href} passHref>
      <a
        className={classnames(s['button-link'], props.className, {
          [s.outline]: outline
        })}
      >
        {children}
      </a>
    </Link>
  )
}

export default LinkButton
