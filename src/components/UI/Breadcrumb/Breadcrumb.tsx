import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC } from 'react'
import s from './Breadcrumb.module.scss'

interface Breacrumb {
  name: string
  url: string
}

const breadcrumbs: Breacrumb[] = [
  {
    name: 'Início',
    url: '/'
  },
  {
    name: 'Sobre',
    url: '/sobre'
  },
  {
    name: 'Produtos',
    url: '/produtos'
  }
]

const BreadCrumb: FC = () => {
  const router = useRouter()

  function getBreadcrumbsOfPage(): Breacrumb[] {
    const routes = router.asPath.split('/')

    return routes.reduce((acc, route) => {
      const currentRoute = route === '' ? 'início' : route
      const breadcrumb = breadcrumbs.find(
        bc =>
          bc.name.toLowerCase() === currentRoute && router.pathname !== bc.url
      )

      if (breadcrumb) {
        return [...acc, breadcrumb]
      }

      return acc
    }, [])
  }

  const currentBreadcrumbs: Breacrumb[] = getBreadcrumbsOfPage()

  return (
    <div className={s.container}>
      {currentBreadcrumbs.map((bc, index) => (
        <>
          <Link href={bc.url} passHref key={bc.name}>
            <a className={s['route-container']}>
              <span>{bc.name}</span>
            </a>
          </Link>
          <span className={s.separator}>
            {currentBreadcrumbs.length - 1 > index ? ' / ' : ''}
          </span>
        </>
      ))}
    </div>
  )
}

export default BreadCrumb
