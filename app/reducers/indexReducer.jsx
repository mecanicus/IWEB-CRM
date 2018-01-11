function indexReducer(state = null, action) {
    switch(action.type) {
    case 'BOTON_CLICK':
        let newIndex = action.index;
        return newIndex;
    default:
        return state;
    }
}
export default indexReducer;
