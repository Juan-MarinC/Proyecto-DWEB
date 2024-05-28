import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ContextoDeCursos } from '../Contextos/ContextoDeCursos';
import styled from 'styled-components';

// Estilos para el contenedor del cuestionario
const CuestionarioContainer = styled.div`
  padding: 2em;
  max-width: 800px;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

// Estilos para el título del cuestionario
const Titulo = styled.h2`
  color: #343a40;
  font-size: 2em;
  margin-bottom: 1em;
  text-align: center;
`;

// Estilos para el contenedor de cada pregunta
const PreguntaContainer = styled.div`
  margin-bottom: 1.5em;
`;

// Estilos para el título de cada pregunta
const PreguntaTitulo = styled.h3`
  color: #343a40;
  font-size: 1.5em;
  margin-bottom: 0.5em;
`;

// Estilos para el contenedor de opciones de respuesta
const OpcionesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
`;

// Estilos para los botones de opción de respuesta
const OpcionBoton = styled.button`
  background-color: ${props => props.seleccionado ? '#138496' : '#17a2b8'};
  color: #fff;
  padding: 0.8em 1.5em;
  border: none;
  border-radius: 4px;
  font-size: 1em;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
  flex: 1 1 calc(50% - 1em);
  text-align: center;

  &:hover {
    background-color: #138496;
    transform: scale(1.05);
  }
`;

// Estilos para el botón de envío del cuestionario
const EnvioBoton = styled.button`
  background-color: #28a745;
  color: #fff;
  padding: 0.8em 1.5em;
  border: none;
  border-radius: 4px;
  font-size: 1em;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
  width: 100%;
  margin-top: 1.5em;

  &:hover {
    background-color: #218838;
    transform: scale(1.05);
  }
`;

// Estilos para mostrar el puntaje obtenido
const Puntaje = styled.p`
  color: #343a40;
  font-size: 1.2em;
  margin-top: 1.5em;
  text-align: center;
`;

// Componente principal del cuestionario
const Cuestionario = () => {
  const { id } = useParams(); // Obtener el parámetro ID de la URL
  const { cursos, actualizarProgreso } = useContext(ContextoDeCursos); // Obtener cursos y la función para actualizar el progreso desde el contexto
  const curso = cursos.find(c => c.id === parseInt(id)); // Encontrar el curso actual basado en el ID de la URL

  const [respuestas, setRespuestas] = useState({}); // Estado para almacenar las respuestas seleccionadas
  const [puntaje, setPuntaje] = useState(null); // Estado para almacenar el puntaje obtenido

  // Función para manejar el cambio de respuesta
  const manejarCambio = (preguntaIndex, opcion) => {
    setRespuestas({
      ...respuestas,
      [preguntaIndex]: opcion
    });
  };

  // Función para manejar el envío del cuestionario
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

  // Verificar si el curso no existe
  if (!curso) {
    return <p>Curso no encontrado</p>;
  }

  // Renderizar el cuestionario
  return (
    <CuestionarioContainer>
      <Titulo>Cuestionario: {curso.titulo}</Titulo>
      {curso.preguntas.map((pregunta, index) => (
        <PreguntaContainer key={index}>
          <PreguntaTitulo>{pregunta.pregunta}</PreguntaTitulo>
          <OpcionesContainer>
            {pregunta.opciones.map((opcion, i) => (
              <OpcionBoton
                key={i}
                seleccionado={respuestas[index] === opcion}
                onClick={() => manejarCambio(index, opcion)}
              >
                {opcion}
              </OpcionBoton>
            ))}
          </OpcionesContainer>
        </PreguntaContainer>
      ))}
      <EnvioBoton onClick={manejarEnvio}>Enviar</EnvioBoton>
      {puntaje !== null && (
        <Puntaje>Puntaje: {puntaje} de {curso.preguntas.length}</Puntaje>
      )}
    </CuestionarioContainer>
  );
};

export default Cuestionario;
