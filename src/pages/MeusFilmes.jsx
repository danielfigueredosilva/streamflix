import React, { useEffect, useState } from "react";
import './MeusFilmes.css'

export default function MeusFilmes() {
  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState(null);

  // Função para buscar os filmes
  const fetchFilmes = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/forum/filmes/");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setFilmes(data);
    } catch (err) {
      console.error("Erro ao buscar filmes:", err);
      setErro(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Chama a função quando o componente monta
  useEffect(() => {
    fetchFilmes();
  }, []);

  if (loading) return <p>Carregando filmes...</p>;
  if (erro) return <p>Erro ao carregar filmes: {erro}</p>;

  return (
    <div className="filmes-container">
      {filmes.length === 0 ? (
        <p>Nenhum filme cadastrado.</p>
      ) : (
        filmes.map((filme) => (
          <div key={filme.id} className="filme-card">
            <h2>{filme.titulo}</h2>
            <img src={filme.poster} alt={filme.titulo} width="200" />
            <p>{filme.descricao}</p>
            <p><strong>Lançamento:</strong> {filme.data_lancamento}</p>
            <p><strong>Avaliação:</strong> {filme.avaliacao}</p>
            {filme.user && <p><strong>Criado por:</strong> {filme.user}</p>}
          </div>
        ))
      )}
    </div>
  );
}




// import { useState } from "react";
// import { API } from "../components/API/api";

// export default function CriarFilme() {
//   const [titulo, setTitulo] = useState("");
//   const [descricao, setDescricao] = useState("");
//   const [poster, setPoster] = useState("");
//   const [dataLancamento, setDataLancamento] = useState("");
//   const [avaliacao, setAvaliacao] = useState(0);
//   const [msg, setMsg] = useState("");

//   const getCookie = (name) => {
//     let cookieValue = null;
//     if (document.cookie && document.cookie !== "") {
//       const cookies = document.cookie.split(";");
//       for (let cookie of cookies) {
//         cookie = cookie.trim();
//         if (cookie.startsWith(name + "=")) {
//           cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
//           break;
//         }
//       }
//     }
//     return cookieValue;
//   };

//   const criarFilme = async () => {
//     const csrftoken = getCookie("csrftoken");

//     try {
//       const response = await fetch(`${API}/filmes/criar/`, {
//         method: "POST",
//         credentials: "include", // envia o cookie de sessão
//         headers: {
//           "Content-Type": "application/json",
//           "X-CSRFToken": csrftoken, // envia CSRF token
//         },
//         body: JSON.stringify({
//           titulo,
//           descricao,
//           poster,
//           data_lancamento: dataLancamento,
//           avaliacao,
//         }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         setMsg(data.msg);
//         setTitulo("");
//         setDescricao("");
//         setPoster("");
//         setDataLancamento("");
//         setAvaliacao(0);
//       } else {
//         setMsg(data.erro);
//       }
//     } catch (error) {
//       setMsg("Erro ao criar filme");
//       console.error(error);
//     }
//   };

//   return (
//     <div style={{ width: 400, margin: "50px auto" }}>
//       <h2>Criar Filme</h2>

//       <input type="text" placeholder="Título" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
//       <input type="text" placeholder="Descrição" value={descricao} onChange={(e) => setDescricao(e.target.value)} />
//       <input type="text" placeholder="URL do Poster" value={poster} onChange={(e) => setPoster(e.target.value)} />
//       <input type="date" placeholder="Data de Lançamento" value={dataLancamento} onChange={(e) => setDataLancamento(e.target.value)} />
//       <input type="number" placeholder="Avaliação" value={avaliacao} onChange={(e) => setAvaliacao(Number(e.target.value))} />

//       <button onClick={criarFilme}>Criar Filme</button>

//       {msg && <p>{msg}</p>}
//     </div>
//   );
// }
