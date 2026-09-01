import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FirstAidIcon,
  List,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  UserIcon,
  X,
} from "@phosphor-icons/react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { to: "/categorias", label: "Categorias" },
    { to: "/cadastrarcategorias", label: "Cadastrar Categoria" },
    { to: "/produtos", label: "Produtos" },
    { to: "/cadastrarproduto", label: "Cadastrar Produto" },
  ];

  return (
    <header className="w-full bg-indigo-900 text-white shadow-md">
      <div className="container mx-auto flex flex-col gap-3 px-4 py-3 md:px-6">
        <div className="flex items-center justify-between gap-3">
          <Link to="/" className="flex items-center gap-2 text-2xl font-bold">
            <FirstAidIcon size={32} color="#dc2626" weight="fill" />
            <span className="text-lg md:text-2xl">Farmácia</span>
          </Link>

          <div className="hidden flex-1 items-center justify-center md:flex">
            <div className="flex w-full max-w-md items-center gap-2 rounded-full bg-white px-3 py-2 text-gray-800">
              <input
                type="text"
                placeholder="Buscar produtos..."
                className="min-w-0 flex-1 border-0 bg-transparent pl-1 text-sm outline-none"
              />
              <button
                type="button"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-700 transition hover:bg-indigo-900"
              >
                <MagnifyingGlassIcon size={18} color="white" weight="bold" />
              </button>
            </div>
          </div>

          <div className="hidden items-center gap-4 md:flex">
            {links.map((link) => (
              <Link key={link.to} to={link.to} className="text-sm font-medium hover:underline">
                {link.label}
              </Link>
            ))}

            <Link to="/perfil" className="flex items-center hover:underline" aria-label="Perfil">
              <UserIcon size={24} weight="bold" />
            </Link>
            <Link to="/carrinho" className="flex items-center hover:underline" aria-label="Carrinho">
              <ShoppingCartIcon size={24} />
            </Link>
          </div>

          <button
            type="button"
            className="flex items-center justify-center rounded-md border border-white/20 p-2 md:hidden"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Abrir menu"
          >
            {menuOpen ? <X size={22} /> : <List size={22} />}
          </button>
        </div>

        <div className="flex items-center gap-2 rounded-full bg-white px-3 py-2 text-gray-800 md:hidden">
          <input
            type="text"
            placeholder="Buscar produtos..."
            className="min-w-0 flex-1 border-0 bg-transparent pl-1 text-sm outline-none"
          />
          <button
            type="button"
            className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-700 transition hover:bg-indigo-900"
          >
            <MagnifyingGlassIcon size={18} color="white" weight="bold" />
          </button>
        </div>

        {menuOpen && (
          <nav className="flex flex-col gap-2 rounded-lg bg-indigo-800/80 p-3 md:hidden">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="rounded px-2 py-2 text-sm font-medium hover:bg-indigo-700"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            <div className="mt-1 flex items-center justify-between gap-3 border-t border-white/15 pt-2">
              <Link to="/perfil" className="flex items-center gap-2 text-sm hover:underline" onClick={() => setMenuOpen(false)}>
                <UserIcon size={20} weight="bold" />
                Perfil
              </Link>
              <Link to="/carrinho" className="flex items-center gap-2 text-sm hover:underline" onClick={() => setMenuOpen(false)}>
                <ShoppingCartIcon size={20} />
                Carrinho
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Navbar;