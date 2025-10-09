import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";
import Logo from '../assets/play-svgrepo-com.svg';

const NavBar = () => {
    return(

  
        <header className="container d-flex align-items-center justify-content-between py-4 mb-4 border-bottom">
    {/* Logo */}
    <div className="d-flex align-items-center">
      <Link to="/" className="d-inline-flex align-items-center">
        <img src={Logo} alt="logo" width={70} height={45} />
      </Link>
    </div>
  
    {/* Links do menu */}
    <ul className="nav justify-content-center flex-grow-1">
      <li>
        <NavLink to="/" className={({isActive})=> "nav-link px-3 rounded-5" + (isActive ? " bg-white text-dark " : " text-white")}>
          Filmes
        </NavLink>
      </li>
      <li>
        <NavLink to="/categorias" className={({isActive})=> "nav-link px-3 rounded-5" + (isActive? " bg-white text-dark" : " text-white")}>
          Categorias
        </NavLink>
      </li>
      <li>
        <NavLink to="/minha-lista" className={({isActive})=> "nav-link px-3 rounded-5" + (isActive? " bg-white text-dark " : " text-white")}>
          Minha Lista
        </NavLink>
      </li>
      <li>
        <NavLink to="/sobre" className={({isActive})=> "nav-link px-3 rounded-5" + (isActive? " bg-white text-dark " : " text-white")}>
          Sobre
        </NavLink>
      </li>
    </ul>
  
    {/* Botão */}
    <div className="d-flex">
      <button type="button" className="btn btn-outline-primary me-2 rounded-5">
        Login
      </button>
    </div>
  </header>
  

  );
};

export default NavBar;
