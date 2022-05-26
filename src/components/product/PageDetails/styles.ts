import styled from 'styled-components'

export const Container = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const TitlePriceContainer = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
`

export const OptionsContainer = styled.div`
  flex: 8;
  display: flex;
  flex-direction: column;
`

export const Title = styled.span`
  font-size: 2.4em;
`

export const Price = styled.span`
  font-size: 1.6em;
  padding-top: 0.4em;
`

export const Description = styled.span`
  font-size: 0.9em;
  margin-bottom: 1em;
  max-width: 500px;
`
