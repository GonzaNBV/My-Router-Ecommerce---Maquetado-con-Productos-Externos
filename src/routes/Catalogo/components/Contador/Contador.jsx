import React, { useState } from 'react';

const ESTADOS_DISPONIBLES = {
  NO_COMPRADO: 'NO_COMPRADO',
  COMPRADO: 'COMPRADO',
  CARGANDO: 'CARGANDO',
};

const BotonComprar = () => {
  const [estadoBoton, setEstadoBoton] = useState(ESTADOS_DISPONIBLES.NO_COMPRADO);

  const manejarCompra = () => {
    setEstadoBoton(ESTADOS_DISPONIBLES.CARGANDO);

    setTimeout(() => {
      setEstadoBoton(ESTADOS_DISPONIBLES.COMPRADO);
    }, 2000);
  };

  let contenido;
  if (estadoBoton === ESTADOS_DISPONIBLES.COMPRADO) {
    contenido = <button disabled>Comprado</button>;
  } else if (estadoBoton === ESTADOS_DISPONIBLES.CARGANDO) {
    contenido = <button disabled>Cargando...</button>;
  } else {
    contenido = <button onClick={manejarCompra}>Comprar</button>;
  }

  return <div>{contenido}</div>;
};

export default BotonComprar;
