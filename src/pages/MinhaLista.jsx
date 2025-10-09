import React, { useEffect, useState } from "react";
import MovieModalAPI from "../components/MovieModalAPI";

//Pega a lista e colocar os filmes ou cria se tiver vazia 
export function adicionarMinhaLista(filme) {
  const minhaLista = JSON.parse(localStorage.getItem("minhaLista")) || [];

  if (!minhaLista.find((item) => item.id === filme.id)) {
    minhaLista.push(filme);
    localStorage.setItem("minhaLista", JSON.stringify(minhaLista));
    // window.dispatchEvent(new Event("listaAtualizada")); // Atualiza contador
    alert("Filme adicionado à Minha Lista!");
  } else {
    alert("Filme já está na lista!");
  }
}

// Alguns filmes estão sem avaliação, evita erro de underned
const formatVote = (vote) => (vote ? vote.toFixed(1) : "N/A");

export default function MinhaLista() {
  const [minhaLista, setMinhaLista] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Carrega lista do localStorage
  useEffect(() => {
    const lista = JSON.parse(localStorage.getItem("minhaLista")) || [];
    setMinhaLista(lista);
  }, []);

  // Remove filme da lista
  const removerFilme = (id) => {
    const novaLista = minhaLista.filter((f) => f.id !== id);
    localStorage.setItem("minhaLista", JSON.stringify(novaLista));
    setMinhaLista(novaLista);
  };

  // Abre modal
  const handleOpenModal = (filme) => {
    setSelectedMovie(filme);
    setIsModalOpen(true);
  };

  // Fecha modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedMovie(null);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>🎬 Minha Lista de Filmes</h1>

      {minhaLista.length === 0 ? (
        <p>Você ainda não adicionou filmes à sua lista.</p>
      ) : (
        <ul
          style={{
            display: "grid",
            gridAutoFlow: "column",
            gap: "16px",
            listStyle: "none",
            padding: 0,
            maxWidth: "200px",
          }}
        >
          {minhaLista.map((filme) => (
            <li
              key={filme.id}
              style={{
                    display: "flex",
                    flexDirection: "column", 
                    justifyContent: "space-between", 
                    textAlign: "center",
                    background: "#111",
                    borderRadius: "12px",
                    padding: "10px",
                    color: "white",
                    cursor: "pointer",
                    transition: "transform 0.2s ease",

              }}
              onClick={() => handleOpenModal(filme)}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
              <img
                src={
                  filme.poster_path
                    ? `https://image.tmdb.org/t/p/w200${filme.poster_path}`
                    : "https://via.placeholder.com/200x300?text=Imagem+Indisponível"
                }
                alt={filme.title}
                style={{
                  width: "200px",
                  borderRadius: "10px",
                }}
              />
              <p style={{ marginTop: "10px", fontWeight: "bold" }}>
                {filme.title || "Título indisponível"}
              </p>
              <p
                style={{
                  fontSize: "0.8rem",
                  color: "#ccc",
                  marginTop: "5px",
                }}
              >
                ⭐ {formatVote(filme.vote_average)}
              </p>

              {/* Botão para remover filme */}
              <button
                style={{
                  marginTop: "8px",
                  padding: "6px 10px",
                  background: "#e50914",
                  color: "white",
                  border: "none",
                  borderRadius: "6px",
                  cursor: "pointer",
                
                }}
                onClick={(e) => {
                  e.stopPropagation(); // impede abrir modal
                  removerFilme(filme.id);
                }}
              >
                Remover
              </button>
            </li>
          ))}
        </ul>
      )}

      {/* Modal de detalhes */}
      {isModalOpen && selectedMovie && (
        <MovieModalAPI movie={selectedMovie} onClose={handleCloseModal} />
      )}
    </div>
  );
}
