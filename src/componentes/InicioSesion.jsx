import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

const InicioSesion = ({ onInicioSesion }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const manejarInicioSesion = (e) => {
    e.preventDefault();
    const registrosGuardados = JSON.parse(localStorage.getItem("registros")) || [];
    const usuarioEncontrado = registrosGuardados.find(usuario => usuario.email === email && usuario.password === password);
    
    if (usuarioEncontrado) {
      onInicioSesion();
      setIsLoggedIn(true); // Establecer isLoggedIn como true después de iniciar sesión
    } else {
      setError("Credenciales incorrectas. Por favor, inténtalo de nuevo.");
    }
  };

  // Si el usuario ya inició sesión correctamente, redirigir a la página de cursos
  if (isLoggedIn) {
    return <Navigate to="/cursos" />;
  }

  return (
    <div className="formulario">
      <h2>Iniciar Sesión</h2>
      <form onSubmit={manejarInicioSesion}>
        <div className="campo">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="campo">
          <label>Contraseña:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Iniciar Sesión</button>
      </form>
      {error && <div className="error">{error}</div>}
    </div>
  );
};

export default InicioSesion;
