import { FacebookLogo, InstagramLogo, LinkedinLogo } from "@phosphor-icons/react";



function Footer() {
  const data = new Date().getFullYear();

  return (
    <footer className="w-full border-0 bg-indigo-900 text-white shadow-none">
        <div className="container mx-auto flex flex-col items-center px-4 py-6 text-center sm:px-6 md:px-8">

          <p className="text-lg font-bold sm:text-xl">
            Farmácia Generation | Copyright: {data}
          </p>

          <p className="mt-2 text-base sm:text-lg">
            Acesse nossas redes sociais
          </p>

          <div className="mt-3 flex gap-3">
            <LinkedinLogo
              size={40}
              weight="bold"
              className="sm:h-12 sm:w-12"
            />

            <InstagramLogo
              size={40}
              weight="bold"
              className="sm:h-12 sm:w-12"
            />

            <FacebookLogo
              size={40}
              weight="bold"
              className="sm:h-12 sm:w-12"
            />
          </div>

        </div>
      </footer>
  );
}

export default Footer;
