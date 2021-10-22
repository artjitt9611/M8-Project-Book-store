import { configureStore } from '@reduxjs/toolkit';
import customersReducers from "./Customer/reducer"
import cartReducers from "./Cart/reducer"
export default configureStore({
    reducer: {
        customers: customersReducers,
        cart:cartReducers,
      }
});
