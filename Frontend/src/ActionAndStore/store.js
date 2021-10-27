import { configureStore } from '@reduxjs/toolkit';
import customersReducers from "./Customer/reducer"
import cartReducers from "./Cart/reducer"
import address from "./Address/reducer"
import name from "./Name/reducer"
import phone from "./Phone/reducer"
export default configureStore({
    reducer: {
        customers: customersReducers,
        cart:cartReducers,
        address:address,
        name:name,
        phone:phone
      }
});
