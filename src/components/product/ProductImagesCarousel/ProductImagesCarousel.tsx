import { ProductImage } from '@common/types/product'
import React, { useState } from 'react'

import * as S from './styles'

type Props = {
  images: ProductImage[]
}

const ProductImagesCarousel: React.FC<Props> = ({ images }) => {
  const [imageIndex, setImageIndex] = useState(0)

  const next = () => {
    setImageIndex(state => (state += 1))
    if (imageIndex === images.length - 1) setImageIndex(0)
  }

  const prev = () => {
    setImageIndex(state => (state -= 1))
    if (imageIndex === 0) setImageIndex(images.length - 1)
  }

  return (
    <S.Container>
      <S.IconBack onClick={prev} size="24" />
      <S.Image src={images[imageIndex].url} alt={images[imageIndex].alt} />
      <S.IconForward onClick={next} size="24" />
    </S.Container>
  )
}

export default ProductImagesCarousel
