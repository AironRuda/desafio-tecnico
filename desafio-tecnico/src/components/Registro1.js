import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Registro1() {
  const navegate = useNavigate();

  return (
    <div className="informacion">
      <div className="etapas">
        <ul>
          <li className="etapa-actual">
            <strong>1</strong>
          </li>
          <li>
            <strong>2</strong>
          </li>
          <li>
            <strong>3</strong>
          </li>
          <li>
            <strong>4</strong>
          </li>
        </ul>
      </div>

      <img
        className="imagen-usuario" // Estilos de la imagen
        src="https://cdn-icons-png.flaticon.com/512/24/24810.png" // Imagen extraida de internet
        alt="Imagen inicial" // Texto alternativo de la imagen
      />

      <p>Ingresa tu numero de celular</p>

      <form className="formulario">
        <input className="entrada" type="tel" name="phone" />
        <p>
          Ya tienes cuenta? <br />
          <NavLink to={"/iniciar_sesion"}>
            Iniciar sesion con ususario y contraseña
          </NavLink>
        </p>
        <input
          type="submit"
          className="btn btn-morado"
          value="continuar"
          onClick={() => {
            navegate("/Registro2");
          }}
        />
      </form>
    </div>
  );
}

export default Registro1;
