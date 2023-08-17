import { Heading, LineDropdown } from '@components/UI'
import { useEffect, useState } from 'react'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'
import { getFirstLetterUppercase } from 'src/utils'
import { OrderDirections, OrderOptions, OrderType } from '../types'
import * as s from './index.module.scss'

function getOrderTitleByKey(key: OrderType, orderOptions: OrderOptions[]) {
  return orderOptions.find(option => option.type === key)?.title
}

export interface OrderProps {
  options: OrderOptions[]
  execOrdering: (orderType: string, direction: OrderDirections) => void
}

export function Order({ execOrdering, options }: OrderProps) {
  const [direction, setDirection] = useState<OrderDirections>('asc')
  const [type, setType] = useState<OrderType>('name')

  useEffect(() => {
    execOrdering(type, direction)
  }, [direction, type, execOrdering])

  function setInternalType(type: string) {
    setType(type as OrderType)
  }

  return (
    <div className={s['order']}>
      <Heading as="h5">Ordenar por:</Heading>
      <LineDropdown
        menu={options.map(option => ({ name: option.title, key: option.type }))}
        triggerText={
          type
            ? getFirstLetterUppercase(getOrderTitleByKey(type, options))
            : 'Todos'
        }
        onSelect={setInternalType}
      />
      {direction === 'asc' ? (
        <MdKeyboardArrowUp
          size={28}
          onClick={() =>
            setDirection(direction => (direction === 'asc' ? 'desc' : 'asc'))
          }
          className={s['order__icon']}
        />
      ) : (
        <MdKeyboardArrowDown
          size={28}
          onClick={() =>
            setDirection(direction => (direction === 'asc' ? 'desc' : 'asc'))
          }
          className={s['order__icon']}
        />
      )}
    </div>
  )
}

export default Order
