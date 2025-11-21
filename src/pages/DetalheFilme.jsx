import { useLocation } from "react-router-dom";

export default function DetalheFilme() {
  const location = useLocation();
  const { filme } = location.state || {};

  if (!filme) return <p>Filme não encontrado.</p>;

  return (
    <div>
      <h1>{filme.titulo}</h1>
      <img src={filme.poster} alt={filme.titulo} width="300" />
      <p>{filme.descricao}</p>
      <p><strong>Lançamento:</strong> {filme.data_lancamento}</p>
      <p><strong>Avaliação:</strong> {filme.avaliacao}</p>
      {filme.user && <p><strong>Criado por:</strong> {filme.user}</p>}
    </div>
  );
}
