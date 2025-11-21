import { useState } from "react";
import { API } from "../components/API/api";
import { useNavigate } from "react-router-dom";
import "./Cadastro.css";

export default function Cadastro() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [msg, setMsg] = useState("");

  const navigate = useNavigate();

  const cadastrar = async () => {
    try {
      const response = await fetch(`${API}/registrar/`, {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          senha,
        }),
      });

      const data = await response.json();
      setMsg(data.msg || data.erro || "Sem retorno");
    } catch (error) {
      setMsg("Erro ao conectar com o servidor");
    }
  };

  return (
    <div style={{ width: 300, margin: "50px auto" }}>
      <h2>Cadastro</h2>

      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Senha"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
      />

      <button onClick={cadastrar}>Cadastrar</button>
      <button onClick={() => {navigate('/login')}}>Login</button>

      {msg && <p>{msg}</p>}
    </div>
  );
}
