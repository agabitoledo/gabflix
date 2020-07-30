import React from 'react';
import { Link } from 'react-router-dom'
import PageDefault from '../../../componentes/PageDefault/pageDefaultIndex'

function CadastroCategoria() {

    return(
        <PageDefault>
                <h1>PAGINA DE CADASTRO DE CATEGORIA</h1>
                <Link to="/">
                    Home
                </Link>
        </PageDefault>
    )
}

export default CadastroCategoria;