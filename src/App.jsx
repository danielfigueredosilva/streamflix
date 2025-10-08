import ListaFilmes from "./pages/ListaFilmes";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sobre from "./pages/Sobre.jsx";
import NavBar from "./components/NavBar.jsx";
import MyCarousel from "./components/carousel/MyCarousel.jsx"
import MultiCarousel from "./components/carousel/MultiCarousel.jsx";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<> <MyCarousel /> <MultiCarousel/> <ListaFilmes />  </>} />
          <Route path="/Sobre" element={<Sobre />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
