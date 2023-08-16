import * as s from './index.module.scss'
import { Container, Heading, ImageBox } from '../../components/UI'
import classNames from 'classnames'
import {
  Demon,
  Ghost,
  Heart,
  Kettle,
  MagnifiyngGlass,
  WineGlass,
  Bomb,
  Genius,
  Snake,
  Confuse,
  FiringHeart,
  BoxJuice,
  Baloon,
  OpenBoxJuice,
  GlassWater,
  Fire,
  Champagne,
  CauliFlower
} from '@components/icons'
import Dynamite from '@components/icons/Dynamite'

const About = () => {
  return (
    <Container className={s['about']}>
      <div className={s['about__title']}>
        <Heading as="h1">OLHE PARA OS DOIS LADOS ANTES DE ATRAVESSAR</Heading>
      </div>
      <div className={s['about__description']}>
        Sinto muito dizer que este estúdio não é um estúdio de cerâmica comum.
        Talvez você até tenha notado em algum detalhe ou outro. É natureza morta
        com toque de limão. É troca de pele a cada lua. É chá de carqueja num
        gole só, sem açúcar. Amarga, ácida, inteira e fragmentada.
      </div>
      <div className={s['about__relative-container']}>
        <div className={s['about__left-img']}>
          <ImageBox
            vercelLoader={false}
            src={'/images/cinzeira-espinhos-azul.png'}
            alt={
              'Cinzeiro de cerâmica azul com espinhos que sobem pelas laterais'
            }
          />
        </div>
        <nav>
          <ul className={s['about__ul']}>
            <li>
              <a href="#sobre">SOBRE</a>
            </li>
            <li>
              <a href="#pecas">PEÇAS</a>
            </li>

            <li>
              <a href="#bons-cuidados">BONS CUIDADOS</a>
            </li>
            <li>
              <a href="#atelie">ATELIÊ/chegouminhapeça?</a>
            </li>
          </ul>
        </nav>
        <div className={s['about__right-img']}>
          <ImageBox
            src={'/images/escultura-arvore-preta.png'}
            alt={'Peça de cerâmica preta com espinhos em formato de árvore'}
          />
        </div>
      </div>
      <div className={s['about__grid']} id="sobre">
        <div className={s['about__pb-container']}>
          <ImageBox
            src="/images/pb-atelie-torno.png"
            classes={s['about__imgs']}
            alt="Imagem do estúdio de cerâmica com um torno ao centro da imagem e flores penduradas na parede ao fundo."
          />
        </div>
        <div className={classNames(s['grid-text'], s['black-grid-color'])}>
          <Heading as="h2" className={s['about__grid-title-right']}>
            SOBRE
          </Heading>
          <div>
            A Travesssa é um estúdio de cerâmica incomum, onde eu passo horas
            imersa na argila, questionando minha sanidade. Minhas peças são
            afiadas e singulares, criadas a partir de um delírio de vida que me
            move. Não sigo uma estética específica, mas busco trazer um toque de
            pertencimento para lidar com a existência. Além da cerâmica, trago
            experiências em Design, panificação e fotografia. Na Travesssa, sou
            ceramista, fotógrafa, marketeira e muito mais.
          </div>
        </div>
        <div className={classNames(s['grid-text'], s['pink-grid-color'])}>
          Se você é um amante da cerâmica ou está em busca de uma peça bruta e
          delicada para adicionar à sua coleção, venha conhecer a Travesssa e
          descobrir o que eu posso oferecer. Agradeço pela sua visita, pois é
          graças a pessoas como você que eu consigo manter essa ansiedade
          controlada e transformar meu sentir em algo mais do que um ato
          solitário entre eu e a argila.
        </div>
        <div className={classNames(s['pink-container'], s['pink-grid-color'])}>
          <div className={s['pink-img']}>
            <ImageBox
              src="/images/xicara-rosa.png"
              alt=""
              classes={s['pink-grid-color']}
            />
          </div>
        </div>
      </div>
      <AboutStepsProccess />
      <div className={s['about__grid']} id="bons-cuidados">
        <div className={classNames(s['grid-text'], s['blue-grid-color'])}>
          <Heading as="h2" className={s['about__grid-title-left']}>
            BONS CUIDADOS <Heart classes={s['white-icon']} />
          </Heading>
          A cerâmica é um material com alto grau de dureza, mas não suporta
          torções, quedas e algumas travesssuras podem lascar com batidas leves.
          Quando bem cuidada, sua peça vai durar a vida inteira, pois ela não
          sofre quase nenhuma deterioração com o tempo. Para garantir vida longa
          ao objeto que você acabou de adquirir ou ganhar, basta ficar atenta a
          estes pequenos cuidados.
        </div>
        <div className={classNames(s['pink-container'], s['blue-grid-color'])}>
          <div className={s['how-to-care-img']}>
            <ImageBox
              src="/images/bons-cuidados.png"
              alt=""
              classes={s['blue-grid-color']}
            />
          </div>
        </div>
      </div>
      <HowToCare />
      <EndPageIcons />
    </Container>
  )
}

