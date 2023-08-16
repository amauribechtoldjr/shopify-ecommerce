import { Confuse } from '@components/icons'
import { Container, Heading, LinkButton } from '@components/UI'
import s from './index.module.scss'

function ProductNotFound() {
  return (
    <Container className={s['error-container']}>
      <Confuse classes={s.icon} />
      <Heading
        as="h4"
        className={s['not-fount']}
      >{`Opsss, produto não encontrado!`}</Heading>
      <LinkButton href="/produtos" className={s.backButton}>
        Voltar para a página de produtos
      </LinkButton>
    </Container>
  )
}

export default ProductNotFound
