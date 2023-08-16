import classNames from 'classnames'
import { FC } from 'react'
import s from './Heading.module.scss'

interface Props {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span'
  className?: string
  inline?: boolean
}

const Heading: FC<Props> = ({
  children,
  as = 'h1',
  className,
  inline = false,
  ...rest
}) => {
  const activeClassNames = classNames(
    s.heading,
    s[`heading-${as}`],
    { [s.inline]: inline },
    className
  )

  const Component = as

  return (
    <Component className={activeClassNames} {...rest}>
      {children}
    </Component>
  )
}

export default Heading