function HowToCare() {
  return (
    <>
      <div className={s['how-to-care']}>
        <div className={s['how-to-care__title__container']}>
          <Heading as="h2" className={s['how-to-care__title']}>
            ~Minha travessura chegou e agora?
          </Heading>
          <div className={s['how-to-care__img-01']}>
            <ImageBox
              src={'/images/travessa-chegou.png'}
              alt={'Peça de cerâmica preta com espinhos em formato de árvore'}
            />
          </div>
        </div>
        <div className={s['how-to-care__ul__container']}>
          <ul>
            <li>
              <strong>Limpe de forma adequada quando chega.</strong>
              <p>
                Se for uma peças utilitária lave normalmente. Caso seja uma
                peças escultural, passe um pano úmido.
              </p>
            </li>
            <li>
              <strong>Reciclar sua embalagem</strong>
              <p>
                é o básico, né? Aqui na travesssa embalamos tudo com papel e
                evitamos ao máximo plástico. Fazemos nossa parte, agora é hora
                de você fazer sua 😉
              </p>
            </li>
            <li>
              <strong>
                Manter a peça em local seco e salvo de gatos safados, vingativos
                e destrambelhados.
              </strong>
              <p>
                Os bichanos adoram uma caixa de papelão, barulho de papel e
                derrubar coisas que amamos. Fique atenta aos planos maléficos
                que eles podem bolar contra suas peças.
              </p>
            </li>
          </ul>
        </div>
        <div className={s['how-to-care__ul__container']}>
          <ul>
            <li>
              <strong>Manusear com cuidado,</strong>
              <p>
                Ao mover ou transportar suas peças, segure-as pela base para
                evitar estresse desnecessário na estrutura.
              </p>
            </li>
            <li>
              <strong>
                As esculturas não foram criadas para suportar manuseio diário.
              </strong>
              <p>Escolha um local adequado e seguro para apreciá-las.</p>
            </li>
            <li>
              <strong>Limpe as cerâmicas</strong>
              <p>
                decorativas com pano úmido, apenas quando for necessário. Já as
                utilitárias, lave com água, sabonete neutro e esponja macia.
              </p>
            </li>
            <li>
              <strong>Deixe secar bem</strong>
              <p>
                a sua peça antes de guardar no armário, pois a cerâmica é um
                material propenso à proliferação de mofo se guardado úmido.
              </p>
            </li>
          </ul>
        </div>
        <div className={s['how-to-care__title__container']}>
          <div className={s['how-to-care__img-02']}>
            <ImageBox src="/images/xicara-rosa.png" alt="" />
          </div>
        </div>
        <div className={s['how-to-care__title__container']}>
          <div className={s['how-to-care__last-img-02']}>
            <ImageBox
              src="/images/etapa-final.jpg"
              alt="Imagem do estúdio de cerâmica com um torno ao centro da imagem e flores penduradas na parede ao fundo."
            />
          </div>
        </div>
        <div className={s['how-to-care__ul__container']}>
          <div style={{ width: '80%' }}>
            <Kettle classes={s['how-to-care__icon']} />
            <WineGlass classes={s['how-to-care__icon']} />
            <MagnifiyngGlass classes={s['how-to-care__icon']} />
          </div>
          <ul>
            <li>
              <strong>As peças utilitárias</strong>
              <p>
                (pratos, travessas, xícaras, etc) podem ir ao micro-ondas, ao
                forno e à lava-louças. Ainda assim, esses usos podem desgastar
                sua peça mais rapidamente. É aconselhável levar ao forno apenas
                para finalização como gratinar e não para longas cocções.
              </p>
            </li>
            <li>
              <strong>Evite temperaturas extremas:</strong>
              <p>
                As peças de cerâmica podem ser sensíveis a mudanças bruscas de
                temperatura. Evite expô-las a variações repentinas de calor ou
                frio, como colocar uma peça quente em água fria, pois isso pode
                causar rachaduras.
              </p>
            </li>
            <li>
              <strong>
                Cuidado no manuseio das peças, pois elas retém calor.
              </strong>
              <p>
                Fique atenta quando for tirar sua cerâmica do forno, do
                microondas ou quando colocar um alimento muito quente nela.
              </p>
            </li>
            <li>
              <strong>É importante escaldar as peças</strong>
              <p>
                antes de utilizá-las para armazenar líquidos quentes. Isso vai
                ajudar a manter seu café quentinho por mais tempo, visto que o
                calor do líquido não passará para xícara.
              </p>
            </li>
            <li>
              <strong>Curiosidade:</strong>
              <p>
                Antigamente, o chá era servido em potes redondos, sem alças. Na
                tradição japonesa da cerimônia do chá, a temperatura ideal era
                quando o recipiente não queimava os dedos ao ser tocado
                diretamente.
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className={s['last-part']}>
        <div className={s['last-part__container-ul']}>
          <ul className={s['last-part__ul']}>
            <li>
              <strong>Todos os objetos são feitos à mão, um a um.</strong>
              <p>
                natureza artesanal do processo de fabricação pode gerar sinais
                na esmaltação e variações no formato. Isto é perfeitamente
                normal e faz parte da identidade dos objetos de cerâmica.
              </p>
            </li>
            <li>
              <strong>Desgastes naturais</strong>
              <p>
                da cerâmica e do esmalte podem surgir, como os craquelados, mas
                eles não impedem o uso das peças. Todos os nossos produtos
                utilitários são feitos com materiais atóxicos e seguros para
                consumo.
              </p>
            </li>
            <li>
              <strong>Caso sua peça comece a apresentar manchas de uso,</strong>
              <p>
                experimente deixar de molho por 15 minutos em uma mistura de
                água morna e uma colher de água sanitária. Depois, é só esfregar
                com uma escovinha.
              </p>
            </li>
            <li>
              <strong>
                Por fim, sua cerâmica pode quebrar, acontece, infelizmente.
              </strong>
              <p>
                Caso quebre, você pode colar com a técnica japonesa Kintsugi.
                Também podes usar os cacos em fundo de vasos no lugar de pedras
                para ajudar na drenagem ou fazer o descarte adequado.
              </p>
            </li>
          </ul>
        </div>
        <div className={s['last-part--img']}>
          <ImageBox
            src="/images/etapa-final.jpg"
            alt="Imagem do estúdio de cerâmica com um torno ao centro da imagem e flores penduradas na parede ao fundo."
          />
        </div>
      </div>
    </>
  )
}

