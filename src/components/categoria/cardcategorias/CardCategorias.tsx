import { Link } from "react-router-dom";
import type Categoria from "../../../models/Categoria";

interface CardCategoriaProps {
  categoria: Categoria;
}

function CardCategoria({ categoria }: CardCategoriaProps) {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition duration-200 hover:shadow-md">
      <div className="flex items-center justify-between bg-indigo-500 px-4 py-3">
        <span className="rounded-full bg-white/20 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-white">
          Categoria
        </span>
        <h3 className="text-lg font-bold uppercase text-white">{categoria.nome}</h3>
      </div>

      <div className="flex flex-1 flex-col justify-between gap-4 p-4">
        <p className="text-sm leading-6 text-slate-600">
          {categoria.descricao ?? "Sem descrição disponível."}
        </p>

        <div className="flex gap-2">
          <Link
            to={`/editarcategoria/${categoria.id}`}
            className="flex w-full items-center justify-center rounded-md bg-indigo-500 px-3 py-2 text-sm font-medium text-white transition hover:bg-indigo-700"
          >
            Editar
          </Link>

          <Link
            to={`/deletarcategoria/${categoria.id}`}
            className="flex w-full items-center justify-center rounded-md bg-red-500 px-3 py-2 text-sm font-medium text-white transition hover:bg-red-700"
          >
            Deletar
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CardCategoria;
