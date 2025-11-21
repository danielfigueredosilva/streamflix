import React from "react";
import "./FilmeCard.css";

const FilmeCard = ({ filme }) => {
  return (
    <div className="filme-card">
      <img src={filme.poster} className="poster" />
      <h2>{filme.titulo}</h2>
      <p>
        {filme.ano} - {filme.genero}
      </p>
      <span>⭐️ {filme.nota} </span>
    </div>
  );
};
export default FilmeCard;