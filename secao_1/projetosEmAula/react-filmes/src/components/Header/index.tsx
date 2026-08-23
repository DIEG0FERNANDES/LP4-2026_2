import "./index.css";
const Header = () => {
  return (
    <>
      <div className="header">
        FILMES
        <nav>
          <button>
            <a href="/">Inicio</a>
          </button>
          <button>
            <a href="/about">Sobre</a>
          </button>
        </nav>
      </div>
    </>
  );
};
export default Header;
