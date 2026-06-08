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
        .catch(err => setData(null));
    }
  }, [nombre]);

  return (
    <>
      <h1>Pokedex</h1>
      <img
        src="https://fontmeme.com/permalink/260422/95136b1b.png"
        alt=""
      />
      <IngresarNombre onNombreChange={setNombre} />

      {data ? (
        <div className="Display_Pokemon">
          <div>
            <p>Nommbre: {data.name}</p>
            <p>Id: {data.id}</p>
            <img
              src={data.sprites.other["official-artwork"].front_default}
              alt={data.name}
            />
            <p>
              Tipo/s: {data.types[0].type.name}{" "}
              {data.types[1] && data.types[1].type.name}
            </p>
            <p>Peso: {data.weight / 10} kg</p>
            <p>Altura: {data.height / 10} m</p>
          </div>
        </div>
      ) :(
         nombre && (
        <>
          <p sty le={{ color: "red" }}>error: No se encontraron datos cargados del Pokémon</p>
          <img src="https://i.pinimg.com/originals/46/58/90/465890252b39cc9101e3180c9f735a6e.gif" alt="" id='pikachu'/>
        </>

      )
    )}
    </>
  );

}
export default App;