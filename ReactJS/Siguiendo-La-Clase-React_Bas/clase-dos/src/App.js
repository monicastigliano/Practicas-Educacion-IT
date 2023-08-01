import "bootstrap/dist/css/bootstrap.css";
import Cabecera from "./components/Cabecera";
import TodoList from './components/TodoList';

function App() {
  return (
    <div >
      <Cabecera titulo="React Basico - Clase 2" subtitulo="TodoList"/>
      <main className="container w-50">
        <TodoList/>
      </main>
    </div>
  );
}

export default App;
