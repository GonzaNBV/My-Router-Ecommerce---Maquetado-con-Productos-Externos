import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Productos.css";

const Productos = () => {
  const productos = [
    {
      id: 1,
      imagenes: [
        "/0-images/Sudadera/sudadera-cremallera-mulyu-1.jpg",
        "/0-images/Sudadera/sudadera-cremallera-mulyu-2.jpg",
        "/0-images/Sudadera/sudadera-cremallera-mulyu-3.jpg",
      ],
      titulo: "RM WILLIAMS",
      descripcion: "Sudadera Mulungarie con cremallera de un cuarto",
      precioOriginal: 84300,
      descuento: 30,
      color: "#979B85",
      tallas: ["S", "M", "L", "XL", "XXL"],
    },
    {
      id: 2,
      imagenes: [
        "/0-images/Camiseta/vara-polo-1.jpg",
        "/0-images/Camiseta/vara-polo-2.jpg",
        "/0-images/Camiseta/vara-polo-3.jpg",
      ],
      titulo: "RM WILLIAMS",
      descripcion: "Camiseta polo de algodón con ajuste clásico",
      precioOriginal: 42000,
      descuento: 20,
      color: "#375C88",
      tallas: ["S", "M", "L", "XL", "XXL"],
    },
    {
      id: 3,
      imagenes: [
        "/0-images/Chaqueta/chaqueta-bomber-palmer-1.jpg",
        "/0-images/Chaqueta/chaqueta-bomber-palmer-2.jpg",
        "/0-images/Chaqueta/chaqueta-bomber-palmer-3.jpg",
      ],
      titulo: "RM WILLIAMS",
      descripcion: "Chaqueta bomber de abrigo ligero",
      precioOriginal: 91000,
      descuento: 30,
      color: "#8D8D69",
      tallas: ["S", "M", "L", "XL", "XXL"],
    },
    {
      id: 4,
      imagenes: [
        "/0-images/Camisa/camisaox-1.jpg",
        "/0-images/Camisa/camisaox-2.jpg",
        "/0-images/Camisa/camisaox-3.jpg",
      ],
      titulo: "RM WILLIAMS",
      descripcion: "Camisa Oxford regular con cuello abotonado",
      precioOriginal: 43500,
      descuento: 50,
      color: "#33538A",
      tallas: ["S", "M", "L", "XL", "XXL"],
    },
    {
      id: 5,
      imagenes: [
        "/0-images/Chaleco/chaleco-1.jpg",
        "/0-images/Chaleco/chaleco-2.jpg",
        "/0-images/Chaleco/chaleco-3.jpg",
      ],
      titulo: "RM WILLIAMS",
      descripcion: "Chaleco con relleno Primaloft de Padstow",
      precioOriginal: 74987,
      descuento: 40,
      color: "#38382C",
      tallas: ["S", "M", "L", "XL", "XXL"],
    },
    {
      id: 6,
      imagenes: [
        "/0-images/Rugby/rugby-1.jpg",
        "/0-images/Rugby/rugby-2.jpg",
        "/0-images/Rugby/rugby-3.jpg",
      ],
      titulo: "RM WILLIAMS",
      descripcion: "Camisa de rugby con cuello clásico y bordado",
      precioOriginal: 62000,
      descuento: 60,
      color: "#2B2E3D",
      tallas: ["S", "M", "L", "XL", "XXL"],
    },
  ];

  const [cantidades, setCantidades] = useState(
    productos.reduce((acc, p) => ({ ...acc, [p.id]: 1 }), {})
  );
  const [imagenActual, setImagenActual] = useState({});
  const [tallaSeleccionada, setTallaSeleccionada] = useState({});
  const [productoComprado, setProductoComprado] = useState(null);

  const siguienteImagen = (id, imagenes) => {
    setImagenActual((prev) => ({
      ...prev,
      [id]: ((prev[id] || 0) + 1) % imagenes.length,
    }));
  };

  const anteriorImagen = (id, imagenes) => {
    setImagenActual((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) === 0 ? imagenes.length - 1 : prev[id] - 1,
    }));
  };

  const imagenIndex = (id) => imagenActual[id] || 0;

  const manejarCompra = (id) => {
    setProductoComprado(id);
    setTimeout(() => {
      setProductoComprado(null);
    }, 2000);
  };

  return (
    <div className="productos-container">
      {productos.map((producto) => (
        <div
          key={producto.id}
          className={`product-card ${productoComprado === producto.id ? "comprado" : ""}`}
        >
          <div className="image-slider">
            <img
              src={producto.imagenes[imagenIndex(producto.id)]}
              alt={producto.titulo}
              className="product-image"
              onClick={() => siguienteImagen(producto.id, producto.imagenes)}
            />
            <div className="arrow-left" onClick={() => anteriorImagen(producto.id, producto.imagenes)}>
              <i className="bi bi-caret-left-fill"></i>
            </div>
            <div className="arrow-right" onClick={() => siguienteImagen(producto.id, producto.imagenes)}>
              <i className="bi bi-caret-right-fill"></i>
            </div>
          </div>

          <h3 className="titulo-principal">{producto.titulo}</h3>
          <p className="descripcion-producto">{producto.descripcion}</p>

          <div className="price">
            <span className="precio-original">${producto.precioOriginal.toLocaleString()}</span>
            <span className="price-updated">
              ${((producto.precioOriginal * (100 - producto.descuento)) / 100).toLocaleString()}
            </span>
          </div>

          {producto.descuento > 0 && (
            <div className="discount-text">{producto.descuento}% DE DESCUENTO</div>
          )}

          <div className="color-indicator" style={{ backgroundColor: producto.color }}></div>

          <div className="size-selector">
            {producto.tallas.map((talla) => (
              <button
                key={talla}
                className={tallaSeleccionada[producto.id] === talla ? "selected" : ""}
                onClick={() =>
                  setTallaSeleccionada((prev) => ({ ...prev, [producto.id]: talla }))
                }
              >
                {talla}
              </button>
            ))}
          </div>

          <div className="contador">
            <button onClick={() => setCantidades((prev) => ({ ...prev, [producto.id]: Math.max(prev[producto.id] - 1, 1) }))}>-</button>
            <input type="text" value={cantidades[producto.id]} readOnly />
            <button onClick={() => setCantidades((prev) => ({ ...prev, [producto.id]: prev[producto.id] + 1 }))}>+</button>
          </div>

          <Link to={`/producto/${producto.id}`}>
            <button className="boton-detalle">VER DETALLE</button>
          </Link>

          <button className="boton-comprar" onClick={() => manejarCompra(producto.id)}>
            COMPRAR
          </button>

          {productoComprado === producto.id && (
            <div className="mensaje-compra">GRACIAS POR SU COMPRA</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Productos;
