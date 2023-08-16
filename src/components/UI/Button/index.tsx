import classNames from 'classnames'
import { ButtonHTMLAttributes } from 'react'
import s from './index.module.scss'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  outline?: boolean
}

const Button = ({
  children,
  outline = false,
  className = '',
  ...props
}: ButtonProps) => {
  const buttonClassnames = classNames([
    s.button,
    {
      [s.outline]: outline,
      [className]: className !== ''
    }
  ])

  return (
    <button {...props} className={buttonClassnames}>
      {children}
    </button>
  )
}

export default Button
