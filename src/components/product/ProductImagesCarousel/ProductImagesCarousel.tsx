import React, { FC, Children, isValidElement } from 'react'
import * as S from './styles'

const ProductImagesCarousel: FC = ({ children }) => {
  return (
    <S.Container>
      <div className="keen-slider">
        {Children.map(children, child => {
          if (isValidElement(child)) {
            return {
              ...child,
              props: {
                ...child.props,
                className: 'keen-slider__slide'
              }
            }
          }

          return child
        })}
      </div>
    </S.Container>
  )
}

export default ProductImagesCarousel
