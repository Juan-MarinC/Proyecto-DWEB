import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ContextoDeCursos } from '../Contextos/ContextoDeCursos';

const DetalleDelCurso = () => {
  const { id } = useParams();
  const { cursos } = useContext(ContextoDeCursos);
  const curso = cursos.find(curso => curso.id === parseInt(id));

  if (!curso) {
    return <div>Curso no encontrado</div>;
  }

  return (
    <div>
      <h2>{curso.titulo}</h2>
      <p>{curso.descripcion}</p>
      {/* Añadir más detalles y funcionalidad según sea necesario */}
    </div>
  );
};

export default DetalleDelCurso;
