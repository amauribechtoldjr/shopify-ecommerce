import { LoadingDots } from '@components/icons'
import { ButtonHTMLAttributes, FC, ReactNode } from 'react'
import * as S from './styles'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string | ReactNode | ReactNode[]
  isLoading?: boolean
}

const Button: FC<Props> = ({ children, isLoading = false, ...props }) => {
  const LoadingComp = () => {
    return (
      <div>
        Carregando
        <LoadingDots />
      </div>
    )
  }

  return (
    <S.Container {...props} type="button">
      {isLoading ? <LoadingComp /> : children}
    </S.Container>
  )
}

export default Button
