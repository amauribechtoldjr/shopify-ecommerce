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

export const CartItemsQuantityContainer = styled.div`
  position: absolute;

  width: 16px;
  height: 16px;

  top: 30px;
  right: 16px;

  border-radius: 50px;
  background-color: ${({ theme }) => theme.colors.secundary};

  display: flex;

  align-items: center;
  justify-content: center;

  /* border: 1px soild #000; */
`
export const CartItemsQuantityText = styled.div`
  font-size: 10.5px;
`
