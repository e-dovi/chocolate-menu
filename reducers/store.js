import { configureStore } from '@reduxjs/toolkit';
import reducer from './cartSlice.js'

export const store = configureStore({
  reducer: {
    cart: reducer,
  }
});