import { useState } from "react";
import { API } from "../components/API/api";

export default function Cadastro() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [msg, setMsg] = useState("");

  const cadastrar = async () => {
    const response = await fetch(`${API}/registrar/`, {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, senha }),
    });

    const data = await response.json();
    setMsg(data.msg || data.erro);
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

      {msg && <p>{msg}</p>}
    </div>
  );
}
