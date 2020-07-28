import React from 'react';
import Logo from '../../assets/imgs/Logo.png'
import '../Menu/Menu.css'
import ButtonLink from '../componentes/ButtonLink/buttonIndex';
//

function Menu() {
    
    return(
        <nav className="Menu">
            <a href="/">
            <img className="Logo" src={Logo} alt="Gabflix logo"/>
            </a>

            <ButtonLink className="ButtonLink" href="/">
                NOVO VIDEO
            </ButtonLink>
        </nav>
    )

}

export default Menu;