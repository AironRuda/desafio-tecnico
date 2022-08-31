import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navegate = useNavigate();

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
