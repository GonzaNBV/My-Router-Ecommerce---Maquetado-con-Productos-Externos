import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Registro.css";

function Registro() {
  const navigate = useNavigate();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    password: "",
    confirmarPassword: "",
  });

  const togglePasswordVisibility = (campo) => {
    if (campo === "password") {
      setPasswordVisible(!passwordVisible);
    } else if (campo === "confirmPassword") {
      setConfirmPasswordVisible(!confirmPasswordVisible);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmarPassword) {
      alert("Las contraseñas no coinciden.");
    } else {
      alert("Registro exitoso.");
    }
  };

  // Función para navegar al login
  const handleBackToLogin = () => {
    navigate("/login");
  };

  return (
    <div className="registro-container">
      {/* Botón para regresar al login con la flecha */}
      <button 
        type="button" 
        className="back-to-login" 
        onClick={handleBackToLogin}
      >
        <i className="bi bi-arrow-left-circle"></i> Back to Login
      </button>
      
      <h2>CREATE AN ACCOUNT</h2>
      <p className="subtitle">Enter your information to register</p>
      <form className="registro-form" onSubmit={handleSubmit}>
        <div className="form-group row">
          <div className="form-group">
            <label htmlFor="nombre">First name</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              placeholder="Write your first name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="apellido">Last name</label>
            <input
              type="text"
              id="apellido"
              name="apellido"
              value={formData.apellido}
              onChange={handleChange}
              placeholder="Write your last name"
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Write your email"
          />
        </div>

        <div className="form-group">
          <label htmlFor="telefono">Phone</label>
          <input
            type="tel"
            id="telefono"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            placeholder="Write your phone number"
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <div className="password-container">
            <input
              type={passwordVisible ? "text" : "password"}
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Write your password"
            />
            <button
              type="button"
              className="password-toggle"
              onClick={() => togglePasswordVisibility("password")}
              aria-label="Toggle password visibility"
            >
              {passwordVisible ? (
                <i className="bi bi-eye"></i>
              ) : (
                <i className="bi bi-eye-slash"></i>
              )}
            </button>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="confirmarPassword">Confirm Password</label>
          <div className="password-container">
            <input
              type={confirmPasswordVisible ? "text" : "password"}
              id="confirmarPassword"
              name="confirmarPassword"
              value={formData.confirmarPassword}
              onChange={handleChange}
              placeholder="Confirm your password"
            />
            <button
              type="button"
              className="password-toggle"
              onClick={() => togglePasswordVisibility("confirmPassword")}
              aria-label="Toggle confirm password visibility"
            >
              {confirmPasswordVisible ? (
                <i className="bi bi-eye"></i>
              ) : (
                <i className="bi bi-eye-slash"></i>
              )}
            </button>
          </div>
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Registro;
