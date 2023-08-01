import "bootstrap/dist/css/bootstrap.css";
import Cabecera from "./Components/Cabecera";
import Lista from "./Components/Lista";
import PieDePagina from "./Components/PieDePagina";
import Publicidad from "./Components/Publicidad";

const alumnos = [
  {id: 1, nombre: "Marcelo Solum"},
  {id: 2, nombre: "Monica Stigliano"},
  {id: 3, nombre: "Aron Amaro"},
  {id: 4, nombre: "Waskar Nuñez"},
  {id: 5, nombre: "Andres Valsesia"}
]

function App() {
  return (
    <div>
      <Cabecera titulo="Bienvenidos al Curso de React" subtitulo="Clase 1"/>
      <main className="container w-50">
        <h3>Integrantes del Curso:</h3>
        <Lista items={alumnos}/>
        <Publicidad/>
      </main>
      <PieDePagina texto="CopyRight 2023. EducacionIT. Todos los derechos reservados"/>
    </div>
  );
}

export default App;
