import { Link } from "react-router-dom"
import type Categoria from "../../../models/Categoria"

interface CardCategoriaProps {
    categoria: Categoria
}

function CardCategoria({ categoria }: CardCategoriaProps) {
    return (
        <div className="border border-sky-700 rounded-2xl overflow-hidden shadow-md bg-white">
            
            <div className="p-4">
                <h3 className="text-xl font-bold text-sky-700">
                    {categoria.nome}
                </h3>

                <p className="text-gray-700 mt-2">
                    {categoria.descricao}
                </p>
            </div>

            <div className="flex">
                <Link
                    to={`/editarCategoria/${categoria.id}`}
                    className="w-full text-white font-bold bg-sky-700 hover:bg-sky-600 flex items-center justify-center py-2 transition"
                >
                    Editar
                </Link>

                <Link
                    to={`/deletarCategoria/${categoria.id}`}
                    className="w-full text-white font-bold bg-red-500 hover:bg-red-700 flex items-center justify-center py-2 transition"
                >
                    Deletar
                </Link>
            </div>
        </div>
    )
}

export default CardCategoria