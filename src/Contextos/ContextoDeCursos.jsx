import React, { createContext, useState } from 'react';
import { cursos as cursosIniciales } from '../datos/cursos';

export const ContextoDeCursos = createContext();

export const ProveedorDeCursos = ({ children }) => {
  const [cursos, setCursos] = useState(cursosIniciales);

  const actualizarProgreso = (cursoId, nuevoProgreso) => {
    setCursos(prevCursos =>
      prevCursos.map(curso =>
        curso.id === cursoId ? { ...curso, progreso: nuevoProgreso } : curso
      )
    );
  };

  return (
    <ContextoDeCursos.Provider value={{ cursos, actualizarProgreso }}>
      {children}
    </ContextoDeCursos.Provider>
  );
};