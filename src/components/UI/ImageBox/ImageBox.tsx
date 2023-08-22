import classNames from 'classnames'
import Image from 'next/image'
import { FC, forwardRef } from 'react'
import s from './ImageBox.module.scss'

interface ImageBox extends React.HTMLAttributes<HTMLImageElement> {
  src: string
  alt: string
  fill?: boolean
  vercelLoader?: boolean
  classes?: string
  imgPlaceholder?: string
}

const PLACEHOLDER_IMAGE = '/product-placeholder.svg'

const myLoader = ({ src, width, quality }) => {
  let newSrc = src
    .split('.jpg')
    .join(
      `_${width}x@2x.progressive.jpg?width=${width}&quality=${quality || 75}`
    )

  newSrc = newSrc
    .split('.png')
    .join(`_${width}x@2x.png?format=jpg&w=${width}&quality=${quality || 75}`)

  return `${newSrc}`
}

const ImageBox = forwardRef<HTMLImageElement, ImageBox>(
  (
    {
      src,
      alt,
      classes,
      fill = true,
      // vercelLoader = true,
      imgPlaceholder = PLACEHOLDER_IMAGE,
      onMouseEnter,
      onMouseMove
    },
    ref
  ) => {
    // const activeClassnames = classNames(s.image, classes)
    return (
      <div className={s['image-box']}>
        <Image
          // loader={vercelLoader ? myLoader : null}
          ref={ref}
          src={src ?? imgPlaceholder}
          alt={alt}
          quality="100"
          className={classes}
          placeholder="blur"
          blurDataURL={imgPlaceholder}
          fill={fill}
          sizes="100vw"
          onMouseEnter={onMouseEnter}
          onMouseMove={onMouseMove}
        />
      </div>
    )
  }
)

ImageBox.displayName = 'ImageBox'

export default ImageBox
