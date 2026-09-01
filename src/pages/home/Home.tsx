import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="flex w-full flex-1 items-center justify-center bg-[#bfe5ec] px-4 py-8 text-slate-900">
      <div className="container mx-auto grid min-h-[70vh] w-full max-w-6xl grid-cols-1 items-center gap-8 md:grid-cols-2 md:px-8">
        <div className="flex flex-col items-center justify-center gap-5 md:items-start">
          <h2 className="mx-auto text-center text-4xl font-bold leading-tight md:text-center md:text-6xl">
            Seja bem vindo!
          </h2>

          <p className="text-center text-lg md:text-left md:text-2xl">
            Aqui você encontra Medicamentos e Cosméticos!
          </p>

          <Link
            to="/cadastrarproduto"
            className="mx-auto rounded-md bg-[#4a46a5] px-5 py-3 text-base font-semibold
             text-white shadow-md transition hover:bg-[#3d3a8d]"
          >
            Cadastrar Produto
          </Link>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="relative flex items-center justify-center">
            <div className="absolute h-72 w-72 rounded-full bg-[#d8f0f5] opacity-80 blur-2xl md:h-80 md:w-80" />
            <img
              src="https://i.imgur.com/fyfri1v.png"
              alt="Imagem da página Home"
              className="relative z-10 w-[80%] max-w-md drop-shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;