import { FC } from 'react'
import s from './Heading.module.scss'

interface Props {
  as?: 'h1' | 'h2' | 'h3' | 'span'
  className?: string
}

const Heading: FC<Props> = ({ children, as = 'h1', className, ...rest }) => {
  const activeClassNames = className || `${s.heading} ${s[`heading-${as}`]}`
  const Component = as

  return (
    <Component className={activeClassNames} {...rest}>
      {children}
    </Component>
  )
}

export default Heading
