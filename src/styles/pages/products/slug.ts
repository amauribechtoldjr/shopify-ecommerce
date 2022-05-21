import styled from 'styled-components'
import Image from 'next/image'

export const Container = styled.div`
  padding: 2em;
  display: flex;
  flex-direction: row;
`

export const ImagesContainer = styled.div`
  flex: 1;
  display: flex;
  padding: 1em 2em;
`

export const DetailsContainer = styled.div`
  flex: 1;
  display: flex;
  padding: 1em 2em;
`

export const ImageContainer = styled.div`
  & > div {
    height: 100%;
    & > div {
      height: 100%;
    }
  }
`

export const StyledImage = styled(Image)`
  width: 100%;
  height: auto;
  max-height: 100%;
  object-fit: cover;
`
