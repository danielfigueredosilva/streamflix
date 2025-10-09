import ListaFilmes from "./pages/ListaFilmes";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sobre from "./pages/Sobre.jsx";
import NavBar from "./components/NavBar.jsx";
import MyCarousel from "./components/carousel/MyCarousel.jsx"
import MultiCarousel, { slidesFiccao, slidesDrama } from "./components/carousel/MultiCarousel.jsx";
import Categorias from "./pages/Categorias.jsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<> <MyCarousel /> <MultiCarousel tipo="Ficção" slides={slidesFiccao} /> <MultiCarousel tipo="Drama" slides={slidesDrama}/> <ListaFilmes />  </>} />
          <Route path="/Sobre" element={<Sobre />} />
          <Route path="/Categorias" element={<Categorias />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}
