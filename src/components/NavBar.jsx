import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import "./NavBar.css";
import Logo from "../assets/logo pobre.png";

const NavBar = () => {

  return (
    <header className="container d-flex align-items-center justify-content-between py-4 mb-4 border-bottom">
      {/* Logo */}
      <div className="d-flex align-items-center">
        <Link to="/" className="d-inline-flex align-items-center">
          <img src={Logo} alt="logo" width={70} height={60} />
        </Link>
      </div>

      {/* Menu */}
      <ul className="nav justify-content-center flex-grow-1">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              "nav-link px-3 rounded-5" +
              (isActive ? " bg-white text-dark " : " text-white")
            }
          
          >
            Filmes
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/categorias"
            className={({ isActive }) =>
              "nav-link px-3 rounded-5" +
              (isActive ? " bg-white text-dark" : " text-white")
            }
          >
            Categorias
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/minha-lista"
            className={({ isActive }) =>
              "nav-link px-3 rounded-5" +
              (isActive ? " bg-white text-dark " : " text-white")
            }
          >
            Minha Lista
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/sobre"
            className={({ isActive }) =>
              "nav-link px-3 rounded-5" +
              (isActive ? " bg-white text-dark " : " text-white")
            }
          >
            Sobre
          </NavLink>
        </li>
         <li>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              "nav-link px-3 rounded-5" +
              (isActive ? " bg-white text-dark " : " text-white")
            }
          >
            Login
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/criarFilme"
            className={({ isActive }) =>
              "nav-link px-3 rounded-5" +
              (isActive ? " bg-white text-dark " : " text-white")
            }
          >
            Adicionar Filme
          </NavLink>
        </li>
      </ul>
      <li>
          <NavLink
            to="/cadastro"
            className={({ isActive }) =>
              "nav-link px-3 rounded-5" +
              (isActive ? " bg-white text-dark " : " text-white")
            }
          >
            {/* Botão */}
            <div className="d-flex">
              <button type="button" className="btn btn-outline-primary me-2 rounded-5" id="btn-login">
                <span><i class="fa-solid fa-user"></i></span>
              </button>
            </div>
          </NavLink>
        </li>

      
    </header>
  );
};

export default NavBar;
