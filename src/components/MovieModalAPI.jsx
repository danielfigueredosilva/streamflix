import React, { useState } from "react";
import "../components/FilmeModal.css";
import { Botao, BotaoIcone } from "./Button";

const MovieModalAPI = ({ movie, onClose }) => {
  const [showTrailer, setShowTrailer] = useState(false);

 
  const formatDate = (dateString) => {
    return new Date(dateString).getFullYear();
  };



  // URL da imagem de backdrop
  const backdropUrl = movie.backdrop_path 
    ? `https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`
    : movie.poster_path 
    ? `https://image.tmdb.org/t/p/w1280${movie.poster_path}`
    : 'https://via.placeholder.com/1280x720/333/666?text=Imagem+Indisponível';

 

  // Gêneros (você precisará mapear os IDs para nomes)
  const genresMap = {
    28: "Ação",
    35: "Comédia", 
    878: "Ficção Científica",
    // Adicione mais gêneros conforme necessário
  };

  const genres = movie.genre_ids?.map(id => genresMap[id] || "Desconhecido").join(", ");

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>×</button>
        
        {showTrailer ? (
          <div className="trailer-container">
            <iframe
              width="100%"
              height="400"
              src={`https://www.youtube.com/embed/...`} // Você precisará buscar o trailer
              title={`Trailer - ${movie.title}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <button 
              className="btn-back"
              onClick={() => setShowTrailer(false)}
            >
              ← Voltar aos Detalhes
            </button>
          </div>
        ) : (
          <>
            <div className="modal-hero" style={{ 
              backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(20,20,20,1) 100%), url(${backdropUrl})` 
            }}>
              <div className="hero-content">
                <h1 className="movie-title">{movie.title}</h1>
                <div className="movie-actions">
                  <Botao size="medium" >Iniciar </Botao>
                  <Botao
                    size="medium" 
                    onClick={() => setShowTrailer(true)}
                  >Assitir Trailler</Botao>
                  <BotaoIcone size="medium" > + </BotaoIcone>
                </div>
              </div>
            </div>

            <div className="modal-details">
              <div className="movie-meta">
                <span className="match-rate">
                  {Math.round(movie.vote_average * 10)}% compatível
                </span>
                <span className="year">{formatDate(movie.release_date)}</span>
                <span className="duration">
                  +1H
                </span>
                <span className="quality">HD</span>
              </div>

              <div className="movie-info-grid">
                <div className="info-column">
                  <div className="info-section">
                    <h3>Sinopse</h3>
                    <p className="synopsis">
                      {movie.overview || "Sinopse não disponível."}
                    </p>
                  </div>
                  
                
                </div>
                
                <div className="info-column">
                  <div className="info-section">
                    <h3>Gêneros</h3>
                    <p className="genres">{genres }</p>
                  </div>
                  
                  <div className="info-section">
                    <h3>Classificação</h3>
                    <p className="rating">
                      {movie.adult ? "18+" : "Livre"}
                    </p>
                  </div>

                 
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default MovieModalAPI;