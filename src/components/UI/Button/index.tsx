import classNames from 'classnames'
import { ButtonHTMLAttributes } from 'react'
import s from './index.module.scss'

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>

interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'> {
  outline?: boolean
}

const Button = ({ children, outline = false, ...props }: ButtonProps) => {
  const buttonClassnames = classNames([s.button, { [s.outline]: outline }])

  return (
    <button {...props} className={buttonClassnames}>
      {children}
    </button>
  )
}

export default Button
