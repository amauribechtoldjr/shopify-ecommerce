import classNames from 'classnames'
import { FC } from 'react'
import s from './Heading.module.scss'

interface Props {
  as?: 'h1' | 'h2' | 'h3' | 'span'
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
  const activeClassNames =
    className ||
    classNames(s.heading, s[`heading-${as}`], { [s.inline]: inline })
  const Component = as

  return (
    <Component className={activeClassNames} {...rest}>
      {children}
    </Component>
  )
}

export default Heading
