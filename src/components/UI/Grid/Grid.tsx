import { FC } from 'react'
import * as S from './styles'

const Grid: FC = ({ children }) => {
  return <S.GridContainer>{children}</S.GridContainer>
}

export default Grid
