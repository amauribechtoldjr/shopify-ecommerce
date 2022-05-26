import styled from 'styled-components'

export const Container = styled.button`
  max-width: 260px;
  height: 42px;

  cursor: pointer;

  user-select: none;
  transition: 125ms;
  transition-timing-function: ease-in-out;
  border-radius: 0.4em;

  &:hover {
    background-color: ${({ theme }) => `${theme.colors.secundary}`};
  }
`
