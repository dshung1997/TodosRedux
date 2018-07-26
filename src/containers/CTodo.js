import { connect } from 'react-redux'
import Todo from '../components/todo/Todo'
import {addTodo, toggleAllTodos} from '../actions'

let getFilteredList = (todos, filter) => {
    let filteredList = todos.filter((todo) => (filter === 'all') || (filter === 'active' && !todo.completed) || (filter === 'completed' && todo.completed))
    console.log("todos : ", todos);
    console.log("filteredList : ", filteredList);
    return filteredList;
}

// let print = (state, ownProps) => {
//     console.log("state ", state)
//    console.log("ownProps ", ownProps);

//    return [];
// }

const mapStateToProps = (state, ownProps) => ({
    // todos: print(state, ownProps)
    todos: getFilteredList(state.todos, state.filter)
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    addTodo: (data) => dispatch(addTodo(data.content)),
    toggleAllTodos: (status) => dispatch(toggleAllTodos(status))
})

export default connect(mapStateToProps, mapDispatchToProps)(Todo)

