import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";
import UserPool from "../UserPool";

function IniciarSesion() {
  const navegate = useNavigate(); // Uso de estado para navegacion entre componentes

  const [usuario, setUsuario] = useState(""); // Sensa cambios en componente y los almacena mediante hooks
  const [contra, setContra] = useState(""); // Sensa cambios en componente y los almacena mediante hooks

  const onSubmit = (e) => { // Una vez presionado el boton del formulario
    e.preventDefault();

    const user = new CognitoUser({ // Se busca el usuario dentro del pool de usuarios
      Username: usuario,
      Pool: UserPool
    })

    const authDetails = new AuthenticationDetails({ // Se identifica el usuario
      Username: usuario,
      Password: contra,

    })

    user.authenticateUser(authDetails,{
      onSuccess: (data) => {
        console.log("onSuccess: ", data)
        navegate("/perfil_creado")
      },
      onFailure: (err) => {
        console.log("onFailure: ", err)
      },
      newPasswordRequired: (data) => {
        console.log("newPasswordRequired: ", data)
      }
    })
  };

  return (
    <div className="informacion">
      <img
        className="imagen-usuario"
        src="https://assets.stickpng.com/images/585e4beacb11b227491c3399.png"
        alt="imagen de usuario"
      />

      <form className="formulario" onSubmit={onSubmit}>
        <input
          className="entrada"
          type="text"
          placeholder="Usuario"
          name="usuario"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
        />
        <input
          className="entrada"
          type="password"
          name="contraseña"
          value={contra}
          onChange={(e) => setContra(e.target.value)}
        />
        <p>
          Aun no tienes cuenta?
          <NavLink to={"/registro1"}>Registrate</NavLink>
        </p>

        <button
          className="btn btn-morado"
          type="submit"
        >
          Iniciar sesion
        </button>
      </form>
    </div>
  );
}

export default IniciarSesion;
