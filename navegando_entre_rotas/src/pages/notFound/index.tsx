import { useNavigate } from "react-router-dom";
import notFounde from "../../assets/404.png";
import "./styles.css";

const notFound = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="notFound-container">
        <div className="notFound-content">
          <div className="notFound-image">
            <img src={notFounde} alt="Página não encontrada" />
          </div>
        </div>
      </div>
    </>
  );
};

export default notFound;
