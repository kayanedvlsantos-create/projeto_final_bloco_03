import { Link } from "react-router-dom"

function Navbar() {
  return (
    <>
      <div className='w-full flex justify-center py-4 bg-sky-700 text-white font-bold'>

        <div className="container flex justify-between text-lg mx-8">
          <Link to='/home' className="text-2xl font-bold">FarmaGen</Link>

          <div className='flex gap-4'>
            <Link to='/home' className='hover:underline'>Início</Link>
            <Link to='/categorias' className='hover:underline'>Categorias</Link>
            <Link to='/cadastrarcategoria' className='hover:underline'>Cadastrar Categoria</Link>
            Produtos
          </div>
        </div>

      </div>
    </>
  )
}

export default Navbar