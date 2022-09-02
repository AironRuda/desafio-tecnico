import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Inicio from "./components/Inicio";
import IniciarSesion from "./components/IniciarSesion";
import Registro1 from "./components/Registro1";
import Registro2 from "./components/Registro2";
import Registro3 from "./components/Registro3";
import PerfilCreado from "./components/PerfilCreado";
import Home from "./components/Home";
import Registro4 from "./components/Registro4";

function Router() { // Navegacion de la aplicacion
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/iniciar_sesion" element={<IniciarSesion />} />

          <Route path="/perfil_creado" element={<PerfilCreado />} />
          <Route path="/home" element={<Home />} />

          <Route path="/registro1" element={<Registro1 />} />
          <Route path="/registro2" element={<Registro2 />} />
          <Route path="/registro3" element={<Registro3 />} />
          <Route path="/registro4" element={<Registro4 />} />

          <Route path="*" element={<h2>Error 404</h2>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Router;
