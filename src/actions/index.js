import getNextId from '../HandleId.js'

export const addTodo = content => ({
    type: 'ADD_TODO',
    data: {
        id: getNextId(),
        completed: false,
        content
    }
})

export const deleteTodo = id => ({
    type: 'DELETE_TODO',
    data: {
        id
    }
})

export const deleteTodos = (ids) => ({
    type: 'DELETE_TODOS',
    data: {
        ids
    }
})

export const deleteCompletedTodos = () => ({
    type: 'DELETE_COMPLETED_TODOS'
})

export const toggleTodo = (id) => ({
    type: 'TOGGLE_TODO',
    data: {
        id
    }
})

export const toggleAllTodos = (status) => ({
    type: 'TOGGLE_ALL_TODOS',
    status
})


export const setFilter = (filter) => ({
    type: 'SET_FILTER',
    filter
})