import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";
import useMediaQuery from "@/hooks/useMediaQuery";
import { Link } from 'react-router-dom';
import Nav from "@/shared/NavbarText";

  const Navbar = () => {
  const flexBetween = "flex items-center justify-end";
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <nav>
      <div
        className={`bg-primary-100 drop-shadow ${flexBetween} fixed top-0 z-30 w-full py-6`}
      >
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-8`}>
            <img alt="logo" src={Logo} />
            <Nav>Receitas</Nav>
            {isAboveMediumScreens ? (
              <div className={`${flexBetween} w-full`}>
                <div className={`${flexBetween} gap-10`}>
                <Link to="/">Home</Link>
                <Link to="/pesquisa-nomes">Pesquisar receitas</Link>
                <Link to="/pesquisa-letras">Pesquisar por letra</Link>
                <Link to="/pesquisa-ingredientes">Pesquisar por ingrediente</Link>
                </div>
              </div>
            ) : (
              <button
                className="rounded-full bg-secondary-500 p-2"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <Bars3Icon className="h-6 w-6 text-white" />
              </button>
            )}
          </div>
        </div>
      </div>

      {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
          <div className="flex justify-end p-12">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className="h-6 w-6 text-gray-400" />
            </button>
          </div>
          <div className="ml-[33%] flex flex-col gap-10 text-2xl">
          <Link to="/">Home</Link>
          <Link to="/pesquisa-nomes">Pesquisar receitas</Link>
          <Link to="/pesquisa-letras">Pesquisar por letra</Link>
          <Link to="/pesquisa-ingredientes">Pesquisar por ingrediente</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
