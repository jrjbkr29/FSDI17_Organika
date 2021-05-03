/**
 * Reducer:
 * Its an arrow function that always receives the state and action
 * and should return a new state
 */

const todoReducer = (state = [], action) => {

if(action.type === "TODO_ADD") {
    var copy = [...state];
    copy.push(action.payload);
    return copy; // return a new state
}

    // reducer should always return the state
    return state;
};

export default todoReducer;