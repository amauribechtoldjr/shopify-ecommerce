import { FC } from 'react'
import * as S from './styles'

const LoadingDots: FC = props => {
  return <S.Dots>{props.children}</S.Dots>
}

export default LoadingDots
