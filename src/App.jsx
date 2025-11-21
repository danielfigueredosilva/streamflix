import ListaFilmes from "./pages/ListaFilmes";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sobre from "./pages/Sobre.jsx";
import NavBar from "./components/NavBar.jsx";
import MyCarousel from "./components/carousel/MyCarousel.jsx";
import MultiCarousel, { slidesFiccao, slidesDrama } from "./components/carousel/MultiCarousel.jsx";
import Categorias from "./pages/Categorias.jsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MinhaLista from "./pages/MinhaLista.jsx";
import Cadastro from "./pages/Cadastro.jsx";
import Login from "./pages/Login.jsx";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <MyCarousel />
                  <Categorias />
                <ListaFilmes />
              </>
            }
          />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/categorias" element={<Categorias />} />
          <Route path="/minha-lista" element={<MinhaLista />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/login" element={<Login />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}
