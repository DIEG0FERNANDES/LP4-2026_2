import "./index.css";
const Header = () => {
  return (
    <>
      <div className="header">
        <a href="/" className="title">
          FILMES
        </a>
        <nav>
          <a href="/">Inicio</a>
          <a href="/listaFilmes">Lista</a>
        </nav>
      </div>
    </>
  );
};
export default Header;
