import { connect } from "react-redux";
import TodoList from "../components/TodoList";

function mapStateToProp(state){
    return{
        tareas: state.tareas
    }
}

export default connect(mapStateToProp)(TodoList)