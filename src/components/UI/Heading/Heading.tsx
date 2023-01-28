import { FC } from 'react'
import s from './Heading.module.scss'

interface Props {
  as?: 'h1' | 'h2' | 'h3' | 'span'
  className?: string
}

const Heading: FC<Props> = ({ children, as = 'h1', className, ...rest }) => {
  const classNames = className || `${s.heading} ${s[`heading-${as}`]}`
  const Component = as

  return (
    <Component className={classNames} {...rest}>
      {children}
    </Component>
  )
}

export default Heading
