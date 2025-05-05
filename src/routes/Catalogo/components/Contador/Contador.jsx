import React, { useState } from "react";

const Contador = ({ producto }) => {
  const [cantidad, setCantidad] = useState(1);

  const aumentar = () => setCantidad(cantidad + 1);
  const disminuir = () => cantidad > 1 && setCantidad(cantidad - 1);

  return (
    <div className="contador">
      <button onClick={disminuir}>-</button>
      <span>{cantidad}</span>
      <button onClick={aumentar}>+</button>
    </div>
  );
};

export default Contador;
