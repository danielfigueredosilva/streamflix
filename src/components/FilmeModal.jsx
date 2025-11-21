import React, { useState } from "react";
import "../components/FilmeModal.css";
import { Botao, BotaoIcone } from "../components/Button";
import { adicionarMinhaLista  } from "../pages/MinhaLista";

const ModalFilme = ({ movie, onClose }) => {
  const [showTrailer, setShowTrailer] = useState(false);

  const trailerIds = {
    "Interestelar": "zSWdZVtXT7E",
    "Duna": "8g18jFHCLXk",
    "Oppenheimer": "bK6ldnjE3Y0"
  };

  const trailerUrl = `https://www.youtube.com/embed/${trailerIds[movie.title] || 'zSWdZVtXT7E'}?autoplay=1&mute=1&controls=1&showinfo=0&rel=0`;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>×</button>
        
        {showTrailer ? (
          <div className="trailer-container">
            <iframe
              width="100%"
              height="400"
              src={trailerUrl}
              title={`Trailer - ${movie.title}`}
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
              backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(20,20,20,1) 100%), url(${movie.backdropUrl || movie.posterUrl})` 
            }}>
              <div className="hero-content">
                <h1 className="movie-title">{movie.title}</h1>
                <div className="movie-actions">
                  <Botao size="medium" >Assitir</Botao>
                  <Botao 
                    size="medium" 
                    onClick={() => setShowTrailer(true)}
                  >Assitir ao Trailler</Botao>
                  <BotaoIcone 
                    size="medium"
                    onClick={() => adicionarMinhaLista(movie)}
                    >
                   +
                  </BotaoIcone>
                </div>
              </div>
            </div>

             <div className="modal-details">
          <div className="movie-meta">
            <span className="match-rate">99% compatível</span>
            <span className="year">{movie.year}</span>
            <span className="duration">{movie.duration}</span>
            <span className="quality">HD</span>
          </div>

          <div className="movie-info-grid">
            <div className="info-column">
              <div className="info-section">    
                <h3>Sinopse</h3>
                <p className="synopsis">{movie.synopsis}</p>
              </div>
              
              <div className="info-section">
                <h3>Elenco</h3>
                <p className="cast">{movie.cast.join(", ")}</p>
              </div>
            </div>
            
            <div className="info-column">
              <div className="info-section">
                <h3>Gêneros</h3>
                <p className="genres">{movie.genres?.join(", ") || "Ação, Drama"}</p>
              </div>
              
              <div className="info-section">
                <h3>Classificação</h3>
                <p className="rating">{movie.rating || "16+"}</p>
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

export default ModalFilme;