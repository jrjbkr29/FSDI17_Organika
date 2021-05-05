const addCartReducer = (state = [], action) => {
    switch (action.type) {
        case "ADD_CART":
            let copy = [...state];
            copy.push(action.payload);
        // product should only be displayed once, but the quantity should update
        // need to create a copy if the product exists inside the cart
        // just sum the quantity 
        // else push it to cart

            return copy;

        default:
            return state;
    }
}
export default addCartReducer;