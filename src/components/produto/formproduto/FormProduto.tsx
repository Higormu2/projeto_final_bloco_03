import { useEffect, useState } from "react";
import type Categoria from "../../../models/Categoria";
import { buscar } from "../../../service/Service";

function FormProduto() {
  const [categorias, setCategorias] = useState<Categoria[]>([]);

  useEffect(() => {
    async function carregarCategorias() {
      try {
        await buscar("/categorias", setCategorias);
      } catch (error) {
        console.error("Erro ao carregar categorias:", error);
      }
    }

    carregarCategorias();
  }, []);

  return (
    <div className="container mx-auto my-4 flex flex-col items-center justify-center px-4 py-12 md:h-[81vh]">
      <h1 className="mb-6 text-center text-3xl md:text-4xl">Cadastrar Produto</h1>

      <form className="flex w-full max-w-lg flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="nome" className="font-medium">
            Nome do Produto
          </label>
          <input
            type="text"
            placeholder="Insira aqui o nome do Produto"
            name="nome"
            id="nome"
            required
            className="rounded border-2 border-slate-700 bg-white p-2 text-base focus:outline-none focus:ring-2 focus:ring-slate-500"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="preco" className="font-medium">
            Preço (R$)
          </label>
          <input
            type="number"
            id="preco"
            name="preco"
            min="0"
            step="0.01"
            className="rounded border-2 border-slate-700 bg-white p-2 text-base focus:outline-none focus:ring-2 focus:ring-slate-500"
            placeholder="0.00"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="foto" className="font-medium">
            Foto do Produto
          </label>
          <input
            type="text"
            placeholder="Adicione aqui a URL da foto do Produto"
            name="foto"
            id="foto"
            
            className="rounded border-2 border-slate-700 bg-white p-2 text-base focus:outline-none focus:ring-2 focus:ring-slate-500"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="categoria" className="font-medium">
            Categoria do Produto
          </label>
          <select
            name="categoria"
            id="categoria"
            className="rounded border-2 border-slate-700 bg-white p-2 focus:outline-none focus:ring-2 focus:ring-slate-500"
          >
            <option value="" disabled>
              Selecione uma Categoria
            </option>
            {categorias.map((categoria) => (
              <option key={categoria.id} value={categoria.id}>
                {categoria.nome}
              </option>
            ))}
          </select>
        </div>

        <button
          className="mt-2 flex w-full items-center justify-center rounded bg-slate-400 py-2 text-base text-slate-100 transition-colors hover:bg-slate-800"
          type="submit"
        >
          <span>Cadastrar</span>
        </button>
      </form>
    </div>
  );
}

export default FormProduto;
