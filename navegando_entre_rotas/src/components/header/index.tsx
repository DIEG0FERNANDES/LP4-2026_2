import { useNavigate } from "react-router-dom";

import "./styles.css";

const header = () => {
  const navigate = useNavigate();

  const headLogout = () => {
    navigate("/login");
  };
  return (
    <>
      <div className="header">
        <div className="header-container">
          <div className="header-logo">
            <h1>Meu App</h1>
          </div>

          <nav className="header-nav">
            <button onClick={() => navigate("/home")}>Home</button>
          </nav>
          <nav className="header-nav">
            <button onClick={() => navigate("/about")}>Sobre</button>
          </nav>

          <div className="header-user">
            <span>Usuário: João</span>
            <button onClick={headLogout} className="logou-btn">
              Sair
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default header;
