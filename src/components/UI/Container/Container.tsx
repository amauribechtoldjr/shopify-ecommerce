import classNames from 'classnames'
import { FC } from 'react'
import s from './Container.module.scss'

interface ContainerProps {
  className?: string
}

const Container: FC<ContainerProps> = ({ children, className = '' }) => {
  return <div className={classNames(s.container, className)}>{children}</div>
}

export default Container
