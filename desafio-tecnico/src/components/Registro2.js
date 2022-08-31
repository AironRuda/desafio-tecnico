import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Registro2() {

  const navegate = useNavigate();

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
          <li>
            <strong>3</strong>
          </li>
          <li>
            <strong>4</strong>
          </li>
        </ul>
      </div>
      
      <p>Ingresa tu numero de celular</p>

      <form className="formulario">
        <input className="entrada" type="text" name="usuario" />
        <input className="entrada" type="tel" name="phone" />
        <input className="entrada" type="password" name="contraseña" />
        <input className="entrada" type="password" name="contraseña2" />
        <p>-------- o ingrese con --------</p>
        <div>
            <h1>confirmacion con paginas extras</h1>
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
        <input 
          type="submit" 
          className="btn btn-morado" 
          value="continuar" 
          onClick={() => {
            navegate("/registro3")
          }}
          />
      </form>
    </div>
  );
}

export default Registro2;
