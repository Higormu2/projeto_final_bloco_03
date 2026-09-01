import CardProdutos from "../cardprodutos/CardProdutos";

function ListaProdutos() {
  return (
    <div className="mt-6 flex justify-center md:mt-8">
      <div className="container m-2 flex flex-col md:my-0">
        <div className="mb-4 grid grid-cols-2 gap-3 p-2 sm:gap-4 md:mb-0 md:p-4 lg:grid-cols-3 lg:gap-6 xl:grid-cols-5 2xl:grid-cols-5">
          <CardProdutos />
          <CardProdutos />
          <CardProdutos />
        </div>
      </div>
    </div>
  );
}

export default ListaProdutos;
