import styled from 'styled-components'

export const GridContainer = styled.div`
  display: grid;

  grid-template-columns: repeat(3, minmax(250px, 1fr));
  grid-gap: ${props => props.theme.margins.lg};

  @media (max-width: ${props => props.theme.screen_size.md}) {
    grid-template-columns: repeat(1, minmax(250px, 1fr));
  }
`
