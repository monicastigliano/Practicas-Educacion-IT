import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Tarjeta from './componentes/Tarjeta-Personal/Tarjeta';
import User from './componentes/Consumo_de_Recursos/User';
import Usuarios from './componentes/Desafio_M3/Usuarios';
import Posts from './componentes/Desafio_M3/Posts';
import Maestro from './componentes/Desafio_M4/Maestro';
import { BrowserRouter } from 'react-router-dom';
import DetalleMaestro from './componentes/Desafio_M4/DetalleMaestro';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Tarjeta nombre="Mónica Stigliano" profesion="Desarrollo  de software"/> */}
    {/* <User id= "1"/> */}
    {/* <Usuarios/> */}
    {/* <Posts/> */}
    <BrowserRouter>
        <DetalleMaestro/>
    </BrowserRouter>    
  </React.StrictMode>

);


