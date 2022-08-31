import React from "react";
import { useNavigate } from "react-router-dom";

function Inicio() {
  const navegate = useNavigate(); // Hook que me permitira navegar entre direcciones

  return (
    <>
      <img
        className="logo" // Estilos de la imagen
        src="https://www.sopitas.com/wp-content/uploads/2017/08/control.jpg?w=920" // Imagen extraida de internet
        alt="Imagen inicial" // Texto alternativo de la imagen
      />
      {/*Cajan de botones*/}
      <div className="btn-box">
        <button
          className="btn"
          onClick={() => {
            navegate("/iniciar_sesion");
          }}
        >
          <strong>iniciar sesion</strong>
        </button>

        <button
          className="btn btn-blanco"
          onClick={() => {
            navegate("/registro1");
          }}
        >
          <strong>Registro</strong>
        </button>
      </div>
    </>
  );
}

export default Inicio;
