import React from "react";
import { useNavigate } from "react-router-dom";

function PerfilCreado() {
  const navegate = useNavigate();

  return (
    <div className="informacion">
      <h1 className="titulo">¡tu perfil está hecho! </h1>

      <img
        className="imagen-usuario"
        src="https://assets.stickpng.com/images/585e4beacb11b227491c3399.png"
        alt="imagen de usuario"
      />

      <button
        className="btn btn-morado"
        onClick={() => {
          navegate("/home");
        }}
      >
        Finalizar
      </button>
    </div>
  );
}

export default PerfilCreado;
