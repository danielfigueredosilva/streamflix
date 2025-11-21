import { useState } from "react";
import { API } from "../components/API/api";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
 
  const [erro, setErro] = useState("");

  const navigate = useNavigate();

  const logar = async () => {
   
   
    setErro("");
    try {
      const response = await fetch(`${API}/login/`, {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, senha }),
      });

      const data = await response.json();

      if (response.ok) {
      
        setTimeout(() => {
          navigate("/MeusFilmes");
        }, 1000);
      } else {
        setErro(data.erro || "Erro ao fazer login. Tente novamente.");
      }
    } catch (error) {
      setErro("Erro de conexão. Verifique sua internet e tente novamente.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    logar();
  };

  return (
    <div className="container-login">
      <div className="card-login">
        <h2 className="titulo-login">Login</h2>

        <form onSubmit={handleSubmit} className="formulario-login">
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input-login"
            required
          />

          <input
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            className="input-login"
            required
          />

          <button type="submit" className="botao-entrar">
            Entrar
          </button>       
        </form>
        <button 
          onClick={() => navigate('/cadastro')}
          className="botao-cadastrar"
          >
          Criar Conta
        </button>
          {erro && <div className="mensagem-erro">{erro}</div>}
      </div>
    </div>
  );
}