import styled from 'styled-components'

export const UsernavContainer = styled.nav`
  display: flex;
`
export const UsernavUL = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: center;

  & :first-child {
    margin-right: 10px;
  }

  li:hover {
    font-weight: 600;
    cursor: pointer;
  }
`
