import styled from 'styled-components'

export const ProductCardContainer = styled.div`
  background-color: ${props => props.theme.colors.secundary};

  &:hover {
    cursor: pointer;
  }
`
