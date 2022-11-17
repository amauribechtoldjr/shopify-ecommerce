import './ProductImagesCarousel.module.scss'
import { FC, Children, isValidElement, useState } from 'react'
import { useKeenSlider } from 'keen-slider/react'

const ProductImagesCarousel: FC = ({ children }) => {
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    created() {
      setLoaded(true)
    }
  })

  return (
    <div>
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
    </div>
  )
}

export default ProductImagesCarousel
