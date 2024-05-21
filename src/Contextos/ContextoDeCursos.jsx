import React, { createContext, useState } from 'react';
import { cursos as cursosIniciales } from '../datos/cursos';

export const ContextoDeCursos = createContext();

export const ProveedorDeCursos = ({ children }) => {
  const [cursos, setCursos] = useState(cursosIniciales);

  return (
    <ContextoDeCursos.Provider value={{ cursos, setCursos }}>
      {children}
    </ContextoDeCursos.Provider>
  );
};
