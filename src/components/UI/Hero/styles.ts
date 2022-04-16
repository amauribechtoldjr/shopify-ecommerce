import styled from 'styled-components'

export const HeroContainer = styled.div`
  margin-top: ${props => props.theme.margins.md};
  background-color: ${props => props.theme.colors.primary};
`
export const HeroLinkContainer = styled.a`
  font-size: 1.4em;

  & :hover {
    cursor: pointer;
  }
`
