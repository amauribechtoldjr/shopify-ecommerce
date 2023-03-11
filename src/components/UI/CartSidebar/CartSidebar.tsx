import { LineItem } from '@common/types/cart'
import { CartProduct } from '@components/product'
import { useCart } from '@framework/hooks'
import { useUI } from '@hooks'
import classNames from 'classnames'
import Link from 'next/link'
import { FC } from 'react'
import s from './CartSidebar.module.scss'
import EmptyState from './EmptyState/EmptyState'

import { MdOutlineClose } from 'react-icons/md'

const CartSidebar: FC = () => {
  const { data, isEmpty } = useCart()
  const { closeSidebar, isSidebarOpen } = useUI()

  const sidebarStyles = classNames(s['sidebar-container'], {
    [s.closed]: !isSidebarOpen
  })

  return (
    <>
      <section className={sidebarStyles}>
        {isSidebarOpen ? (
          <div className={s['content-container']}>
            <MdOutlineClose
              onClick={() => closeSidebar()}
              className={s['close-button']}
            />
            {isEmpty ? (
              <EmptyState />
            ) : (
              <>
                <div>
                  <button onClick={() => closeSidebar()}>Fechar sidebar</button>
                  <h2>My Cart</h2>
                  <ul>
                    {data?.lineItems.map((item: LineItem) => (
                      <CartProduct
                        key={item.id}
                        item={item}
                        currencyCode={data?.currency.code}
                      />
                    ))}
                  </ul>
                </div>
                <div>
                  <div>
                    <ul>
                      <li>
                        <span>Subtotal</span>
                        <span>
                          {data?.lineItemsSubTotalPrie} {data?.currency.code}
                        </span>
                      </li>
                      <li>
                        <span>Taxes</span>
                        <span>Calculated at checkout</span>
                      </li>
                      <li>
                        <span>Estimated Shipping</span>
                        <span>FREE</span>
                      </li>
                    </ul>
                    <div>
                      <span>Total</span>
                      <span>
                        {data?.totalPrice} {data?.currency.code}
                      </span>
                    </div>
                  </div>
                  <Link href="/api/checkout">Proceed to Checkout</Link>
                </div>
              </>
            )}
          </div>
        ) : null}
      </section>
    </>
  )
}

export default CartSidebar
