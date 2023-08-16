import { useState } from 'react'
import { getFirstLetterUppercase } from 'src/utils'
import { useDetectClickOutside } from 'react-detect-click-outside'
import s from './index.module.scss'

interface DropdownItemProps {
  name: string
  key: string | number
}

interface DropdownProps {
  triggerText: string
  menu: DropdownItemProps[]
  onSelect: (key: string | number) => void
}

const Dropdown = ({ triggerText, menu, onSelect }: DropdownProps) => {
  const [open, setOpen] = useState(false)
  const ref = useDetectClickOutside({ onTriggered: () => setOpen(false) })

  const handleOpen = () => {
    setOpen(!open)
  }

  const handleItemClick = (key: string | number) => {
    return () => {
      onSelect(key)
      setOpen(false)
    }
  }

  return (
    <div className={s.dropdown} ref={ref}>
      <button className={s['trigger-button']} onClick={handleOpen}>
        {triggerText}
      </button>
      {open ? (
        <ul className={s.menu}>
          {menu.map((menuItem, index) => (
            <li key={index} className={s['menu-item']}>
              <button
                key={menuItem.key}
                onClick={handleItemClick(menuItem.name)}
                className={s['menu-item-button']}
              >
                {getFirstLetterUppercase(menuItem.name)}
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  )
}

export default Dropdown
