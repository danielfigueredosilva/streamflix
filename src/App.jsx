import ListaFilmes from "./pages/ListaFilmes";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sobre from "./pages/Sobre.jsx";
import BarNav from "./components/BarNav.jsx";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <BarNav/>
        <Routes>
          <Route path="/" element={<ListaFilmes />} />
          <Route path="/Sobre" element={<Sobre />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
