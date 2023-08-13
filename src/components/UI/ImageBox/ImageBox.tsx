import classNames from 'classnames'
import Image from 'next/image'
import { FC } from 'react'
import s from './ImageBox.module.scss'

interface ImageBox {
  src: string
  alt: string
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

const ImageBox: FC<ImageBox> = ({
  src,
  alt,
  classes,
  imgPlaceholder = PLACEHOLDER_IMAGE
}) => {
  const activeClassnames = classNames(s.image, classes)

  return (
    <div className={s['image-box']}>
      <Image
        loader={myLoader}
        src={src ?? imgPlaceholder}
        alt={alt}
        sizes="100vw"
        quality="100"
        objectFit="cover"
        className={activeClassnames}
        layout="fill"
        placeholder="blur"
        blurDataURL={imgPlaceholder}
      />
    </div>
  )
}

export default ImageBox
