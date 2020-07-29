/* eslint-disable no-undef */
import React from 'react';
import Menu from './componentes/Menu/menuIndex'
import dadosIniciais from '../src/data/dados_iniciais.json';
import BannerMain from './componentes/BannerMain';
import Carousel from './componentes/Carousel';
import Footer from './componentes/Footer';

function App() {
  return (
    <div>
      <Menu />
      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"O que é Front-End? Trabalahndo na área "}
      />

{/* 
  {data.categorias.map(categoria => 
  (
    <Carousel category={categoria} />
  )
)
  } */}


      
    <Carousel 
      ignoreFirstVideo
      category={dadosIniciais.categorias[0]}
    />

    <Carousel 
      category={dadosIniciais.categorias[1]}
    />

    <Carousel 
      category={dadosIniciais.categorias[2]}
    />

    <Carousel 
      category={dadosIniciais.categorias[3]}
    />


    <Carousel 
      category={dadosIniciais.categorias[4]}
    /> 


    <Carousel 
      category={dadosIniciais.categorias[5]}
    /> 

    </div>
  );
}

export default App;
