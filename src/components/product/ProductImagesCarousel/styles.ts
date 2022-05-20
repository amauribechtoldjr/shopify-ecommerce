import styled from 'styled-components'
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from 'react-icons/io'

export const Container = styled.div`
  padding: 1em 2em;

  width: 100%;
  height: 100%;

  user-select: none;

  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const Image = styled.img`
  min-width: 450px;
  min-height: 450px;

  max-width: 100%;
  max-height: 100%;
`

export const IconBack = styled(IoMdArrowRoundBack)`
  cursor: pointer;
`

export const IconForward = styled(IoMdArrowRoundForward)`
  cursor: pointer;
`
