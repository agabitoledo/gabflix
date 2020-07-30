import React from 'react';
import ReactDOM from 'react-dom';
import './reset.css';
import Home from './pages/Home/homeIndex';
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import CadastroVideo from   './pages/cadastro/Video/videoIndex'
import CadastroCategoria from   './pages/cadastro/Categoria/categoriaIndex'

ReactDOM.render(
    <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/cadastro/video" component={CadastroVideo} exact />
          <Route path="/cadastro/categoria" component={CadastroCategoria} exact />
          <Route component={()=>(<div>ERROR NOT FOUND</div>)} />
        </Switch>
    </BrowserRouter>,
  document.getElementById('root')
);