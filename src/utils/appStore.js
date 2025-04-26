import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlice';

//this is how we build store
const appStore = configureStore({
    // app reducer
    reducer: {
        // reducer of our slice
        cart: cartReducer
    }
});

export default appStore;