const API_KEY = "04134eb66512d31bfadb77c6a5206905";
const BASE_URL = "https://api.themoviedb.org/3";

async function get(endpoint) {
  const resp = await fetch(`${BASE_URL}${endpoint}?api_key=${API_KEY}&language=pt-BR`);
  if (!resp.ok) throw new Error("Erro na API TMDB");
  const data = await resp.json();
  return data.results;
}

//Coloca endpoint para chamar no fetch
export async function getPopulares() {
  return get("/movie/popular");
}
