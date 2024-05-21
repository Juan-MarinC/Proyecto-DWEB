export const cursos = [
  {
    id: 1,
    titulo: 'Curso de React',
    descripcion: 'Aprende los fundamentos de React.',
    progreso: 0, // Progreso inicial en 0%
    preguntas: [
      {
        pregunta: '¿Qué es React?',
        opciones: [
          'Una biblioteca de JavaScript',
          'Un framework de CSS',
          'Un lenguaje de programación',
          'Una base de datos'
        ],
        respuestaCorrecta: 'Una biblioteca de JavaScript'
      },
      // Agrega más preguntas según sea necesario
    ]
  },
  {
    id: 2,
    titulo: 'Curso de JavaScript',
    descripcion: 'Domina JavaScript desde cero.',
    progreso: 0, // Progreso inicial en 0%
    preguntas: [
      {
        pregunta: '¿Qué es JavaScript?',
        opciones: [
          'Un lenguaje de marcado',
          'Un lenguaje de programación',
          'Un sistema operativo',
          'Una herramienta de diseño gráfico'
        ],
        respuestaCorrecta: 'Un lenguaje de programación'
      },
      // Agrega más preguntas según sea necesario
    ]
  },
  // Agrega más cursos según sea necesario
];