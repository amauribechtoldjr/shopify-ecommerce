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
        src={src ?? imgPlaceholder}
        alt={alt}
        quality="85"
        className={activeClassnames}
        layout="fill"
        objectFit="cover"
      />
    </div>
  )
}

export default ImageBox
