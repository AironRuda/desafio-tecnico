import React from "react";
import { useNavigate } from "react-router-dom";
import Etapas from "./Etapas";

function Registro4() { // Etapa en la que se esperaria que se confirmara el codigo de autenticacion

  const navegate = useNavigate()

  return (
    <div className="informacion">
      <Etapas etapaActual={4}/>

      <img
        className="imagen-usuario"
        src="https://cdn-icons-png.flaticon.com/512/88/88144.png"
        alt="imagen de usuario"
      />

      <h2>No recibio el codigo?</h2>
      <button className="btn btn-blanco">
        <strong>Reenviar</strong>
      </button>

      <form className="digitos-confirmacion">
        <input type="num" />
        <input type="num" />
        <input type="num" />
        <input type="num" />
      </form>

      <button
        className="btn btn-morado"
        onClick={() => {
          navegate("/home");
        }}
      >
        completar perfil
      </button>
    </div>
    );
}

export default Registro4;
