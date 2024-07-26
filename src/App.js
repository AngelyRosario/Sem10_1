import React, { useState } from 'react';
import Componente1 from './Components/Componente1';
import Componente2 from './Components/Componente2';
import Componente3 from './Components/Componente3';
import './Components/App.css';

const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const App = () => {
  const [colors, setColors] = useState({
    comp1: 'blue',
    comp2: 'green',
    comp3: 'lightblue',
  });

  const cambiodecolor = () => {
    setColors({
      comp1: getRandomColor(),
      comp2: getRandomColor(),
      comp3: getRandomColor(),
    });
  };

  return (
    <div className="App">
      <h1>Ejercicio 10.1</h1>
      <div className="container">
        
        <Componente1 color={colors.comp1} cambiodecolor={cambiodecolor} />
        <Componente2 color={colors.comp2} cambiodecolor={cambiodecolor} />
        <Componente3 color={colors.comp3} />
      </div>
    </div>
  );
};

export default App;
