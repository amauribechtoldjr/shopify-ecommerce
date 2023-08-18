import Container from '../Container/Container'
import Heading from '../Heading/Heading'
import Ghost from '../../icons/Ghost'
import s from './Separator.module.scss'
import Link from 'next/link'

const Separator = () => {
  return (
    <section className={s['separator']}>
      <Container className={s['separator__container']}>
        <ul className={s['separator__ul']}>
          <li>
            <Link href="/sobre#sobre">SOBRE</Link>
          </li>
          <li>
            <Link href="#pecas">PEÇAS</Link>
          </li>
          <li>
            <Link href="#bons-cuidados">BONS CUIDADOS</Link>
          </li>
          <li>
            <Link href="#atelie">ATELIÊ/chegouminhapeça?</Link>
          </li>
        </ul>
        <Ghost classes={s['separator__ghost']} />
        <Heading as="h2" inline>
          GOSTOSURAS
        </Heading>
      </Container>
    </section>
  )
}

export default Separator
