import { useNavigate, useParams } from "react-router-dom";
import { deletar } from "../../../service/Service";

function DeletarProduto() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  async function confirmarExclusao() {
    if (!id) return;

    try {
      await deletar(`/produtos/${id}`);
      alert("Produto apagado com sucesso!");
      navigate("/produtos");
    } catch (error) {
      console.error("Erro ao apagar produto:", error);
      alert("Erro ao apagar o produto!");
    }
  }

  return (
    <div className="container mx-auto w-full max-w-md px-4 pt-20 md:pt-6">
      <h1 className="py-4 text-center text-3xl md:text-4xl">Deletar Produto</h1>
      <p className="mb-4 text-center text-base font-semibold md:text-lg">
        Você tem certeza de que deseja apagar o produto a seguir?
      </p>

      <div className="flex flex-col justify-between overflow-hidden rounded-2xl border">
        <header className="bg-slate-600 px-4 py-2 text-lg font-bold text-white md:px-6 md:text-2xl">
          Produto
        </header>
        <p className="h-full bg-white p-4 text-xl md:p-8 md:text-3xl">Nome do Produto</p>

        <div className="flex flex-row">
          <button
            onClick={() => navigate("/produtos")}
            className="w-full bg-red-500 py-2 text-base text-slate-100 hover:bg-red-700 md:text-lg"
          >
            Não
          </button>
          <button
            onClick={confirmarExclusao}
            className="flex w-full items-center justify-center bg-teal-600 py-2 text-base text-slate-100 hover:bg-teal-800 md:text-lg"
          >
            <span>Sim</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeletarProduto;
