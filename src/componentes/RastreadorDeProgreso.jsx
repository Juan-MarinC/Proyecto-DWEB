import React, { useContext } from 'react';
import { ContextoDeCursos } from '../Contextos/ContextoDeCursos';

const RastreadorDeProgreso = () => {
  const { cursos } = useContext(ContextoDeCursos);

  return (
    <div>
      <h2>Rastreador de Progreso</h2>
      <ul>
        {cursos.map(curso => (
          <li key={curso.id}>
            {curso.titulo}: {curso.progreso}%
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RastreadorDeProgreso;