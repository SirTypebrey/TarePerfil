import React from 'react';

import Lista from './Lista';
import ListaClase from './ListaClase';

export function PaginaListas() {
  const elementos1 = [
    { done: true, texto: 'Hacer la compra', prioridad: 'alta' },
    { done: false, texto: 'Sacar al perro', prioridad: 'media' },
  ];
  const elementos2 = [
    { done: true, texto: 'Tomates', prioridad: 'alta' },
    { done: true, texto: 'Queso', prioridad: 'media' },
    { done: false, texto: 'Leche', prioridad: 'media' },
  ];
  const elementos3 = [{ done: true, texto: 'Estudiar React.js' }];

  return (
    <div>
      <h1>Listas de tareas</h1>
      <Lista titulo="Tareas de la casa" icono="🏠" elementos={elementos1} />
      <Lista titulo="Tareas de la compra" icono="🍵" elementos={elementos2} />
      <ListaClase titulo="Tareas del curso" icono="📜" elementos={elementos3} />
    </div>
  );
}
