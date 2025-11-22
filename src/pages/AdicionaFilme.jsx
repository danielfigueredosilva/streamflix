import { useState, useEffect } from "react";
import { API } from '../components/API/api.jsx'

export default function AdicionaFilme() {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [poster, setPoster] = useState("");
  const [dataLancamento, setDataLancamento] = useState("");
  const [avaliacao, setAvaliacao] = useState("");
  const [mensagem, setMensagem] = useState("");

  // -------------------------------
  // PEGAR TOKEN CSRF DO COOKIE
  // -------------------------------
  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
  }

  const enviarFilme = async (e) => {
    e.preventDefault();

    const csrftoken = getCookie("csrftoken");

    const response = await fetch(`${API}/filmes/criar/`, {
      method: "POST",
      credentials: "include", // ESSENCIAL PARA ENVIAR COOKIES
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": csrftoken,
      },
      body: JSON.stringify({
        titulo,
        descricao,
        poster,
        data_lancamento: dataLancamento,
        avaliacao,
      }),
    });

    const data = await response.json();

    if (response.ok) {
      setMensagem("📌 Filme criado com sucesso!");
      setTitulo("");
      setDescricao("");
      setPoster("");
      setDataLancamento("");
      setAvaliacao("");
    } else {
      setMensagem("❌ Erro: " + (data.erro || "Algo deu errado"));
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Adicionar Filme</h1>

      <form onSubmit={enviarFilme} style={styles.form}>
        <input
          style={styles.input}
          type="text"
          placeholder="Título"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          required
        />

        <textarea
          style={styles.textarea}
          placeholder="Descrição"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          required
        />

        <input
          style={styles.input}
          type="text"
          placeholder="URL do Poster"
          value={poster}
          onChange={(e) => setPoster(e.target.value)}
          required
        />

        <input
          style={styles.input}
          type="date"
          value={dataLancamento}
          onChange={(e) => setDataLancamento(e.target.value)}
          required
        />

        <input
          style={styles.input}
          type="number"
          placeholder="Avaliação (0-10)"
          value={avaliacao}
          onChange={(e) => setAvaliacao(e.target.value)}
          min="0"
          max="10"
          step="0.1"
          required
        />

        <button style={styles.button}>Salvar Filme</button>
      </form>

      {mensagem && <p style={styles.msg}>{mensagem}</p>}
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "500px",
    margin: "0 auto",
    padding: "20px",
    background: "rgba(0, 0, 0, 0.75)",
    color: "#fff",
    borderRadius: "10px",
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  input: {
    padding: "10px",
    borderRadius: "5px",
    border: "none",
    outline: "none",
    
  },
  textarea: {
    padding: "10px",
    borderRadius: "5px",
    height: "80px",
    border: "none",
    outline: "none",
  },
  button: {
    padding: "12px",
    border: "none",
    borderRadius: "6px",
    background: "#e50914",
    color: "#fff",
    cursor: "pointer",
    fontWeight: "bold",
  },
  msg: {
    marginTop: "15px",
    textAlign: "center",
    fontWeight: "bold",
  },
};
