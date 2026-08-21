import { useNavigate } from "react-router-dom";
import { Header } from "../../components";
import "./styles.css";
const about = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <div className="about-container">
        <div className="about-card">
          <h1>Sobre o Projeto</h1>
          <p>
            Este é um projeto React com Typescript desenvolvido utilizando
            conceitos de rotas, componentes, hooks e boas praticas com o
            desenvolvimento web e frameworks avançados.
          </p>

          <button onClick={() => navigate("/home")} className="back-btn">
            Voltar para Home
          </button>
        </div>
      </div>
    </>
  );
};
export default about;
