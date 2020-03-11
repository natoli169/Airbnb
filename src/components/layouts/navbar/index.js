import React, {useState} from "react";
import logo from "../../../assets/logo.svg";
import {Container} from "./style";
import {NavSearch} from "../../inputs";

export const Navbar = () => {
    const [isLogged, setIsLogged] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    Navbar.Logged = ({children}) => {
        return isLogged ? children : null;
    };

    Navbar.NotLogged = ({children}) => {
        return isLogged ? null : children;
    };

    return (
        <Container isOpen={isOpen}>
            <div className='main'>
                <div className='first'>
                    <img src={logo} alt='Airbnb Logo' className='logo'/>
                    <div className='second'>
                        <button
                            type='button'
                            className='menu'
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            >
                        </button>
                    </div>
                    <div className='nav-search'>
                        <NavSearch/>
                    </div>
                </div>
            </div>
            <Navbar.NotLogged>
                <div className='lists'>
                    <a href='#' className='menu-list'>English</a>
                    <a href='#' className='menu-list'>USD</a>
                    <a href='#' className='menu-list'>Become a host</a>
                    <a href='#' className='menu-list'>Help</a>
                    <a href='#' className='menu-list'>Sign up</a>
                    <a href='#' className='menu-list'>Login</a>
                </div>
            </Navbar.NotLogged>
            <Navbar.Logged>
                <div className='lists'>
                    <a href='#' className='menu-list'>Become a host</a>
                    <a href='#' className='menu-list'>Saved</a>
                    <a href='#' className='menu-list'>Trips</a>
                    <a href='#' className='menu-list'>Messages</a>
                    <a href='#' className='menu-list'>Help</a>
                    <a href='#' className='menu-list'>user</a>
                </div>
            </Navbar.Logged>
        </Container>
    );
};
