import { Link } from "react-router-dom";
import { FirstAidIcon, ShoppingCartIcon, UserIcon, MagnifyingGlassIcon } from "@phosphor-icons/react"

function Navbar() {
  return (
    <div className="w-full flex justify-center py-4 bg-indigo-900 text-white">
      <div className="container flex justify-between text-lg mx-8">
        <Link to="/" className="text-2xl font-bold flex items-center gap-2">
          <FirstAidIcon size={32} color="#dc2626" weight="fill" />
          Farmácia
        </Link>

        <div className="flex items-center bg-white rounded-full w-full max-w-md py-1 gap-2 px-2">
          <input
            type="text"
            placeholder="Buscar produtos..."
            className="outline-none text-sm text-gray-800 pl-2 flex-1 min-w-0"
          />
          <button
            type="button"
            className="flex items-center justify-center bg-indigo-700 hover:bg-indigo-900 rounded-full p-1"
          >
            <MagnifyingGlassIcon size={20} color="white" weight="bold" />
          </button>
        </div>

        <div className="flex gap-4">
          <Link to="/categorias" className="hover:underline">
            Categorias
          </Link>
          <Link to="/cadastrarcategoria" className="hover:underline">
            Cadastrar Categoria
          </Link>
          <Link to="/perfil" className="hover:underline">
            <UserIcon size={24} weight="bold" />
          </Link>
          <Link to="/carrinho" className="hover:underline">
            <ShoppingCartIcon size={24} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;