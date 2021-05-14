const totalReducer = (state = [], action) => {
    switch (action.type) {
        case "UPDATE_TOTAL":
            var copy = [...state];
            copy.splice(0, 1, action.payload);
            return copy; // return a new state

        default:
            return state;
    }
}
export default totalReducer;