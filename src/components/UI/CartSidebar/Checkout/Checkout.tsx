import { Cart } from '@common/types/cart'
import ActionButton from '@components/UI/ActionButton/ActionButton'
import Heading from '@components/UI/Heading/Heading'
import Link from 'next/link'
import { FC } from 'react'
import s from './Checkout.module.scss'

interface Props {
  data: Cart
}

const Checkout: FC<Props> = ({ data }) => {
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
                {/** TODO: currency.code */}
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
              {/** TODO: verificação situação do frete, como vamos fazer. */}
              <Heading as="h4" className={s.label}>
                Frete estimado
              </Heading>
              <span className={s.value}>GRÁTIS</span>
            </li>
            <li>
              <Heading as="h3">Total</Heading>
              <span>
                {/** TODO: currency.code */}
                {data?.totalPrice} {data?.currency.code}
              </span>
            </li>
          </ul>
        </div>
        <Link href="/api/checkout">
          <ActionButton
            onClick={() => null}
            extraclasses={s['checkout-button']}
          >
            EFETUAR O PAGAMENTO
          </ActionButton>
        </Link>
      </div>
    </>
  )
}

export default Checkout
