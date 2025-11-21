import React, { useEffect, useState } from "react";
import './MeusFilmes.css'
import { API } from '../components/API/api'
import { useNavigate } from "react-router-dom";

export default function MeusFilmes() {
  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState(null);

  const navigate = useNavigate();

  // Função para buscar os filmes
  const fetchFilmes = async () => {
    try {
      const response = await fetch(`${API}/filmes/`);
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

            {/* Botão de detalhes */}
            <button
              onClick={() => navigate(`/filme/${filme.id}`, { state: { filme } })}
            >
              Detalhes
            </button>
          </div>

          
        ))
      )}
    </div>
  );
}
