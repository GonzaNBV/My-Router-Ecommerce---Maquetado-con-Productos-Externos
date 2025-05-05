import React from "react";
import Precios from "../Precios/Precios";
import BotonComprar from "../BotonComprar/BotonComprar";

const DetallesPrecios = ({ producto }) => {
  return (
    <div className="detalles-precios">
      <h1>{producto.titulo}</h1>
      <img src={producto.imagen} alt={producto.titulo} />
      <Precios realPrice={producto.precio} finalPrice={producto.precio} />
      <BotonComprar />
    </div>
  );
};

export default DetallesPrecios;
