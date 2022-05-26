import { ButtonHTMLAttributes, FC, ReactNode } from 'react'
import * as S from './styles'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string | ReactNode | ReactNode[]
}

const Button: FC<Props> = ({ children, ...props }) => {
  return (
    <S.Container {...props} type="button">
      {children}
    </S.Container>
  )
}

export default Button
