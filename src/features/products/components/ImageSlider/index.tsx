import { ProductImage } from '@common/types/product'
import { ImageBox } from '@components/UI'
import classNames from 'classnames'
import { FC, useState } from 'react'
import s from './index.module.scss'

interface SliderProps {
  images: ProductImage[]
}

const ImageSlider: FC<SliderProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const getDotClassName = (index: number, currentIndex: number) => {
    return classNames(s.dots, { [s.selected]: index === currentIndex })
  }

  const handleUniqueClick = (index: number) => () => {
    setCurrentIndex(index)
  }

  return (
    <>
      <div className={s['img-box']}>
        <div className={s['left-arrow']} onClick={goToPrevious}>
          <span className={s['arrow']}>{`<`}</span>
        </div>
        <ImageBox
          src={images[currentIndex]?.url}
          alt={images[currentIndex]?.alt || "Product's image"}
          classes={s['img-box__img']}
        />
        <div className={s['right-arrow']} onClick={goToNext}>
          <span className={s['arrow']}>{`>`}</span>
        </div>
        <div className={s['dots-box']}>
          {images.map((image, index) => (
            <div
              key={index}
              className={getDotClassName(index, currentIndex)}
              onClick={() => goToSlide(index)}
            >
              &bull;
            </div>
          ))}
        </div>
      </div>
      <div className={s['preshow-images-box']}>
        {images.map((image, index) => (
          <div
            key={image.url}
            className={s['preshow-image']}
            onClick={handleUniqueClick(index)}
          >
            <ImageBox
              src={image.url}
              alt={image.alt || "Product's image"}
              classes={s['preshow-image__img']}
            />
          </div>
        ))}
      </div>
    </>
  )
}

export default ImageSlider
