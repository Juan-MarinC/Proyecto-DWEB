import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Encabezado from './componentes/Encabezado';
import PieDePagina from './componentes/PieDePagina';
import ListaDeCursos from './componentes/ListaDeCursos';
import DetalleDelCurso from './componentes/DetalleDelCurso';
import Cuestionario from './componentes/Cuestionario';
import RastreadorDeProgreso from './componentes/RastreadorDeProgreso';
import { ProveedorDeCursos } from './Contextos/ContextoDeCursos';
import './estilos/principal.css';

const App = () => (
  <ProveedorDeCursos>
    <Router>
      <Encabezado />
      <main>
        <Routes>
          <Route path="/" element={<ListaDeCursos />} />
          <Route path="/curso/:id" element={<DetalleDelCurso />} />
          <Route path="/cuestionario/:id" element={<Cuestionario />} />
          <Route path="/progreso" element={<RastreadorDeProgreso />} />
        </Routes>
      </main>
      <PieDePagina />
    </Router>
  </ProveedorDeCursos>
);

export default App;