import { useState } from 'react'
import { Product, ProductOptionValues } from '@common/types/product'
import { getVariant, SelectedOptions } from '../../utils'
import { useAddItem } from '@framework/hooks'
import Heading from '@components/UI/Heading/Heading'
import s from './index.module.scss'
import { Ghost } from '@components/icons'
import Box from '@components/icons/Box'
import Star from '@components/icons/Star'
import { useUI } from '@hooks'
import { Button } from '@components/UI'

type Props = {
  product: Product
}

const Details = ({ product }: Props) => {
  const [selectedOptions, setSelectedOptions] = useState<SelectedOptions>(null)
  const [isLoading, setLoading] = useState(false)
  const variant = getVariant(product, selectedOptions)
  // const { openSidebar } = useUI()

  const addItem = useAddItem()

  // const handleAddOption = (option: ProductOptionValues, category) => {
  //   setSelectedOptions({
  //     ...selectedOptions,
  //     [category]: option
  //   })
  // }

  const handleAddCart = async () => {
    try {
      const item = {
        variantId: variant?.id ?? product.variants[0].id,
        quantity: 1
      }
      setLoading(true)

      await addItem(item)

      setLoading(false)
    } catch {
      setLoading(false)
    }
  }

  return (
    <section className={s.container}>
      <div>
        <Heading as="h3">{product.name}</Heading>
        <p className={s['product-price']}>{`R$ ${product.price.value}`}</p>
      </div>
      <div className={s['detail-box']}>
        <Button onClick={handleAddCart} disabled={isLoading}>
          ADICIONAR AO CARRINHO
          <Ghost classes={s['ghost-icon']} />
        </Button>
      </div>
      <div className={s['detail-box']}>
        <div className={s.detail}>
          <Star classes={s['annotations-icon']} />
          <Heading as="h5" className={s['product-important-annotations']}>
            PODE IR AO MICROONDAS E LAVA-LOUÇAS!
          </Heading>
        </div>
        <div className={s.detail}>
          <Box classes={s['annotations-icon']} />
          <Heading as="h5" className={s['product-important-annotations']}>
            ENVIOS PARA TODO O BRASIL!
          </Heading>
        </div>
      </div>
      <div className={s['description-box']}>
        <div dangerouslySetInnerHTML={{ __html: product.descriptionHtml }} />
      </div>
    </section>
  )
}

export default Details
