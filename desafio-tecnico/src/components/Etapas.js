import React from "react";

function Etapas(props) { // Funcion que pinta los recuadros de las etapas del registro

  return (
    <div className="etapas"> 
      {props.etapaActual === 1 && ( // Extrae de las props un digito que le indica en que estapa se encuentra
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
      )}

      {props.etapaActual === 2 && ( //En etapa 2 se puntan 2 recuadros
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
      )}

      {props.etapaActual === 3 && ( // En etapa 3 se puntan 3 recuadros
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
          <li>
            <strong>4</strong>
          </li>
        </ul>
      )}

      {props.etapaActual === 4 && ( //En etapa 4 se puntan 4 recuadros
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
      )}
    </div>
  );
}

export default Etapas;
