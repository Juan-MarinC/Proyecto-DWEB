import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Encabezado from './componentes/Encabezado';
import PieDePagina from './componentes/PieDePagina';
import InicioSesion from './componentes/InicioSesion';
import ListaDeCursos from './componentes/ListaDeCursos';
import DetalleDelCurso from './componentes/DetalleDelCurso';
import Cuestionario from './componentes/Cuestionario';
import RastreadorDeProgreso from './componentes/RastreadorDeProgreso';
import { ProveedorDeCursos } from './Contextos/ContextoDeCursos';
import Registro from './componentes/Registro';
import './estilos/principal.css';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const cerrarSesion = () => {
    // Aquí podrías realizar cualquier limpieza necesaria, como eliminar datos de sesión, etc.
    setIsLoggedIn(false);
  };

  return (
    <ProveedorDeCursos>
      <Router>
        <Encabezado />
        <main>
          <Routes>
            <Route path="/inicio-sesion" element={<InicioSesion onInicioSesion={() => setIsLoggedIn(true)} />} />
            <Route path="/cursos" element={isLoggedIn ? <ListaDeCursos /> : <Navigate to="/inicio-sesion" />} />
            <Route path="/curso/:id" element={<DetalleDelCurso />} />
            <Route path="/cuestionario/:id" element={<Cuestionario />} />
            <Route path="/progreso" element={<RastreadorDeProgreso />} />
            <Route path="/registro" element={<Registro />} />
            {/* Redirección por defecto */}
            <Route path="*" element={<Navigate to="/inicio-sesion" />} />
          </Routes>
        </main>
        <PieDePagina />
        {isLoggedIn && <button onClick={cerrarSesion}>Cerrar Sesión</button>}
      </Router>
    </ProveedorDeCursos>
  );
};

export default App;
