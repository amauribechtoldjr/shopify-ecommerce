import styled from 'styled-components'

export const NavbarContainer = styled.div`
  user-select: none;
`
export const NavbarContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  padding: 2em 0.8em;
`

export const NavContainer = styled.nav`
  font-size: 16px;
`

export const NavLink = styled.a`
  & :hover {
    font-weight: 600;
    cursor: pointer;
  }

  margin: 0 0.6em;
`
