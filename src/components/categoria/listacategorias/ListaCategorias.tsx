import { useEffect, useState } from "react";
import { buscar } from "../../../service/Service";
import CardCategorias from "../cardcategorias/CardCategorias";
import type Categoria from "../../../models/Categoria";

function ListarCategorias() {
  const [categorias, setCategorias] = useState<Categoria[]>([]);

  async function buscarCategorias() {
    try {
      await buscar("/categorias", setCategorias);
    } catch (error) {
      console.error("Erro ao buscar categorias:", error);
      alert("Erro ao carregar categorias.");
    }
  }

  useEffect(() => {
    buscarCategorias();
  }, []);

  return (
    <div className="flex w-full justify-center overflow-x-hidden">
      <div className="box-border mx-auto mb-4 mt-8 w-full max-w-7xl px-4 py-4 sm:px-6 md:px-8 md:py-6 lg:px-12">
        <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:mb-0 md:gap-6 lg:grid-cols-3">
          {categorias.map((categoria) => (
            <CardCategorias key={categoria.id} categoria={categoria} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ListarCategorias;