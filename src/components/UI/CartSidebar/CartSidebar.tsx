import { useCart } from '@framework/hooks'
import { useUI } from '@hooks'
import classNames from 'classnames'
import { FC } from 'react'
import s from './CartSidebar.module.scss'
import EmptyState from './EmptyState/EmptyState'

import { MdOutlineClose } from 'react-icons/md'
import ProductsList from './ProductsList/ProductsList'
import Checkout from './Checkout/Checkout'

const CartSidebar: FC = () => {
  const { data, isEmpty } = useCart()
  const { closeSidebar, isSidebarOpen } = useUI()

  const sidebarStyles = classNames(s['sidebar-container'], {
    [s.closed]: !isSidebarOpen
  })

  const modalContainerClassnames = classNames({
    [s['modal-background-container']]: isSidebarOpen
  })

  const handleCloseOutsideSidebar = () => e => {
    // closeSidebar()
  }

  return (
    <div
      className={modalContainerClassnames}
      onClick={handleCloseOutsideSidebar()}
    >
      <section className={sidebarStyles}>
        {isSidebarOpen ? (
          <div className={s['content-container']}>
            <MdOutlineClose
              onClick={() => closeSidebar()}
              className={s['close-button']}
              height={20}
              width={20}
            />
            {isEmpty ? (
              <EmptyState />
            ) : (
              <div className={s['withdata-container']}>
                <ProductsList data={data} />
                <Checkout data={data} />
              </div>
            )}
          </div>
        ) : null}
      </section>
    </div>
  )
}

export default CartSidebar
