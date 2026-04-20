import { useState } from 'react';

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
      />
      <p>{nombre}</p>
    </>
  );
}

export default IngresarNombre;
