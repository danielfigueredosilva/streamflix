import React, { useEffect, useState } from "react";
import { getPopulares } from "../components/API/tmdb";

export default function ListaFilmes() {
  const [filmes, setFilmes] = useState([]);
  
  useEffect(() => {
    getPopulares()
      .then(setFilmes)
      .catch(err => console.error("Erro ao buscar filmes:", err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>🎬 Filmes Populares</h1>

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
              }}
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
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

