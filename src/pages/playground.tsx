const Playground: React.FC = () => {
  const name: string[] = ['teste', 'teste2']
  const random = Math.random() > 0.5 ? 'hello' : [1, 2]

  return (
    <div>
      {Array.isArray(random) ? 'teste' : 'não passou no random'}
      <span>{name.map(nam => nam)}</span>
    </div>
  )
}

export default Playground
