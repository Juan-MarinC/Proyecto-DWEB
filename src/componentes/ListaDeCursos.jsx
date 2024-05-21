import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ContextoDeCursos } from '../Contextos/ContextoDeCursos';

const ListaDeCursos = () => {
  const { cursos } = useContext(ContextoDeCursos);

  return (
    <div>
      <h2>Lista de Cursos</h2>
      <ul>
        {cursos.map(curso => (
          <li key={curso.id}>
            <Link to={`/curso/${curso.id}`}>{curso.titulo}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaDeCursos;
