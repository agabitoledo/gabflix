import React from 'react';
import Logo from '../../assets/imgs/Logo.png'
import '../Menu/Menu.css'
import Button from '../Button'
// import ButtonLink from '../componentes/ButtonLink/buttonIndex';
//

function Menu() {
    
    return(
        <nav className="Menu">
            <a href="/">
            <img className="Logo" src={Logo} alt="Gabflix logo"/>
            </a>

            <Button as="a" className="ButtonLink" href="/">
                sou nenem 
            </Button>
        </nav>
    )

}

export default Menu;