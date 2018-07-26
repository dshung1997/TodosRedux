const filter = (state = 'all', action) =>
{
    let newState = state;

    switch (action.type) {
        case 'SET_FILTER':
        {
            newState = action.filter;
            return newState;
        }

        default:
        {
            return state;
        }
    }
}

export default filter;