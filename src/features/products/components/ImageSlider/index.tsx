import { ProductImage } from '@common/types/product'
import { ImageBox } from '@components/UI'
import classNames from 'classnames'
import Image from 'next/image'
import React, {
  EventHandler,
  FC,
  TouchEventHandler,
  useEffect,
  useRef,
  useState
} from 'react'
import s from './index.module.scss'

interface SliderProps {
  images: ProductImage[]
}

function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined
  })

  useEffect(() => {
    // only execute all the code below in client side
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    // Add event listener
    window.addEventListener('resize', handleResize)

    // Call handler right away so state gets updated with initial window size
    handleResize()

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize)
  }, []) // Empty array ensures that effect is only run on mount
  return windowSize
}

let positionDiff = 0

const ImageSlider: FC<SliderProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [isDragging2, setIsDragging2] = useState(false)
  const [prevPageX, setPrevPageX] = useState(0)
  const [prevScrollLeft, setPrevScrollLeft] = useState(0)

  const imageRef = useRef<HTMLImageElement>()
  const magnifiedImageBoxRef = useRef<HTMLDivElement>()
  const mouseZoomBoxRef = useRef<HTMLDivElement>()

  const draggableRef = useRef<HTMLDivElement>()
  const draggablePreviousRef = useRef<HTMLDivElement>()
  const draggableNextRef = useRef<HTMLDivElement>()
  const draggableImageRef = useRef<HTMLImageElement>()
  const draggableImageContainerRef = useRef<HTMLImageElement>()

  const windowSizes = useWindowSize()

  const shoudlApplyZoom = windowSizes.width > 750
  const shouldApplyDraggable = !shoudlApplyZoom

  const goToPreviousSlide = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const goToNextSlide = () => {
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

  const handleDraggableMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return
    e.preventDefault()
    draggableMove(e.pageX)
  }

  const handleDraggableTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return
    draggableMove(e.touches[0].pageX)
  }

  const handleDraggableStart = (e: React.MouseEvent<HTMLDivElement>) => {
    draggableStart(e.pageX)
  }

  const handleDraggableTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    draggableStart(e.touches[0].pageX)
  }

  const handleDraggableMouseEnd = () => {
    draggableEnd()
  }

  const handleDraggableTouchEnd = () => {
    draggableEnd()
  }

  function convertRemToPixels(rem) {
    return (
      rem * parseFloat(getComputedStyle(document.documentElement).fontSize) +
      0.8
    )
  }

  const goToPreviousDraggable = () => {
    const scrollLeftCalc =
      draggableImageRef.current.clientWidth + convertRemToPixels(1.6)

    draggableRef.current.scrollLeft -= scrollLeftCalc
    showHideIcons(draggableRef.current.scrollLeft)
  }

  const goToNextDraggable = () => {
    const scrollLeftCalc =
      draggableImageRef.current.clientWidth + convertRemToPixels(1.6)

    draggableRef.current.scrollLeft += scrollLeftCalc
    showHideIcons(draggableRef.current.scrollLeft)
  }

  const showHideIcons = (scrollLeft: number) => {
    const maxScrollable =
      draggableRef.current.scrollWidth - draggableRef.current.clientWidth

    draggablePreviousRef.current.style.display =
      scrollLeft === 0 ? 'none' : 'block'

    draggableNextRef.current.style.display =
      scrollLeft === maxScrollable ? 'none' : 'block'
  }

  const draggableEnd = () => {
    setIsDragging(false)
    draggableImageContainerRef.current.classList.remove(s['dragging'])
    if (!isDragging2) return
    setIsDragging2(false)
    autoSlide()
    showHideIcons(draggableRef.current.scrollLeft)
  }

  const autoSlide = () => {
    console.log(draggableRef.current.scrollLeft)
    console.log(draggableRef.current.clientWidth + convertRemToPixels(1.6))

    if (
      draggableRef.current.scrollLeft ===
      draggableRef.current.clientWidth + convertRemToPixels(1.6)
    ) {
      return
    }

    const diff = Math.abs(positionDiff)
    const firstImgWidth =
      draggableImageRef.current.clientWidth + convertRemToPixels(1.6)

    const valDifference = firstImgWidth - diff

    // user dragging to right
    if (draggableRef.current.scrollLeft > prevScrollLeft) {
      draggableRef.current.scrollLeft +=
        diff > firstImgWidth / 2 ? valDifference : -diff

      return
    }

    // user dragging to left
    draggableRef.current.scrollLeft -=
      diff > firstImgWidth / 2 ? valDifference : -diff
  }

  const draggableMove = (pageX: number) => {
    positionDiff = pageX - prevPageX

    draggableImageContainerRef.current.classList.add(s['dragging'])
    draggableRef.current.scrollLeft = prevScrollLeft - positionDiff

    setIsDragging2(true)
    showHideIcons(draggableRef.current.scrollLeft)
  }

  const draggableStart = (pageX: number) => {
    setPrevPageX(pageX)
    setPrevScrollLeft(draggableRef.current.scrollLeft)
    setIsDragging(true)
  }

  return (
    <>
      {shoudlApplyZoom && (
        <div className={s['img-box']}>
          <div className={s['left-arrow']} onClick={goToPreviousSlide}>
            <span className={s['arrow']}>{`<`}</span>
          </div>
          <ImageBox
            src={images[currentIndex]?.url}
            alt={images[currentIndex]?.alt || "Product's image"}
            classes={s['img-box__img']}
            onMouseMove={shoudlApplyZoom ? handleMouseEnterImg : null}
            ref={imageRef}
          />
          <div className={s['right-arrow']} onClick={goToNextSlide}>
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
      )}
      {shouldApplyDraggable && (
        <div className={s['wrapper']}>
          <div
            className={s['left-arrow']}
            onClick={goToPreviousDraggable}
            ref={draggablePreviousRef}
            style={{ display: 'none' }}
          >
            <span className={s['arrow']}>{`<`}</span>
          </div>
          <div
            className={s['carousel']}
            onMouseMove={handleDraggableMouseMove}
            onMouseDown={handleDraggableStart}
            onTouchStart={handleDraggableTouchStart}
            onTouchEnd={handleDraggableTouchEnd}
            onTouchMove={handleDraggableTouchMove}
            onMouseLeave={handleDraggableMouseEnd}
            onMouseUp={handleDraggableMouseEnd}
            ref={draggableRef}
          >
            <div
              className={s['carousel__container']}
              ref={draggableImageContainerRef}
            >
              {images.map((image, index) => {
                return (
                  <img
                    key={image.url + index}
                    src={image.url}
                    ref={index === 0 ? draggableImageRef : null}
                    alt={image.alt || "Product's image"}
                    className={s['carousel__container__img']}
                    draggable={false}
                  />
                )
              })}
            </div>
          </div>
          <div
            className={s['right-arrow']}
            onClick={goToNextDraggable}
            ref={draggableNextRef}
          >
            <span className={s['arrow']}>{`>`}</span>
          </div>
        </div>
      )}
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
