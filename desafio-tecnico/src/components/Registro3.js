import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Etapas from "./Etapas";

function Registro3() {
  const navegate = useNavigate();

  return (
    <div className="informacion">
      <Etapas etapaActual={3}/>

      <h1 className="titulo">Tu cuenta fue creada</h1>

      <img
        className="imagen-usuario"
        src="https://assets.stickpng.com/images/585e4beacb11b227491c3399.png"
        alt="imagen de usuario"
      />

      <button
        className="btn btn-morado"
        onClick={() => {
          navegate("/registro4");
        }}
      >
        completar perfil
      </button>
    </div>
  );
}

export default Registro3;
