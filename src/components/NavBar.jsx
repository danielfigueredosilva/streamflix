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
            to="/meusFilmes"
            className={({ isActive }) =>
              "nav-link px-3 rounded-5" +
              (isActive ? " bg-white text-dark " : " text-white")
            }
          >
            Meus Filmes
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/adicionaFilme"
            className={({ isActive }) =>
              "nav-link px-3 rounded-5" +
              (isActive ? " bg-white text-dark " : " text-white")
            }
          >
            Adiocionar Filmes
          </NavLink>
        </li>
      </ul>

       {/*Botões de login e cadastro*/}     
      <li>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              "nav-link px-3 rounded-5" +
              (isActive ? " bg-white text-dark " : " text-white")
            }
          >
            {/* Botão login*/}
            <div className="d-flex">
              <button 
                type="button" 
                className="btn btn-outline-primary me-2 rounded-5" id="btn-login">
                <span><i class="fa-solid fa-user"></i></span>
              </button>
            </div>
          </NavLink>
        </li>

        <li>
          <NavLink
          to="/cadastro"
          className={({ isActive }) =>
            "nav-link px-3 rounded-5" +
            (isActive ? " bg-white text-dark " : " text-white")
          }
        >
          {/* Botão de cadastro */}
          <div className="d-flex">
            <button
              type="button"
              className="btn btn-light me-2 rounded-5"
              style={{ border: "none" }}
              id="btn-cadastro"
            >
              <i className="fa-solid fa-plus-circle"></i>
            </button>
          </div>
        </NavLink>
      </li>

      
    </header>
  );
};

export default NavBar;
