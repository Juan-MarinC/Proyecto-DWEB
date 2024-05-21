import React from 'react';
import { Link } from 'react-router-dom';

const Encabezado = () => (
  <header>
    <h1>Mi Aplicación Educativa</h1>
    <nav>
      <Link to="/">Cursos</Link>
      <Link to="/progreso">Progreso</Link>
    </nav>
  </header>
);

export default Encabezado;
