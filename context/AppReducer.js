export default (state, action) => {
    switch(action.type){
        case 'SET_CURRENT_SERVICE':
            return {
                ...state,
                currentService: action.payload
            }
        default:
            return state
    }
}