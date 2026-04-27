import { useState, useEffect } from 'react';
import IngresarNombre from './ingresarNombre.jsx';
import './App.css'

function App() {
  const [nombre, setNombre] = useState('');
  const [data, setData] = useState(null);

  useEffect(() => {
    if (nombre) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${nombre.toLowerCase()}/`)
        .then(res => res.json())
        .then(json => setData(json))
        .catch(err => setData(null) );
    }
  }, [nombre]);
  
  return(
    <>
    <h1>Pokedex</h1>
      <img src="https://fontmeme.com/permalink/260422/95136b1b.png" alt=""/>
      <IngresarNombre onNombreChange={setNombre} />
      {data && (

        <div class = "Display_Pokemon">
          <div>
          <p>Nombre: {data.name}</p>
          <p>ID: {data.id}</p>
          <img src={data.sprites.other["official-artwork"].front_default} alt={data.name} />
          <p>Tipo/s: {data.types[0].type.name} {data.types[1] && data.types[1].type.name}</p>
          <p>Peso: {data.weight / 10} kg</p>
          <p>Altura: {data.height / 10} m</p>
          </div>
        </div>
      )}
      
    </>
  );
}
export default App;