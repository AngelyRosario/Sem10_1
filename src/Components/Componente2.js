// src/Components/Componente2.js
import React from 'react';
import Componente1 from './Componente1'; // Importa Componente1 si es necesario

const Componente2 = ({ color, cambiodecolor }) => {
  return (
    <div className="component-container">
      <Componente1 color={color} cambiodecolor={cambiodecolor} />
    </div>
  );
};

export default Componente2;
