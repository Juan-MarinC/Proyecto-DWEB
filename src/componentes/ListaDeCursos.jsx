// src/componentes/ListaDeCursos.jsx
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ContextoDeCursos } from '../Contextos/ContextoDeCursos';

const ListaDeCursos = () => {
  const { cursos } = useContext(ContextoDeCursos);
  const [cursoSeleccionado, setCursoSeleccionado] = useState(null);

  const mostrarDetalles = (curso) => {
    setCursoSeleccionado(curso);
  };

  const ocultarDetalles = () => {
    setCursoSeleccionado(null);
  };

  return (
    <div>
      <h2>Lista de Cursos</h2>
      {cursos.map(curso => (
        <div key={curso.id} style={{ marginBottom: '20px' }}>
          <h3>{curso.titulo}</h3>
          {cursoSeleccionado === curso ? (
            <>
              <p>{curso.descripcion}</p>
              <Link to={`/cuestionario/${curso.id}`}>
                <button>Ir al Cuestionario</button>
              </Link>
              <button onClick={ocultarDetalles}>Ocultar detalles</button>
            </>
          ) : (
            <button onClick={() => mostrarDetalles(curso)}>Ver detalles</button>
          )}
        </div>
      ))}
    </div>
  );
};

export default ListaDeCursos;
