import { Link } from "react-router-dom";
import "./BarNav.css";

<<<<<<< Updated upstream
const BarNav = () => {
  return (
    <nav className="nav-bar">
      <Link to="/" className="navbar-logo">
        UNINASSAU-CINE
      </Link>
      <div className="navbar-links">
        <Link to="/" className="navbar-link">
          Filmes
        </Link>
=======
const BarNav = ()=>{
    return(
        <nav className="nav-bar">
            <Link to ='/' className="navbar-logo">
                LOGO
            </Link>
            <div className="navbar-links">
                <Link to="/" className="navbar-link">
                Filmes</Link>
>>>>>>> Stashed changes

        <Link to="" className="navbar-link">
          Minha Lista
        </Link>

        <Link to="" className="navbar-link">
          Categorias
        </Link>

        <Link to="/sobre" className="navbar-link">
          Sobre
        </Link>
      </div>
    </nav>
  );
};

export default BarNav;
