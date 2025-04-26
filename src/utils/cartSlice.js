import { createSlice, current } from "@reduxjs/toolkit";
const cartSlice = createSlice({
    name: 'cart', 
    initialState: {
        // state
        items: []
    },
    reducers: {
        // action: reducer function
        addItem: (state, action) => {
            //Vanill redux : dont mutate state
            // const newState = [...state];
            // newState.items.push(action.payload);
            // return newState;

            //mutating the state here or return a new state
            console.log("state log", current(state));
            state.items.push(action.payload);
        },
        removeItem: (state, action) => {
            state.items.pop();
        },
        clearCart: (state, action) => {
            // either mutate the existing state or return a new state
            // state.items.length = 0; // originalState = []

             return { items: [] }; //this new object will be replaced inside originalState = ( item: [])
        }
    }
})

//export our actions and reducers
export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;