import { useState } from "react";
import FormProduto from "../formproduto/FormProduto";

function ModalProduto() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="rounded border px-4 py-2 transition hover:bg-white hover:text-slate-800"
      >
        Novo Produto
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-4">
          <div className="w-full max-w-2xl rounded-2xl bg-white p-4 shadow-xl">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-bold">Novo Produto</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="rounded bg-slate-200 px-3 py-1 text-sm hover:bg-slate-300"
              >
                Fechar
              </button>
            </div>

            <FormProduto />
          </div>
        </div>
      )}
    </>
  );
}

export default ModalProduto;
