import React from "react";
import { useNavigate } from "react-router-dom";

function Home() { // Componente al que se ingresa una vez el usuario se registró correctamente
  const navegate = useNavigate(); // Hook que permite la navegacion

  return (
    <div>
      <h1>Home</h1>
      <button
        className="btn"
        onClick={() => {
          navegate("/");
        }}
      >
        Volver a inicio
      </button>
    </div>
  );
}

export default Home;
