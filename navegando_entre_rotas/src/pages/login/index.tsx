import { useState } from "react";
import "./styles.css";
import { useNavigate } from "react-router-dom";

const login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e: any) => {
    e.preventDefault();

    if (email && password) {
      navigate("/home");
    }
  };

  return (
    <>
      <div className="login-container">
        <div className="login-card">
          <h1 className="login-title">Login</h1>
          <form action="" className="login-form" onSubmit={handleLogin}>
            <div className="login-input-group">
              <label htmlFor="email" className="login-label">
                E-mail
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Digite seu e-mail"
                className="login-input"
              />
            </div>
            <div>
              <label htmlFor="password" className="login-label">
                Senha
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Digite sua senha"
                className="login-input"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default login;
