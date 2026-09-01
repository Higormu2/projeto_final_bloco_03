import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { atualizar, buscar, cadastrar } from "../../../service/Service";
import type Categoria from "../../../models/Categoria";

function FormCategoria() {
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

  function atualizarEstado(e: React.ChangeEvent<HTMLInputElement>) {
    setCategoria({
      ...categoria,
      [e.target.name]: e.target.value,
    });
  }

  async function gerarNovaCategoria(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (id !== undefined) {
        await atualizar(`/categorias/${id}`, categoria, setCategoria);
        alert("Categoria atualizada com sucesso!");
      } else {
        await cadastrar("/categorias", categoria, setCategoria);
        alert("Categoria cadastrada com sucesso!");
      }
      navigate("/categorias");
    } catch (error) {
      console.error("Erro ao salvar categoria:", error);
      alert("Erro ao salvar a categoria!");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="container mx-auto flex flex-col items-center justify-center px-2 pt-4">
      <h1 className="my-8 text-center text-3xl md:text-4xl">
        {id !== undefined ? "Editar" : "Cadastrar"} Categoria
      </h1>

      <form
        onSubmit={gerarNovaCategoria}
        className="flex w-full max-w-md flex-col gap-4 px-2 md:max-w-1/2"
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="nome">Categoria</label>
          <input
            type="text"
            placeholder="Categoria"
            name="nome"
            value={categoria.nome || ""}
            onChange={atualizarEstado}
            className="rounded border-2 border-slate-700 bg-white p-2 text-base md:text-lg"
            required
          />
        </div>

        <button
          className="mx-auto flex w-full justify-center rounded
           bg-slate-400 px-2 py-2 text-base text-slate-100
            hover:bg-slate-800 md:w-1/2 md:text-lg"
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? <span>Salvando...</span> : <span>{id !== undefined ? "Atualizar" : "Cadastrar"}</span>}
        </button>
      </form>
    </div>
  );
}

export default FormCategoria;