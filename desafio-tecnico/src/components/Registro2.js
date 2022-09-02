import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Etapas from "./Etapas";
import UserPool from "../UserPool";

import FacebookLogin from "react-facebook-login";
import GoogleLogin from "react-google-login";

import { gapi } from "gapi-script";

function Registro2() {
  // Pantalla en la que se espera a que usuario ingrese informacion necesaria para el registro
  useEffect(() => {
    function start() { // Funcion que permite el correcto desempeño del registro por google
      gapi.client.init({
        clientId:
          "915354670638-ffae1a93lasgjdji297r8cohqda8aou4.apps.googleusercontent.com",
        scope: "email",
      });
    }
    gapi.load("client:auth2", start);
  }, []);

  const navegate = useNavigate();

  const [usuario, setUsuario] = useState("");
  const [telefono, setTelefono] = useState("");
  const [contra, setContra] = useState("");
  const [contra2, setContra2] = useState("");

  const onSubmit = (e) => { // Evento que capta el estimulo en el boton de registro
    e.preventDefault();
    if (contra === contra2) { // Se comparan las 2 contrasenas suministradas
      UserPool.signUp(usuario, contra, [], null, (err, data) => { // Se registra el usuario en user pool
        if (err) {
          console.log(err);
          alert("Se presentó un error en el registro");
        } else {
          console.log(data);
          navegate("/Registro4"); 
        }
      });
    } else {
      alert("Las contraseñas no coinciden ");
    }
  };

  const responseFacebook = (response) => { // Funcion que recibe la informacion del registro de facebook y la almacena en user pool
    console.log(response);

    UserPool.signUp(response.email, response.email, [], null, (err, data) => {
      if (err) {
        console.log(err);
        alert("Se presentó un error en el registro");
      } else {
        console.log(data);
        navegate("/home");
      }
    });
  };

  const onSuccess = (response) => { // Funcion que recibe la informacion del registro de google y la almacena en user pool
    console.log("SUCCESS", response);

    UserPool.signUp(
      response.profileObj.email,
      response.profileObj.email,
      [],
      null,
      (err, data) => {
        if (err) {
          console.log(err);
          alert("Se presentó un error en el registro");
        } else {
          console.log(data);
          navegate("/home");
        }
      }
    );
  };
  const onFailure = (response) => {
    console.log("FAILED", response);
  };

  return (
    <div className="informacion">
      <Etapas etapaActual={2} />

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
          type="tel"
          placeholder="Telefono"
          name="phone"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
        />
        <input
          className="entrada"
          type="password"
          placeholder="Contraseña"
          name="contraseña"
          value={contra}
          onChange={(e) => setContra(e.target.value)}
        />
        <input
          className="entrada"
          type="password"
          placeholder="Repetir contraseña"
          name="contraseña2"
          value={contra2}
          onChange={(e) => setContra2(e.target.value)}
        />
        <p>-------- o ingrese con --------</p>

        <div>
          <FacebookLogin
            className="facebook-login"
            appId="788274975660599"
            autoLoad={false}
            fields="name,email"
            callback={responseFacebook}
          />
        </div>

        <div>
          <GoogleLogin
            clientId={
              "915354670638-ffae1a93lasgjdji297r8cohqda8aou4.apps.googleusercontent.com"
            }
            onSuccess={onSuccess}
            onFailure={onFailure}
          />
        </div>

        <div className="condiciones-comunicaicones">
          <div className="condiciones">
            <input
              className=""
              type="checkbox"
              name="opcion1"
              value="opcion1"
            />
            <label>
              Acepto las condiciones de uso y politicas de privacidad
            </label>
          </div>

          <div className="condiciones">
            <input
              className=""
              type="checkbox"
              name="opcion2"
              value="opcion2"
            />
            <label>Acepto el envio de comunicaicones</label>
          </div>
        </div>

        <button className="btn btn-morado" type="submit">
          Crear
        </button>
      </form>
    </div>
  );
}

export default Registro2;
