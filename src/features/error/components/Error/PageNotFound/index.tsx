import { Confuse } from '@components/icons'
import { Container, Heading, LinkButton } from '@components/UI'
import s from './index.module.scss'

function PageNotFound() {
  return (
    <Container className={s['error-container']}>
      <Confuse classes={s.icon} />
      <Heading
        as="h4"
        className={s['not-fount']}
      >{`Opsss, página não encontrada!`}</Heading>
      <LinkButton href="/" className={s.backButton}>
        Voltar para página inicial
      </LinkButton>
    </Container>
  )
}

export default PageNotFound
