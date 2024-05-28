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
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      padding: '2em',
      backgroundColor: '#f8f9fa',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      maxWidth: '800px',
      margin: '0 auto',
    }}>
      <h2 style={{
        color: '#343a40',
        fontSize: '2em',
        marginBottom: '1em',
      }}>Lista de Cursos</h2>
      {cursos.map(curso => (
        <div key={curso.id} style={{
          marginBottom: '20px',
          padding: '1em',
          backgroundColor: '#fff',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
          width: '100%',
        }}>
          <h3 style={{
            color: '#343a40',
            fontSize: '1.5em',
            marginBottom: '0.5em',
          }}>{curso.titulo}</h3>
          {cursoSeleccionado === curso ? (
            <>
              <p style={{
                color: '#6c757d',
                fontSize: '1em',
                marginBottom: '1em',
              }}>{curso.descripcion}</p>
              <Link to={`/cuestionario/${curso.id}`}>
                <button style={{
                  backgroundColor: '#007bff',
                  color: '#fff',
                  padding: '0.8em 1.5em',
                  border: 'none',
                  borderRadius: '4px',
                  fontSize: '1em',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s ease, transform 0.3s ease',
                  marginBottom: '0.5em',
                }}>Ir al Cuestionario</button>
              </Link>
              <button onClick={ocultarDetalles} style={{
                backgroundColor: '#007bff',
                color: '#fff',
                padding: '0.8em 1.5em',
                border: 'none',
                borderRadius: '4px',
                fontSize: '1em',
                cursor: 'pointer',
                transition: 'background-color 0.3s ease, transform 0.3s ease',
                marginBottom: '0.5em',
              }}>Ocultar detalles</button>
            </>
          ) : (
            <button onClick={() => mostrarDetalles(curso)} style={{
              backgroundColor: '#007bff',
              color: '#fff',
              padding: '0.8em 1.5em',
              border: 'none',
              borderRadius: '4px',
              fontSize: '1em',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease, transform 0.3s ease',
              marginBottom: '0.5em',
            }}>Ver detalles</button>
          )}
        </div>
      ))}
    </div>
  );
};

export default ListaDeCursos;
