// const initialState = [
//     {
//         id: 'id--1',
//         content: '..1',
//         completed: false    
//     },
//     {
//         id: 'id--2',
//         content: '..2',
//         completed: false    
//     },
//     {
//         id: 'id--3',
//         content: '..3',
//         completed: false    
//     },
//     {
//         id: 'id--4',
//         content: '..4',
//         completed: false    
//     }
// ]

const todos = (state = [], action) => {
    
    let newState = JSON.parse(JSON.stringify(state));

    switch(action.type)
    {
        case 'ADD_TODO':
        {
            console.log('state ', state);
            console.log('data ', action.data);
            newState.push(action.data);
            return newState;
        }

        case 'DELETE_TODO':
        {
            newState = newState.filter((item, i) => item.id !== action.data.id);

            return newState;
        }

        case 'DELETE_TODOS':
        {
            newState = newState.filter((item) => !action.data.ids.include(item.id));

            return newState;
        }

        case 'DELETE_COMPLETED_TODOS':
        {
            newState = newState.filter((item) => !item.completed);

            return newState;
        }

        case 'TOGGLE_TODO':
        {
            newState.forEach((item) => {
                if(item.id === action.data.id)
                {
                    item.completed = !item.completed;
                }
            });

            return newState;
        }

        case 'TOGGLE_ALL_TODOS':
        {
            newState.forEach((item) => {
                item.completed = action.status;
            });

            return newState;
        }

        default:
        {   
            return state;
        }
    }
}

export default todos;