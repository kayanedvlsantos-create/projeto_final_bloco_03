import { FacebookLogoIcon, InstagramLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react"

function Footer() {

  let data = new Date().getFullYear()

  return (
    <>
      <div className="flex justify-center bg-sky-700 text-white">
        <div className="container flex flex-col items-center py-4">
          
          <p className='text-xl font-bold'>
            FarmaGen, Grupo Gen | Copyright: {data}
          </p>

          <p className='text-lg'>Nos siga nas redes sociais</p>

          <div className='flex gap-2'>
            <LinkedinLogoIcon size={48} weight='bold' />
            <InstagramLogoIcon size={48} weight='bold' />
            <FacebookLogoIcon size={48} weight='bold' />
          </div>

        </div>
      </div>
    </>
  )
}

export default Footer