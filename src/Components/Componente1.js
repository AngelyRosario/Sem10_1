import React from 'react';

const Componente1 = ({ color, cambiodecolor }) => {
  return (
    <div className="component" style={{ backgroundColor: color }}>
      <button 
        onClick={cambiodecolor} 
        className="styled-button" 
        aria-label="Cambiar el Color"
      >
        Cambiar de Color
      </button>
    </div>
  );
};
function componente1({ color, cambiodecolor }){
  return (
    <div className="component" style={{ backgroundColor: color }}>
      <button 
        onClick={cambiodecolor} 
        className="styled-button" 
        aria-label="Cambiar el Color"
      >
        Cambiar de Color
      </button>
    </div>
  );

}

export default Componente1;
