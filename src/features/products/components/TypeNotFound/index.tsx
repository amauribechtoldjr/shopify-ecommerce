import { Confuse } from '@components/icons'
import { Heading } from '@components/UI'
import Button from '@components/UI/Button'
import s from './index.module.scss'

interface ProductTypeNotFoundProps {
  onClick: () => void
}

const ProductTypeNotFound = ({ onClick }: ProductTypeNotFoundProps) => {
  return (
    <div className={s.container}>
      <Confuse classes={s.icon} />
      <Heading
        as="h4"
        className={s['not-fount']}
      >{`Opsss, Nenhum produto deste tipo encontrado!`}</Heading>
      <Button onClick={onClick}>Clique aqui para buscar outros produtos</Button>
    </div>
  )
}

export default ProductTypeNotFound
