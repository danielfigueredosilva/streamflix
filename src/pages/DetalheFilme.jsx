import { useLocation, useNavigate } from "react-router-dom";

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
      const response = await fetch(`http://127.0.0.1:8000/api/filmes/${id}/apagar/`, {
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
      navigate("/MeusFilmes"); // redireciona após apagar
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h1>{filme.titulo}</h1>
      <img src={filme.poster} alt={filme.titulo} width="300" />
      <p>{filme.descricao}</p>
      <p><strong>Lançamento:</strong> {filme.data_lancamento}</p>
      <p><strong>Avaliação:</strong> {filme.avaliacao}</p>
      {filme.user && <p><strong>Criado por:</strong> {filme.user}</p>}

      <button 
        onClick={() => apagarFilme(filme.id)} // ✅ passar o id
        style={{ background: "red", color: "#fff", padding: "10px", border: "none", borderRadius: "5px", cursor: "pointer", marginTop: "20px" }}
      >
        Apagar Filme
      </button>
    </div>
  );
}
