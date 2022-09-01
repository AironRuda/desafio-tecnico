import "./assets/css/App.css"; // Importo los estilos de la aplicacion
import Registro from "./components/Registro";
import Router from "./Router"; // Importo el componente Router, en donde se desplegará la informacion

function App() {
  return (
    <div className="App">{/*Se le asignan estilos*/}
      <Router /> {/* Se hace llamado al componente */}
    </div>
  );
}

export default App; // Se exporta el componente
