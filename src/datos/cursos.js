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
      {
        pregunta: '¿Quién desarrolló React?',
        opciones: [
          'Google',
          'Microsoft',
          'Facebook',
          'Twitter'
        ],
        respuestaCorrecta: 'Facebook'
      },
      {
        pregunta: '¿Qué es un componente en React?',
        opciones: [
          'Un tipo de archivo',
          'Una función o clase que retorna un elemento de React',
          'Un estilo de diseño',
          'Un método de JavaScript'
        ],
        respuestaCorrecta: 'Una función o clase que retorna un elemento de React'
      },
      {
        pregunta: '¿Qué se utiliza para gestionar el estado en React?',
        opciones: [
          'Redux',
          'HTML',
          'CSS',
          'SQL'
        ],
        respuestaCorrecta: 'Redux'
      },
      {
        pregunta: '¿Qué es JSX?',
        opciones: [
          'Una extensión de archivo',
          'Una herramienta de diseño',
          'Una sintaxis que permite escribir HTML en JavaScript',
          'Un método de JavaScript'
        ],
        respuestaCorrecta: 'Una sintaxis que permite escribir HTML en JavaScript'
      }
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
      {
        pregunta: '¿Dónde se ejecuta principalmente JavaScript?',
        opciones: [
          'En el servidor',
          'En el navegador web',
          'En el sistema operativo',
          'En una base de datos'
        ],
        respuestaCorrecta: 'En el navegador web'
      },
      {
        pregunta: '¿Qué es una variable en JavaScript?',
        opciones: [
          'Una manera de almacenar datos',
          'Un tipo de archivo',
          'Un comando de terminal',
          'Un estilo de diseño'
        ],
        respuestaCorrecta: 'Una manera de almacenar datos'
      },
      {
        pregunta: '¿Cuál es el resultado de "2" + 2 en JavaScript?',
        opciones: [
          '4',
          '22',
          'Error',
          'undefined'
        ],
        respuestaCorrecta: '22'
      },
      {
        pregunta: '¿Qué método se utiliza para seleccionar un elemento en el DOM?',
        opciones: [
          'querySelector',
          'getElementById',
          'getElementsByClassName',
          'Todas las anteriores'
        ],
        respuestaCorrecta: 'Todas las anteriores'
      }
    ]
  },
  // Agrega más cursos según sea necesario
];
