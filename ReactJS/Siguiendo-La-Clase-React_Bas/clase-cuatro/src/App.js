import "bootstrap/dist/css/bootstrap.css"
import TodoList from "./containers/TodoList";

import AddTodoList from "./components/AddTodoList";


import thenOnlySourceOfTruth from "./store/store";
import { Provider } from "react-redux";

function App() {
  // const tareas = [
  //   { id: 1, nombre:"Ordenar la casa", done: false},
  //   { id: 2, nombre:"Ordeñar la vaca", done: false},
  //   { id: 3, nombre:"Recolectar huevos", done: false},
  //   { id: 4, nombre:"Desarmar señales alienígenas", done: false}
  // ]
  return (
    <Provider store={thenOnlySourceOfTruth}>
      <header className="alert alert-info text-center">
        <h1 className="display-1">TodoList</h1>
      </header>
      <main className="w-50 m-auto">
        <TodoList />
        <AddTodoList agregarTarea={(n) => { alert(n) }} />
      </main>
    </Provider>
  );
}

export default App;
