import { configureStore } from '@reduxjs/toolkit';
import customersReducers from "./reducer"

export default configureStore({
    reducer: {
        customers: customersReducers
      }
});
