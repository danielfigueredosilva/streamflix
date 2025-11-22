import { useLocation, useNavigate } from "react-router-dom";
import './DetalheFilme.css'
import { API } from "../components/API/api";

export default function DetalheFilme() {
  const location = useLocation();
  const navigate = useNavigate();
  const { filme } = location.state || {};

  if (!filme) return <p>Filme não encontrado.</p>;

  // Pegar CSRF token do cookie (se estiver usando SessionAuthentication)
  const getCSRFToken = () => {
    const match = document.cookie.match(/csrftoken=([\w-]+)/);
    return match ? match[1] : "";
  };

  const apagarFilme = async (id) => {
    try {
      const response = await fetch(`${API}/filmes/${id}/apagar/`, {
        method: 'DELETE',
        credentials: "include", // envia cookies de sessão
        headers: {
          "X-CSRFToken": getCSRFToken(),
        },
      });

      if (!response.ok) {
        const text = await response.text();
        console.error('Erro ao deletar filme:', text);
        return;
      }

      const data = await response.json();
      console.log(data.message);
      navigate("/MeusFilmes");
    } catch (err) {
      console.error(err);
    }
  };

  return (
  <div className="detalhe-container">
    
    <img className="detalhe-poster" src={filme.poster} alt={filme.titulo} />

    <div className="detalhe-info">
      <h1>{filme.titulo}</h1>
      <div class="textos" >
        <p>{filme.descricao}</p>
        <p><strong>Lançamento:</strong> {filme.data_lancamento}</p>
        <p><strong>Avaliação:</strong> {filme.avaliacao}</p>
      </div>
      {filme.user && <p><strong>Criado por:</strong> {filme.user}</p>}

      <button 
        className="btn-delete"
        onClick={() => apagarFilme(filme.id)}
      >
        Apagar Filme
      </button>
    </div>
  </div>
  );

}
