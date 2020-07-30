import React from 'react';
import { Link } from 'react-router-dom'
import PageDefault from '../../../componentes/PageDefault/pageDefaultIndex'

function CadastroVideo() {

    return(
        <PageDefault>
            cadastre o video 
            <Link to="/cadastro/categoria">
            Cadastrar Categoria
            </Link>
        </PageDefault>
    )
}

export default CadastroVideo;