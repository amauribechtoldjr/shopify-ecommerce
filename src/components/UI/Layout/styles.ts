import styled from 'styled-components'

export const LayoutContainer = styled.div`
  margin: 0;
  padding: 0;

  background-color: ${props => props.theme.colors.secundary}

  max-width: 2460px;
  min-height: calc(100vh - 88px);
`
