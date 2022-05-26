import { FC, Children, isValidElement, useState } from 'react'
import { useKeenSlider } from 'keen-slider/react'
import * as S from './styles'

const ProductImagesCarousel: FC = ({ children }) => {
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(s) {
      console.log(s.track.details)
    },
    created() {
      console.log('chegou aqui!')
      setLoaded(true)
    }
  })

  console.log()

  return (
    <S.Container>
      <div ref={sliderRef} className="keen-slider">
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
