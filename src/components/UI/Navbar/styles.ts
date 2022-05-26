import styled from 'styled-components'

export const NavbarContainer = styled.div`
  user-select: none;
`
export const NavbarContent = styled.div`
  padding: 2em 0;
  display: flex;
`

export const NavContainer = styled.nav`
  font-size: 16px;
`

export const LinksContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const NavLink = styled.a`
  margin-left: 0.6em;

  transition-duration: 200ms;
  transition-property: width;

  & :hover {
    font-weight: 600;
    cursor: pointer;
  }
`

export const UsernavContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: end;
`
