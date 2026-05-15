function Home() {
  return (
    <>
      <div className="bg-white flex justify-center">
        <div className="container grid grid-cols-2 text-sky-700">
          
          <div className="flex flex-col gap-4 items-center justify-center py-4">
            
            <h2 className="text-5xl font-bold text-center text-sky-700">
              FarmaGen
            </h2>

            <p className="text-xl text-center text-sky-700">
              O melhor pra sua saúde!
            </p>

            <div className="flex justify-around gap-4">
              <div className="rounded text-sky-700 border-sky-700 border-2 py-2 px-4 hover:bg-sky-700 hover:text-white transition">
                Categorias
              </div>
            </div>

  </div>

          <div className="flex justify-center">
            <img
              src="https://ictq.com.br/images/saiba-como-a-farmacia-deve-ser-higienizada-em-tempos-de-pandemia.jpg"
              alt="Farmácia"
              className="w-2/3"
            />

          </div>
        </div>
      </div>
    </>
  )
}

export default Home