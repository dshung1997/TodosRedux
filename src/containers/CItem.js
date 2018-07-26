import { connect } from 'react-redux'
import Item from '../components/item/Item'
import {toggleTodo, deleteTodo} from '../actions'

const mapDispatchToProps = (dispatch, ownProps) => ({
    toggleTodo: () => dispatch(toggleTodo(ownProps.todo.id)),
    deleteTodo: () => dispatch(deleteTodo(ownProps.todo.id))
})

export default connect(null, mapDispatchToProps)(Item)

