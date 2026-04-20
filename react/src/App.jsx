import { useState, useEffect } from 'react';
import './App.css';
import IngresarNombre from './ingresarNombre.jsx';

function App() {
  const [nombre, setNombre] = useState('');
  const [data, setData] = useState(null);

  useEffect(() => {
    if (nombre) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${nombre.toLowerCase()}/`)
        .then(res => res.json())
        .then(json => setData(json))
        .catch(err => console.error(err));
    }
  }, [nombre]);

  return (
    <>
      <h1>Pokedex</h1>
      <IngresarNombre onNombreChange={setNombre} />
      {data && (
        <div>
          <p>Nombre: {data.name} <br /> Imagen: {data.sprites.front_default}</p>
        </div>
      )}
    </>
  );
}

export default App;
