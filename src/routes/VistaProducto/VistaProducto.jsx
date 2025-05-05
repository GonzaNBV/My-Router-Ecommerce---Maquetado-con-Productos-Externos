import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './VistaProducto.css';

function VistaProducto() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [producto, setProducto] = useState(null);
  const [imagenActual, setImagenActual] = useState(0);
  const [error, setError] = useState(null);
  const [comprado, setComprado] = useState(false);
  const [tallaSeleccionada, setTallaSeleccionada] = useState('');
  const [cantidad, setCantidad] = useState(1);

  useEffect(() => {
    fetch('/productos.json')
      .then((res) => res.json())
      .then((data) => {
        const encontrado = data.find((item) => item.id === parseInt(id));
        if (encontrado) {
          setProducto(encontrado);
        } else {
          setError("Producto no encontrado.");
        }
      })
      .catch((err) => {
        console.error("Error al cargar el producto:", err);
        setError("Error al cargar el producto.");
      });
  }, [id]);

  if (error) return <p>{error}</p>;
  if (!producto) return <p>Cargando producto...</p>;

  const imagenes = [producto.imagen1, producto.imagen2, producto.imagen3];

  const precioFinal = producto.descuento
    ? Math.round(producto.precio * (1 - producto.descuento / 100))
    : producto.precio;

  const manejarCompra = () => {
    setComprado(true);
  };

  return (
    <div className="vista-producto">
      <button className="btn-volver" onClick={() => navigate(-1)}>
        <i className="bi bi-arrow-left-circle-fill"></i>
      </button>

      <div className="marco-producto">
        <div className="vista-lado-izquierdo">
          <img
            src={imagenes[imagenActual]}
            alt="Producto"
            className="imagen-grande"
            onClick={() => setImagenActual((imagenActual + 1) % imagenes.length)}
          />
        </div>

        <div className="vista-lado-derecho">
          <h2>{producto.titulo}</h2>
          <p>{producto.descripcion}</p>

          <div className="precios">
            {producto.descuento > 0 && (
              <span className="precio-original">${producto.precio.toLocaleString()}</span>
            )}
            <span className="precio-final">${precioFinal.toLocaleString()}</span>
          </div>

          {producto.descuento > 0 && (
            <span className="descuento-texto">{producto.descuento}% OFF</span>
          )}

          {producto.colores && producto.colores.length > 0 && (
            <div className="colores-container">
              {producto.colores.map((color, index) => (
                <div
                  key={index}
                  className="color-indicador"
                  style={{ backgroundColor: color }}
                ></div>
              ))}
            </div>
          )}

          {producto.tallas && (
            <div className="tallas-container">
              {producto.tallas.map((talla) => (
                <button
                  key={talla}
                  className={`talla-boton ${tallaSeleccionada === talla ? 'seleccionada' : ''}`}
                  onClick={() => setTallaSeleccionada(talla)}
                >
                  {talla}
                </button>
              ))}
            </div>
          )}

          <div className="contador">
            <button onClick={() => setCantidad(Math.max(cantidad - 1, 1))}>-</button>
            <input type="text" value={cantidad} readOnly />
            <button onClick={() => setCantidad(cantidad + 1)}>+</button>
          </div>

          <button
            className={`boton-comprar ${comprado ? 'comprado' : ''}`}
            onClick={manejarCompra}
            disabled={comprado}
          >
            {comprado ? 'COMPRADO' : 'COMPRAR'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default VistaProducto;
