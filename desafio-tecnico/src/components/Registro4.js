import React from "react";
import { useNavigate } from "react-router-dom";

function Registro4() {

  const navegate = useNavigate()

  return (
    <div className="informacion">
      <div className="etapas">
        <ul>
          <li className="etapa-actual">
            <strong>1</strong>
          </li>
          <li className="etapa-actual">
            <strong>2</strong>
          </li>
          <li className="etapa-actual">
            <strong>3</strong>
          </li>
          <li className="etapa-actual">
            <strong>4</strong>
          </li>
        </ul>
      </div>

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
          navegate("/registro4");
        }}
      >
        completar perfil
      </button>
    </div>
    );
}

export default Registro4;
