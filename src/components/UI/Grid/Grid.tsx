import classNames from 'classnames'
import { FC } from 'react'
import s from './Grid.module.scss'

type GridColumnOptions = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9

interface GridProps {
  cols: GridColumnOptions
  alignCenter?: boolean
  extraClasses?: string
}

const columnsNumber = 9
const columnsOptions = {}

for (let i = 0; i <= columnsNumber; i++) {
  columnsOptions[i] = s[`columns-${i}`]
}

function convertColsToClassname(cols: GridColumnOptions): string {
  return columnsOptions[cols]
}

// TODO: grid css trick repeat(auto-fit, minmax())
const Grid: FC<GridProps> = ({
  children,
  cols,
  extraClasses,
  alignCenter = false
}) => {
  const gridClasses = classNames(
    s.grid,
    { [s['center-v']]: alignCenter },
    convertColsToClassname(cols),
    extraClasses
  )

  return <div className={gridClasses}>{children}</div>
}

export default Grid
