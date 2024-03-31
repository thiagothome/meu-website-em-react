import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cabecalho from './Componentes/Cabecalho';
import Rodape from './Componentes/Rodape';
import Home from './Componentes/Home';
import Habilidades from './Componentes/Menu/Habilidades';
import Portfolio from './Componentes/Menu/Portfolio';
import Contato from './Componentes/Menu/Contato';

const App = () => {
  return (
    <div className="home">
      <BrowserRouter>
        <Cabecalho />
        <Routes>
          <Route path="/" end element={<Home />} />
          <Route path="/habilidades" element={<Habilidades />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
        <Rodape />
      </BrowserRouter>
    </div>
  );
};

export default App;
