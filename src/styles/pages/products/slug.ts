import styled from 'styled-components'
import Image from 'next/image'

export const Container = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: flex-start;
  grid-gap: 8px;
  overflow-x: hidden;
`
export const ImagesContainer = styled.div`
  position: relative;
  display: flex;
  padding: 0;
  box-sizing: border-box;
  grid-column: span 1;
  min-height: 600px;
`

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  grid-column: span 1;
  margin: auto 0;
  width: 100%;
  height: 100%;
`

export const ImageContainer = styled.div`
  max-width: 700px;
  max-height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;

  & > div {
    height: 100%;

    & > div {
      height: 100%;
    }
  }
`

export const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
  max-height: 100%;
  object-fit: cover;
`
