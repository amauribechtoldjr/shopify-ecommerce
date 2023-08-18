import { ProductImage } from '@common/types/product'
import { ImageBox } from '@components/UI'
import classNames from 'classnames'
import React, { FC, useRef, useState } from 'react'
import s from './index.module.scss'

interface SliderProps {
  images: ProductImage[]
}

const ImageSlider: FC<SliderProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [zoomBoxActive, setZoomBoxActive] = useState(false)

  const imageRef = useRef<HTMLImageElement>()
  const magnifiedImageBoxRef = useRef<HTMLDivElement>()
  const mouseZoomBoxRef = useRef<HTMLDivElement>()

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

  const handlePreshowImageClick = (index: number) => () => {
    setCurrentIndex(index)
  }

  const handleMouseEnterImg = (e: React.MouseEvent<HTMLImageElement>) => {
    if (imageRef.current) {
      const imgRect = imageRef.current.getBoundingClientRect()

      let x = e.pageX - imgRect.left - mouseZoomBoxRef.current.offsetWidth / 2
      let y = e.pageY - imgRect.top - mouseZoomBoxRef.current.offsetHeight / 2

      const maxXPos = imgRect.width - mouseZoomBoxRef.current.offsetWidth
      const maxYPos = imgRect.width - mouseZoomBoxRef.current.offsetHeight

      if (x > maxXPos) x = maxXPos
      if (x < 0) x = 0

      if (y > maxYPos) y = maxYPos
      if (y < 0) y = 0

      mouseZoomBoxRef.current.style.left = `${x}px`
      mouseZoomBoxRef.current.style.top = `${y}px`

      // calculate the magnified img & zoom box aspect ratio
      const cx =
        magnifiedImageBoxRef.current.offsetWidth /
        mouseZoomBoxRef.current.offsetWidth

      const cy =
        magnifiedImageBoxRef.current.offsetHeight /
        mouseZoomBoxRef.current.offsetHeight

      magnifiedImageBoxRef.current.style.background = `url(${
        imageRef.current.src
      }) -${x * cx}px -${y * cy}px / ${imgRect.width * cx}px ${
        imgRect.height * cy
      }px no-repeat`

      mouseZoomBoxRef.current.classList.add(
        s['img-box__mouse-zoom-box--active']
      )

      magnifiedImageBoxRef.current.classList.add(
        s['img-box__image-zoom-box--active']
      )
    }
  }

  const handleMouseLeaveImg = () => {
    mouseZoomBoxRef.current.classList.remove(
      s['img-box__mouse-zoom-box--active']
    )

    magnifiedImageBoxRef.current.classList.remove(
      s['img-box__image-zoom-box--active']
    )
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
          onMouseMove={handleMouseEnterImg}
          ref={imageRef}
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
        <div
          className={s['img-box__mouse-zoom-box']}
          ref={mouseZoomBoxRef}
          onMouseMove={handleMouseEnterImg}
          onMouseLeave={handleMouseLeaveImg}
        />
        <div
          className={s['img-box__image-zoom-box']}
          ref={magnifiedImageBoxRef}
        />
      </div>
      <div className={s['preshow-images-box']}>
        {images.map((image, index) => (
          <div
            key={image.url}
            className={s['preshow-image']}
            onClick={handlePreshowImageClick(index)}
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
