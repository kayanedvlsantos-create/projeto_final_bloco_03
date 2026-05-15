function Navbar() {
  return (
    <>
      <div className='w-full flex justify-center py-4 bg-sky-700 text-white font-bold'>

        <div className="container flex justify-between text-lg mx-8">
          FarmaGen

          <div className='flex gap-4'>
            Home
            Categorias
            Cadastrar Categoria
            Produtos
            Sair
          </div>
        </div>

      </div>
    </>
  )
}

export default Navbar