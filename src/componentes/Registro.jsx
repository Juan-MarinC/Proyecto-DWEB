import React, { useState } from "react";

const Registro = ({ onRegistro }) => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const manejarRegistro = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar los datos del formulario al backend
    onRegistro({ nombre, email, password });
    setNombre("");
    setEmail("");
    setPassword("");
  };

  return (
    <div>
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
    </div>
  );
};

export default Registro;