function AboutStepsProccess() {
  return (
    <div className={s['proccess-container']} id="pecas">
      <div>
        <div className={s['about-steps-title']}>
          E quanto ao processo de criação das peças, aqui vai uma espiada nas
          três etapas que trilho com a argila
        </div>
      </div>
      <div className={s['proccess-grid']}>
        <div className={s['proccess-grid__container']}>
          <Heading as="h4" className={s['proccess-grid-title']}>
            PREGANDO PEÇAS <Ghost classes={s['about-icon']} /> EM CERÂMICA
          </Heading>
          <div className={s['proccess-grid__img']}>
            <ImageBox
              src="/images/atelie-step-01.png"
              alt=""
              classes={s['step-img']}
            />
          </div>
          <div className={s['proccess-grid-text']}>
            Nesta primeira etapa, eu mergulho na minha mente caótica e dou vida
            aos conceitos das peças. Moldo a argila, dando forma e propósito a
            cada uma delas, enquanto questiono se estou construindo uma
            obra-prima ou apenas alimentando meu vício por sujeira, para depois
            me preocupar com meu perfeccionismo compulsivo por limpeza.
            Atualmente crio principalmente com as técnicas de placa, torno e
            acordelado. Depois de modelar, é esperar, até as peças estar em
            ponto de couro para dar acabamento. Essa etapa mais longa do
            processo durando mais ou menos 45 dias.
          </div>
        </div>
        <div className={s['proccess-grid__container']}>
          <Heading as="h4" className={s['proccess-grid-title']}>
            FEITA COM CALOR <Heart classes={s['about-icon']} />
          </Heading>
          <div className={s['proccess-grid__img']}>
            <ImageBox
              src="/images/atelie-step-02.png"
              alt=""
              classes={s['step-img']}
            />
          </div>
          <div className={s['proccess-grid-text']}>
            A segunda etapa é dedicada aos detalhes que fazem a diferença. Após
            a secagem de todas as peças e da primeira queima, aplico esmaltes
            que realçam a cor e a textura da cerâmica. Então, as peças vão para
            a segunda queima no forno. É como se elas passassem por uma prova de
            fogo para amadurecerem e se tornarem peças resistentes. Essa etapa
            dura cerca de 15 dias.
          </div>
        </div>
        <div className={s['proccess-grid__container']}>
          <Heading as="h4" className={s['proccess-grid-title']}>
            TRAVESSSURAS & GOSTOSURAS <Demon classes={s['about-icon']} />
          </Heading>
          <div className={s['proccess-grid__img']}>
            <ImageBox
              src="/images/atelie-step-03.png"
              alt=""
              classes={s['step-img']}
            />
          </div>
          <div className={s['proccess-grid-text']}>
            Na última etapa, tiro o meu chapéu de ceramista e coloco o de
            fotógrafa. Registro minhas criações em todo o seu esplendor para
            exibi-las em um site ou catálogo. Depois disso, é hora de mostrar ao
            mundo! Promovo minhas peças nas redes sociais, participo de feiras
            de arte e realizo vendas diretas. E quando uma peça é vendida, é com
            todo o cuidado e carinho que a embalo e envio para o seu novo lar.
            Essa última etapa dura cerca de 15 dias.
          </div>
        </div>
      </div>
    </div>
  )
}

function EndPageIcons() {
  return (
    <div className={s['end-container']}>
      <div className={s['end-container__icons-list']}>
        <WineGlass classes={s['end-container__icon']} />
        <Ghost classes={s['end-container__icon']} />
        <Bomb classes={s['end-container__icon']} />
        <Genius extraClassname={s['end-container__icon']} />
        <Snake classes={s['end-container__icon']} />
        <Confuse classes={s['end-container__icon']} />
        <FiringHeart classes={s['end-container__icon']} />
        <Demon classes={s['end-container__icon']} />
        <Heart classes={s['end-container__icon']} />
        <MagnifiyngGlass classes={s['end-container__icon']} />
        <Kettle classes={s['end-container__icon']} />
        <BoxJuice classes={s['end-container__icon']} />
        <Baloon classes={s['end-container__icon']} />
        <OpenBoxJuice classes={s['end-container__icon']} />
        <Dynamite classes={s['end-container__icon']} />
        <GlassWater classes={s['end-container__icon']} />
        <Fire classes={s['end-container__icon']} />
        <Champagne classes={s['end-container__icon']} />
        <CauliFlower classes={s['end-container__icon']} />
      </div>
    </div>
  )
}

export default About
