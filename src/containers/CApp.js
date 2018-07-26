import { connect } from 'react-redux'
import App from '../App'
import {setFilter} from '../actions'

const mapStateToProps = (state, ownProps) => ({
    todos: state.todos,
    filter: state.filter
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    setFilter: (filter) => dispatch(setFilter(filter))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)

