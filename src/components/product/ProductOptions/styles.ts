import styled from 'styled-components'

interface Props {
  optionColor: string
  selected?: boolean
}

export const OptionContanier = styled.div`
  margin: 0.4em 0;
`

export const OptionItems = styled.div`
  display: flex;
`

export const OptionLabel = styled.div<Props>`
  background-color: ${({ theme, optionColor }) =>
    (optionColor === '#000000' ? '#3cfbf2' : optionColor) ||
    theme.colors.secundary};

  font-weight: bold;

  border: 1px solid;
  border-radius: 0.2em;

  height: 32px;
  width: 32px;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-left: 0.6em;

  cursor: pointer;

  &:first-child {
    margin: 0;
  }

  ${({ selected }) =>
    selected &&
    `
      border: 2px solid rgba(0,0,0, .8);
    `}

  user-select: none;
`
