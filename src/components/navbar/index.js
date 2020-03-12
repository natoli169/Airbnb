import React, { useState } from "react";
import logo from "../../assets/logo.svg";
import language from "../../assets/language.svg";
import dollar from "../../assets/dollar.svg";
import { Link } from "react-router-dom";

import { Search } from "../search/index";
import { Container } from "./style";

export const Navbar = () => {
  const [isLogged, setIsLogged] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const Logged = ({ children }) => {
    return isLogged ? children : null;
  };
  Navbar.Logged = Logged;

  const NotLogged = ({ children }) => {
    return isLogged ? null : children;
  };
  Navbar.NotLogged = NotLogged;

  return (
    <Container isOpen={isOpen}>
      <div className='main'>
        <div className='first'>
          <img src={logo} alt='Airbnb Logo' className='logo' />

          <Search />
        </div>
        <div className='second'>
          <button
            type='button'
            className='menu'
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className='menu-icon'
              height='50'
              width='50'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 384 384'
            >
              <path d='M0 277.333h384V320H0zM0 170.667h384v42.667H0zM0 64h384v42.667H0z' />
            </svg>
          </button>
        </div>
      </div>
      <Navbar.NotLogged>
        <div className='lists'>
          <a href='#' className='menu-list'>
            English
          </a>
          <a href='#' className='menu-list'>
            USD
          </a>
          <a href='#' className='menu-list'>
            Become a host
          </a>
          <a href='#' className='menu-list'>
            Help
          </a>
          <Link to='/signup' className='menu-list'>
            Sign up
          </Link>
          <Link to='/login' className='menu-list'>
            Log in
          </Link>
        </div>
      </Navbar.NotLogged>
      <Navbar.Logged>
        <div className='lists'>
          <a href='#' className='menu-list'>
            Become a host
          </a>
          <a href='#' className='menu-list'>
            Saved
          </a>
          <a href='#' className='menu-list'>
            Trips
          </a>
          <a href='#' className='menu-list'>
            Messages
          </a>
          <a href='#' className='menu-list'>
            Help
          </a>
          <a href='#' className='menu-list'>
            user
          </a>
        </div>
      </Navbar.Logged>
    </Container>
  );
};
