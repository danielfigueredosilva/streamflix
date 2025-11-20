import React, { useEffect, useState } from "react";
import { getPopulares } from "../components/API/tmdb";
import MovieModalAPI from "../components/MovieModalAPI";

export default function ListaFilmes() {
  const [filmes, setFilmes] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  useEffect(() => {
    getPopulares()
      .then(setFilmes)
      .catch(err => console.error("Erro ao buscar filmes:", err));
  }, []);

  const handleOpenModal = (filme) => {
    setSelectedMovie(filme);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedMovie(null);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1 className="text-white mb-4
      
      
      
      
      
      
      
      ">🎬 Filmes Populares</h1>

      {filmes.length === 0 ? (
        <p>Carregando filmes...</p>
      ) : (
        <ul
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "16px",
            listStyle: "none",
            padding: 0,
          }}
        >
          {filmes.map((filme) => (
            <li
              key={filme.id}
              style={{
                textAlign: "center",
                background: "#111",
                borderRadius: "12px",
                padding: "10px",
                color: "white",
                cursor: "pointer",
                transition: "transform 0.2s ease",
              }}
              onClick={() => handleOpenModal(filme)}
              onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
              onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
            >
              <img
                src={`https://image.tmdb.org/t/p/w200${filme.poster_path}`}
                alt={filme.title}
                style={{
                  width: "100%",
                  borderRadius: "10px",
                }}
              />
              <p style={{ marginTop: "10px", fontWeight: "bold" }}>
                {filme.title}
              </p>
              <p style={{ fontSize: "0.8rem", color: "#ccc", marginTop: "5px" }}>
                ⭐ {filme.vote_average.toFixed(1)}
              </p>
            </li>
          ))}
        </ul>
      )}

      {/* Modal */}
      {isModalOpen && selectedMovie && (
        <MovieModalAPI 
          movie={selectedMovie} 
          onClose={handleCloseModal} 
        />
      )}
    </div>
  );
}

