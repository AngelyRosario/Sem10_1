import React from 'react';
import imagen from './uncpimg.png';  // Reemplaza con la ruta correcta de la imagen

const Componente3 = ({ color }) => {
  return (
    <div className="component" style={{ backgroundColor: color }}>
      
      <img src={imagen} alt="Fotografía" className="photo" />
    </div>
  );
};

export default Componente3;
