import classNames from 'classnames'
import { FC } from 'react'
import s from './Grid.module.scss'

type GridColumnOptions = 2 | 3

interface GridProps {
  cols: GridColumnOptions
}

const columnOptions = {
  '2': s['columns-2'],
  '3': s['columns-3']
}

function convertColsToClassname(cols: GridColumnOptions): string {
  console.log(cols)
  console.log(columnOptions)
  return columnOptions[cols]
}

const Grid: FC<GridProps> = ({ children, cols }) => {
  const gridClasses = classNames([s.grid, convertColsToClassname(cols)])

  console.log(gridClasses)

  return <div className={gridClasses}>{children}</div>
}

export default Grid
