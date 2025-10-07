import React, { useState } from "react";
import FilmeCard from "../components/FilmeCard";

const filmesData = [
  {
    id: "1",
    titulo: "Vingadores: Ultimato",
    ano: 2019,
    genero: "Ação",
    poster:
      "https://cdn.awsli.com.br/2500x2500/1610/1610163/produto/177685212/poster-os-vingadores-ultimato-a-242769bd.jpg",
    nota: 8.4,
  },
  {
    id: "2",
    titulo: "Parasita",
    ano: 2019,
    genero: "Thriller",
    poster:
      "https://uauposters.com.br/media/catalog/product/5/2/523420201013-uau-posters-filmes-parasite-parasite-1.jpg",
    nota: 8.6,
  },
  {
    id: "3",
    titulo: "Coringa",
    ano: 2019,
    genero: "Drama",
    poster:
      "https://cdn.awsli.com.br/2500x2500/1610/1610163/produto/177680448/poster-joker-coringa-a-5cedbd11.jpg",
    nota: 8.4,
  },
  {
    id: "4",
    titulo: "Interestelar",
    ano: 2014,
    genero: "Ficção Científica",
    poster:
      "https://uauposters.com.br/media/catalog/product/cache/1/thumbnail/800x930/9df78eab33525d08d6e5fb8d27136e95/4/1/411320150509-uau-posters-filmes-interestelar-interestellar.jpg",
    nota: 8.6,
  },
  {
    id: "5",
    titulo: "Pantera Negra",
    ano: 2018,
    genero: "Ação",
    poster:
      "https://cdn.awsli.com.br/2500x2500/1610/1610163/produto/177685269/poster-pantera-negra-c-7e8ee5ed.jpg",
    nota: 7.3,
  },
];

const ListaFilmes = () => {
  const [filmes] = useState(filmesData);

  return (
    <div>
      {filmes.map((filme) => (
      <FilmeCard key={filme.id} filme={filme} />
      ))}
    </div>
  );
};
export default ListaFilmes;
