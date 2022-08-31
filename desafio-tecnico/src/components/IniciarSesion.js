import React from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";

function IniciarSesion() {
  const navegate = useNavigate();

  return (
    <div className="informacion">
      <img
        className="imagen-usuario"
        src="https://assets.stickpng.com/images/585e4beacb11b227491c3399.png"
        alt="imagen de usuario"
      />

      <form className="formulario">
        <input className="entrada" type="text" name="usuario" />
        <input className="entrada" type="password" name="contraseña" />
        <p>
          Aun no tienes cuenta?
          <NavLink to={"/registro1"}>Registrate</NavLink>
        </p>

        <input
          className="btn btn-morado"
          type="submit"
          value="Iniciar sesion"
        />
      </form>
      <button
        className="btn btn-morado"
        onClick={() => {
          navegate("/perfil_creado");
        }}
      >
        Iniciar sesion
      </button>
    </div>
  );
}

export default IniciarSesion;
