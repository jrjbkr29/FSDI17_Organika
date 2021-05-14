
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

export const removeTodo = (todoText) => {
    return {
        type: "TODO_REMOVE",
        payload: todoText,
    }
}

export const clearTodos = () => {
    return {
        type: "CLEAR_TODOS",
    }
}

export const addToCart = (item) => {
    return {
        type: "ADD_CART",
        payload: item,
    }
}

export const removeFromCart = (id) => {
    return {
        type: "REMOVE_CART",
        payload: id,
    }
}

export const updateTotal = (newTotal) => {
    return {
        type: "UPDATE_TOTAL",
        payload: newTotal
    }
} 