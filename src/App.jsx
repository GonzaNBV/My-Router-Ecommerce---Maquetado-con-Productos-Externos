import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./styles/global.css";
import Login from "./routes/Login/Login";
import Catalogo from "./routes/Catalogo/components/Productos/Productos";
import VistaProducto from "./routes/VistaProducto/VistaProducto";
import Registro from "./routes/Registro/Registro";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/productos" element={<Catalogo />} />
          <Route path="/producto/:id" element={<VistaProducto />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
