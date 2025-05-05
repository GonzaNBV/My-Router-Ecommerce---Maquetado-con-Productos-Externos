import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";

function Login() {
  const navigate = useNavigate();
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/productos");
  };

  return (
    <div className="pantalla-dividida">
      <div className="lado-izquierdo">
        <div className="login-container">
          <h2>WELCOME</h2>
          <p className="subtitle">Sign in to your account</p>
          <form className="registro-form" onSubmit={handleLogin}>
            <div className="form-group">
              <label htmlFor="username">Email or Username</label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Write your email or username"
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <div className="password-container">
                <input
                  type={passwordVisible ? "text" : "password"}
                  id="password"
                  name="password"
                  placeholder="Write your password"
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={togglePasswordVisibility}
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

            <button type="submit">Login</button>
          </form>

          <p style={{ marginTop: "20px", fontSize: "14px" }}>
            Don’t have an account?{" "}
            <Link
              to="/registro"
              style={{ color: "#007bff", textDecoration: "none" }}
            >
              Register here
            </Link>
          </p>
        </div>
      </div>

      <div className="lado-derecho"></div>

      <div className="logo-overlay">
        <img src="/0-images/Fondo/logo.png" alt="Logo" />
      </div>
    </div>
  );
}

export default Login;
