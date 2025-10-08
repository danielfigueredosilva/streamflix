import React, { useEffect, useState } from "react";

export default function ListaFilmes() {
  const [filmes, setFilmes] = useState([]);
  const API_KEY = "04134eb66512d31bfadb77c6a5206905"; // sua chave TMDB

  useEffect(() => {
    async function carregarFilmes() {
      try {
        const resposta = await fetch(
          `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=pt-BR&page=1`
        );
        const dados = await resposta.json();
        setFilmes(dados.results || []);
      } catch (erro) {
        console.error("Erro ao carregar filmes:", erro);
      }
    }

    carregarFilmes();
  }, []);

  return (
    <div>
      <h1>Filmes Populares</h1>

      {filmes.length === 0 ? (
        <p>Carregando filmes...</p>
      ) : (
        <ul>
          {filmes.map((filme) => (
            <li key={filme.id}>
              <img
                src={`https://image.tmdb.org/t/p/w200${filme.poster_path}`}
                alt={filme.title}
              />
              <p>{filme.title}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
