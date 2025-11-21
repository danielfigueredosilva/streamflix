import { useState } from "react";
import { API } from "../components/API/api";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [msg, setMsg] = useState("");

  const navigate = useNavigate();

  const logar = async () => {
    const response = await fetch(`${API}/login/`, {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, senha }),
    });

    const data = await response.json();

    if (response.ok) {
      navigate("/");
    } else {
      setMsg(data.erro);
    }
  };

  return (
    <div style={{ width: 300, margin: "50px auto" }}>
      <h2>Login</h2>

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

      <button onClick={logar}>Entrar</button>

      {msg && <p>{msg}</p>}
    </div>
  );
}
