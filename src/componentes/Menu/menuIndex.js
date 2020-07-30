import React from 'react';
import { Link } from 'react-router-dom'
import Logo from '../../assets/imgs/Logo.png'
import '../Menu/Menu.css'
import Button from '../Button'
// import ButtonLink from '../componentes/ButtonLink/buttonIndex';
//

function Menu() {
    
    return(
        <nav className="Menu">
            <Link to="/">
            <img className="Logo" src={Logo} alt="Gabflix logo"/>
            </Link>

            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                NOVO VÍDEO
            </Button>
        </nav>
    )

}

export default Menu;