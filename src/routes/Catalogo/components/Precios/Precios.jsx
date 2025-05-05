import React from "react";

const Precios = ({ realPrice, finalPrice }) => {
  const formatearPrecio = (precio) => {
    return precio.toLocaleString("es-AR", {
      style: "currency",
      currency: "ARS",
    });
  };

  return (
    <div className="precios">
      <p className="precio-real">
        Precio Real: <span>{formatearPrecio(realPrice)}</span>
      </p>
      <p className="precio-oferta">
        Precio con Oferta: <span>{formatearPrecio(finalPrice)}</span>
      </p>
    </div>
  );
};

export default Precios;
