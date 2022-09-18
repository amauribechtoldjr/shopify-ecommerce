import styled from 'styled-components'

export const ProductCardContainer = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.3);
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);

  & :hover {
    cursor: pointer;
  }
`

export const Price = styled.div`
  margin: 0.6em 0.3em;

  font-weight: 600;

  color: ${({ theme }) => theme.colors.secundary};
`

export const ProductTitle = styled.span`
  font-size: 1.6em;
`

export const TitleContainer = styled.div`
  padding: 0.6em 0.3em;

  font-family: ${({ theme }) => theme.fonts.title};
`
