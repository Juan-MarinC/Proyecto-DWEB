import React, { useState, useEffect } from "react";

const Registro = ({ onRegistro }) => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [registros, setRegistros] = useState([]);
  const [registroExitoso, setRegistroExitoso] = useState(false);

  useEffect(() => {
    const registrosGuardados = localStorage.getItem("registros");
    if (registrosGuardados) {
      setRegistros(JSON.parse(registrosGuardados));
    }
  }, []);

  const manejarRegistro = (e) => {
    e.preventDefault();
    const nuevoRegistro = { nombre, email, password };
    const nuevosRegistros = [...registros, nuevoRegistro];
    setRegistros(nuevosRegistros);
    localStorage.setItem("registros", JSON.stringify(nuevosRegistros));
    setNombre("");
    setEmail("");
    setPassword("");
    setRegistroExitoso(true);
    setTimeout(() => {
      setRegistroExitoso(false);
    }, 3000);
    onRegistro(nuevoRegistro);
  };

  return (
    <div className="registro-container">
      <h2>Registro</h2>
      <form onSubmit={manejarRegistro}>
        <label>
          Nombre:
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Contraseña:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button type="submit">Registrar</button>
      </form>
      {registroExitoso && <div className="alert">¡Registro exitoso!</div>}
    </div>
  );
};

export default Registro;

