/**
 * Reducer:
 * Its an arrow function that always receives the state and action
 * and should return a new state
 */

const todoReducer = (state = [], action) => {
    switch (action.type) {
        case "TODO_ADD":
            var copy = [...state];
            copy.push(action.payload);
            return copy; // return a new state

        case "TODO_REMOVE":
            copy = [...state];
            copy = copy.filter((t) => t !== action.payload);
            return copy;

        case "CLEAR_TODOS":
            copy = [];
            return copy;

        default:
            return state;
    }
};

export default todoReducer;