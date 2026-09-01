import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type Categoria from "../../../models/Categoria";
import { buscar, deletar } from "../../../service/Service";

function DeletarCategoria() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const [categoria, setCategoria] = useState<Categoria>({} as Categoria);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  async function buscarPorId(idCategoria: string) {
    try {
      await buscar(`/categorias/${idCategoria}`, setCategoria);
    } catch (error) {
      console.error("Erro ao buscar categoria:", error);
      alert("Erro ao carregar categoria.");
    }
  }

  async function deletarCategoria() {
    if (!id) return;

    setIsLoading(true);
    try {
      await deletar(`/categorias/${id}`);
      alert("Categoria apagada com sucesso!");
      navigate("/categorias");
    } catch (error) {
      console.error("Erro ao apagar categoria:", error);
      alert("Erro ao apagar a categoria!");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="container mx-auto w-full max-w-md px-4 pt-4 md:pt-6">
      <h1 className="py-4 text-center text-3xl md:text-4xl">Deletar Categoria</h1>
      <p className="mb-4 text-center text-base font-semibold md:text-lg">
        Você tem certeza de que deseja apagar a categoria a seguir?
      </p>

      <div className="flex flex-col justify-between overflow-hidden rounded-2xl border">
        <header className="bg-slate-600 px-4 py-2 text-lg font-bold text-white md:px-6 md:text-2xl">
          Categoria
        </header>
        <p className="h-full bg-white p-4 text-xl md:p-8 md:text-3xl">{categoria.nome}</p>

        <div className="flex flex-row">
          <button
            onClick={() => navigate("/categorias")}
            className="w-full bg-red-400 py-2 text-base text-slate-100 hover:bg-red-600 md:text-lg"
          >
            Não
          </button>
          <button
            onClick={deletarCategoria}
            disabled={isLoading}
            className="flex w-full items-center justify-center bg-teal-600 py-2 text-base text-slate-100 hover:bg-teal-700 md:text-lg"
          >
            <span>{isLoading ? "Apagando..." : "Sim"}</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeletarCategoria;