import { connect } from 'react-redux'
import Footer from '../components/footer/Footer'
import {setFilter, deleteCompletedTodos} from '../actions'

const mapStateToProps = (state, ownProps) => ({
    todos: state.todos
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    setFilter: (filter) => dispatch(setFilter(filter)),
    deleteCompletedTodos: () => dispatch(deleteCompletedTodos())
})

export default connect(mapStateToProps, mapDispatchToProps)(Footer)

