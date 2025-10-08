import React, { useState } from "react";
import "./MyCarousel.css";
import MovieModal from "../FilmeModal";

const MyCarousel = () => {
  const [modalAberto, setModalAberto] = useState(false);
  const [filmeSelecionado, setFilmeSelecionado] = useState(null);

  const filmes = [
    {
      title: "Interestelar",
      synopsis: "Uma equipe de exploradores viaja através de um buraco de minhoca no espaço em uma tentativa de garantir a sobrevivência da humanidade.",
      cast: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"],
      duration: "2h 49min",
      year: "2014",
      genres: ["Ficção Científica", "Drama"],
      backdropUrl: "https://p4.wallpaperbetter.com/wallpaper/527/320/1017/interstellar-movie-movies-astronaut-sea-wallpaper-preview.jpg"
    },
    {
      title: "Duna",
      synopsis: "Paul Atreides une-se a Chani e aos Fremen em busca de vingança contra os conspiradores que destruíram sua família.",
      cast: ["Timothée Chalamet", "Zendaya", "Rebecca Ferguson"],
      duration: "2h 35min",
      year: "2021",
      genres: ["Ficção Científica", "Aventura"],
      backdropUrl: "https://preview.redd.it/1920x1080-interstellar-black-hole-wallpaper-by-me-made-in-v0-ba6o4k61m47f1.png"
    },
    {
      title: "Oppenheimer",
      synopsis: "A história do físico J. Robert Oppenheimer e seu papel no desenvolvimento da bomba atômica durante a Segunda Guerra Mundial.",
      cast: ["Cillian Murphy", "Emily Blunt", "Matt Damon"],
      duration: "3h 00min",
      year: "2023",
      genres: ["Biografia", "Drama"],
      backdropUrl: "https://preview.redd.it/1920x1080-interstellar-black-hole-wallpaper-by-me-made-in-v0-ba6o4k61m47f1.png"
    }
  ];

  const abrirModal = (filme) => {
    setFilmeSelecionado(filme);
    setModalAberto(true);
  };

  return (
    <>
      <div id="myCarousel" className="container carousel slide mb-6" data-bs-ride="carousel">
        {/* Indicadores */}
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" className="active" aria-current="true" aria-label="Slide 3"></button>
        </div>

        {/* Slides */}
        <div className="carousel-inner rounded-5">
          {filmes.map((filme, index) => (
            <div key={index} className={`carousel-item ${index === 2 ? 'active' : ''}`}>
              <img src={filme.backdropUrl} alt={filme.title} className="d-block w-100 carousel-img"/>
              <div className="container">
                <div className="carousel-caption text-start">
                  <h1>{filme.title}</h1>
                  <p className="opacity-75">
                    {filme.synopsis}
                  </p>
                  <p>
                    <button 
                      className="btn btn-lg btn-primary rounded-5" 
                      onClick={() => abrirModal(filme)}
                    >
                      Saiba Mais
                    </button>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {modalAberto && (
        <MovieModal 
          movie={filmeSelecionado} 
          onClose={() => setModalAberto(false)} 
        />
      )}
    </>
  );
};

export default MyCarousel;