import { Ghost } from '@components/icons'
import classNames from 'classnames'
import { FC } from 'react'
import s from './ActionButton.module.scss'

interface Props {
  onClick: () => void
  disabled?: boolean
  extraclasses?: string
}

const ActionButton: FC<Props> = ({
  children,
  onClick,
  extraclasses,
  ...props
}) => {
  const buttonClassNames = classNames(s.button, extraclasses)

  return (
    <button onClick={onClick} className={buttonClassNames} {...props}>
      {children}
      <Ghost classes={s['ghost-icon']} />
    </button>
  )
}

export default ActionButton
