import React from 'react';
import Logo from '../../assets/img/loogo.png';
import'./Menu.css';
import ButtonLink from './ButtonLink/index.js'
function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
        <img className="Logo" src={Logo} alt="EstudaFlix logo"/>
        </a>

        <ButtonLink className="ButtonLink" href="/">
            Adicionar Contribuição
        </ButtonLink>
        </nav>
    );
}

export  default Menu;