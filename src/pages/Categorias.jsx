import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SecaoCategoria from '../components/SecaoCategoria';
import './Categorias.css'; 

const API_KEY = '04134eb66512d31bfadb77c6a5206905'; 


function Categorias() {
    const [genres, setGenres] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchGenres() {
            try {
                const response = await axios.get(
                    `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=pt-BR`
                );
                setGenres(response.data.genres); 
            } catch (err) {
                console.error("Erro ao buscar gêneros:", err);
                setError("Não foi possível carregar as categorias.");
            } finally {
                setLoading(false);
            }
        }
        fetchGenres();
    }, []); 
    if (loading) return <div className="categorias-page"><p className="loading-message">Carregando categorias...</p></div>;
    if (error) return <div className="categorias-page"><p className="loading-message">Erro: {error}</p></div>;
    if (genres.length === 0) return <div className="categorias-page"><p className="loading-message">Nenhuma categoria encontrada.</p></div>;

    return (
        <div className="categorias-page">
            {/* <h1 className="categorias-title">Pegue a Pipoca!</h1> */}
            
            {genres.slice(0, 8).map(genre => ( 
                <SecaoCategoria 
                    key={genre.id} 
                    genreId={genre.id} 
                    genreName={genre.name} 
                />
            ))}
        </div>
    );
}

export default Categorias;
