import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Slider from 'react-slick'; 

const API_KEY = '04134eb66512d31bfadb77c6a5206905'; 

function SecaoCategoria({ genreId, genreName }) {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);


    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6, 
        slidesToScroll: 6, 
        arrows: true, 
    };

    useEffect(() => {
        async function fetchMovies() {
            try {
                const response = await axios.get(
                    `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=pt-BR&sort_by=popularity.desc&with_genres=${genreId}`
                );
               
                setMovies(response.data.results); 
            } catch (err) {
                console.error(`Erro ao buscar filmes de ${genreName}:`, err);
            } finally {
                setLoading(false);
            }
        }
        fetchMovies();
    }, [genreId, genreName]);

    if (loading) return <div className="secao-container"><p>Carregando filmes de {genreName}...</p></div>;
   
    if (movies.length === 0) return null; 

    return (
        <div className="secao-container">
            <h2 className="secao-title">{genreName}</h2>
            
            
            <Slider {...settings}>
                {movies.map(movie => (
        
                    <div key={movie.id} className="movie-card">
                        <img 
                            src={movie.poster_path ? `https://image.tmdb.org/t/p/w200${movie.poster_path}` : 'https://via.placeholder.com/150x225?text=Sem+Poster'} 
                            alt={movie.title} 
                            className="movie-poster"
                        />
                        <p className="movie-title">
                            {movie.title}
                        </p>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default SecaoCategoria;
