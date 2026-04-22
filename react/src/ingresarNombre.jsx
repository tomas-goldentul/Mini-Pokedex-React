import { useState } from 'react';
import './ingresarNombre.css'

function IngresarNombre({ onNombreChange }) {
  const [nombre, setNombre] = useState('');

  const handleChange = (e) => {
    const nuevoNombre = e.target.value;
    setNombre(nuevoNombre);
    onNombreChange(nuevoNombre);
  };

  return (
    <>
      <input
        type="text"
        value={nombre}
        onChange={handleChange}
        placeholder='Ingresa nombre o ID de un pokemon'
      />
      <p></p>
    </>
  );
}

export default IngresarNombre;
