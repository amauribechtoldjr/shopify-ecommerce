import styled from 'styled-components'

export const ProductCardContainer = styled.div`
  background-color: ${props => props.theme.colors.secundary};

  & :hover {
    cursor: pointer;
  }
`

export const Price = styled.div`
  margin-top: 0.6em;
`

export const TitleContainer = styled.div`
  padding: 1.4em;
`
