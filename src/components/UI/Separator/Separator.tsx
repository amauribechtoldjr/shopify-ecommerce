import Container from '../Container/Container'
import Heading from '../Heading/Heading'
import Ghost from '../../icons/Ghost'
import s from './Separator.module.scss'

const Separator = () => {
  return (
    <section className={s['separator-box']}>
      <Container className={s['separator-box-container']}>
        <Heading as="h2" inline>
          TRAVESSURAS
        </Heading>
        <Ghost classes={s['svg-ghost']} />
        <Heading as="h2" inline>
          GOSTOSURAS
        </Heading>
      </Container>
    </section>
  )
}

export default Separator
