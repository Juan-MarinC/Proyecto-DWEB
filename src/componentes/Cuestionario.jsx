import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ContextoDeCursos } from '../Contextos/ContextoDeCursos';

const Cuestionario = () => {
  const { id } = useParams();
  const { cursos, actualizarProgreso } = useContext(ContextoDeCursos);
  const curso = cursos.find(c => c.id === parseInt(id));

  const [respuestas, setRespuestas] = useState({});
  const [puntaje, setPuntaje] = useState(null);

  const manejarCambio = (preguntaIndex, opcion) => {
    setRespuestas({
      ...respuestas,
      [preguntaIndex]: opcion
    });
  };

  const manejarEnvio = () => {
    let nuevoPuntaje = 0;
    curso.preguntas.forEach((pregunta, index) => {
      if (respuestas[index] === pregunta.respuestaCorrecta) {
        nuevoPuntaje += 1;
      }
    });
    setPuntaje(nuevoPuntaje);
    const nuevoProgreso = (nuevoPuntaje / curso.preguntas.length) * 100;
    actualizarProgreso(curso.id, nuevoProgreso);
  };

  if (!curso) {
    return <p>Curso no encontrado</p>;
  }

  return (
    <div>
      <h2>Cuestionario: {curso.titulo}</h2>
      {curso.preguntas.map((pregunta, index) => (
        <div key={index}>
          <h3>{pregunta.pregunta}</h3>
          {pregunta.opciones.map((opcion, i) => (
            <label key={i}>
              <input
                type="radio"
                name={`pregunta-${index}`}
                value={opcion}
                onChange={() => manejarCambio(index, opcion)}
                checked={respuestas[index] === opcion}
              />
              {opcion}
            </label>
          ))}
        </div>
      ))}
      <button onClick={manejarEnvio}>Enviar</button>
      {puntaje !== null && (
        <p>Puntaje: {puntaje} de {curso.preguntas.length}</p>
      )}
    </div>
  );
};

export default Cuestionario;
