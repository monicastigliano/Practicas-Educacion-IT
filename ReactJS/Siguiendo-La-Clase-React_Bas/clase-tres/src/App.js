

import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Novedades from "./components/Novedades";
import Clientes from "./components/Clientes";
import Contacto from "./components/Contacto";
import FormCliente from "./components/FormCliente";

function App() {
  return (
    <BrowserRouter >
      <header className="alert alert-info mb-0">
         <h1 className="display-1">Bienvenidos a un CRM-Básico</h1>
      </header>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">Inicio</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/novedades">Novedades</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/clientes">Clientes</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contacto">Contacto</Link>
          </li>
        </ul>
      </nav>
      <main className="container">  
        <Routes>
          <Route path="/" Component={Home}/>
          <Route path="/novedades" Component={Novedades} />
          <Route path="/clientes" Component={Clientes} />
          <Route path="/contacto" Component={Contacto} />
          <Route path="/cliente/:id" Component={FormCliente} />
        </Routes>
      </main>
      
    </BrowserRouter>
  );
}

export default App;
