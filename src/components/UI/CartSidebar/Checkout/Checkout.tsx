import { Cart } from '@common/types/cart'
import Button from '@components/UI/Button'
import Heading from '@components/UI/Heading/Heading'
import { useRouter } from 'next/router'
import { FC } from 'react'
import s from './Checkout.module.scss'

interface Props {
  data: Cart
}

const Checkout: FC<Props> = ({ data }) => {
  const router = useRouter()

  const handleCheckout = () => {
    router.push('/api/checkout')
  }

  return (
    <>
      <div className={s.container}>
        <div className={s['total-values-container']}>
          <ul className={s['values-list']}>
            <li>
              <Heading as="h4" className={s.label}>
                Subtotal
              </Heading>
              <span className={s.value}>
                {data?.lineItemsSubTotalPrie} {data?.currency.code}
              </span>
            </li>
            <li>
              <Heading as="h4" className={s.label}>
                Taxas
              </Heading>
              <span className={s.value}>Calculadas no pagamento</span>
            </li>
            <li>
              <Heading as="h4" className={s.label}>
                Frete estimado
              </Heading>
              <span className={s.value}>GRÁTIS</span>
            </li>
            <li>
              <Heading as="h3">Total</Heading>
              <span>
                {data?.totalPrice} {data?.currency.code}
              </span>
            </li>
          </ul>
        </div>
        <Button onClick={handleCheckout} className={s['checkout-button']}>
          FINALIZAR COMPRA
        </Button>
      </div>
    </>
  )
}

export default Checkout
