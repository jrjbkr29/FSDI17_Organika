
/**
 * Action
 * An arrow fn that returns an object
 * object should contain a type and payload(optional)
 */
// we export this so we can use this function in different files
export const addTodo = (todoText) => {
    return {
        type: "TODO_ADD",
        payload: todoText
    }
};