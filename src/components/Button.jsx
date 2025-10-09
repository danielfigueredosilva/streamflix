import React from "react";
import "../components/Button.css"; // Vamos criar este CSS


export const Botao = ({ children, onClick, size = "medium" }) => {
  return (
    <button 
      className={`btn-play btn-${size}`}
      onClick={onClick}
    >
      <span className="play-icon">▶</span>
      {children}
    </button>
  );
};


export const BotaoIcone = ({ children, onClick, size = "big" }) => {
  return (
    <button 
      className={`btn-secondary btn-${size}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};