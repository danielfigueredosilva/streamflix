import { useState } from "react";
import { API } from '../components/API/api.jsx'
import "./AdicionaFilme.css"; // <-- importa o CSS externo

export default function AdicionaFilme() {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [poster, setPoster] = useState("");
  const [dataLancamento, setDataLancamento] = useState("");
  const [avaliacao, setAvaliacao] = useState("");
  const [mensagem, setMensagem] = useState("");

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
      credentials: "include",
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
    
    <div className="adicionar-container">
      <h1 className="adicionar-title">Adicionar Filme</h1>

      <form onSubmit={enviarFilme} className="adicionar-form">
        <input
          className="adicionar-input"
          type="text"
          placeholder="Título"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          required
        />

        <textarea
          className="adicionar-textarea"
          placeholder="Descrição"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          required
        />

        <input
          className="adicionar-input"
          type="text"
          placeholder="URL do Poster"
          value={poster}
          onChange={(e) => setPoster(e.target.value)}
          required
        />

        <input
          className="adicionar-input"
          type="date"
          value={dataLancamento}
          onChange={(e) => setDataLancamento(e.target.value)}
          required
        />

        <input
          className="adicionar-input"
          type="number"
          placeholder="Avaliação (0-10)"
          value={avaliacao}
          onChange={(e) => setAvaliacao(e.target.value)}
          min="0"
          max="10"
          step="0.1"
          required
        />

        <button className="adicionar-button">Salvar Filme</button>
      </form>

      {mensagem && <p className="adicionar-msg">{mensagem}</p>}
    </div>
  );
}
