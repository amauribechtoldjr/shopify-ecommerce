import styled from 'styled-components'

export const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.text};

  min-height: 10vh;

  display: flex;
  position: relative;

  margin-top: auto;
  margin-bottom: auto;

  width: 100%;
  user-select: none;
`

export const AboutTravesssa = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const TravesssaLinksContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
