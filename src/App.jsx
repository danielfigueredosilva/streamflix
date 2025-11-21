import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import NavBar from "./components/NavBar.jsx";
import MyCarousel from "./components/carousel/MyCarousel.jsx";
import MultiCarousel, { slidesFiccao, slidesDrama } from "./components/carousel/MultiCarousel.jsx";

import ListaFilmes from "./pages/ListaFilmes";
import Categorias from "./pages/Categorias.jsx";
import MinhaLista from "./pages/MinhaLista.jsx";
import Cadastro from "./pages/Cadastro.jsx";
import Login from "./pages/Login.jsx";
import AdicionaFilme from "./pages/AdicionaFilme.jsx";
import MeusFilmes from "./pages/MeusFilmes";
import DetalheFilme from "./pages/DetalheFilme";

function AppWrapper() {
  const location = useLocation();

  // Páginas públicas que não exibem NavBar
  const publicPaths = ["/", "/login", "/cadastro"];
  const showNavBar = !publicPaths.includes(location.pathname);

  return (
    <>
      {showNavBar && <NavBar />}
      <Routes>
        {/* Páginas públicas */}
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />

        {/* Páginas privadas com NavBar */}
        <Route path="/meusFilmes" element={<MeusFilmes />} />
        <Route path="/adicionaFilme" element={<AdicionaFilme />} />
        <Route path="/categorias" element={<Categorias />} />
        <Route path="/minha-lista" element={<MinhaLista />} />
        <Route path="/filme/:id" element={<DetalheFilme />} />
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppWrapper />
    </BrowserRouter>
  );
}
