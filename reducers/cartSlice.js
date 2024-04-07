import { createSlice } from "@reduxjs/toolkit";


export const cartSlice = createSlice({
  name: "cart",
  initialState: [{num:0}],
  reducers: {
    addToCart: (state, action) => {
    
      const findByName = (name) => {
        return state.findIndex((e)=>e.name==name)
       }
      if(state.findIndex((e) => {return e.name == action.payload.name}) !== -1 ) {
        state[findByName(action.payload.name)].qty += 1;
        state[0].num += 1
      }
      else{
        return [...state, action.payload];
      }
      
    },

    increaseQty: (state, action) => {
      const findByName = (name) => {
        return state.findIndex((e)=>e.name==name)
       }
      state[findByName(action.payload)].qty += 1;
      state[0].num += 1;
    },

    decreaseQty: (state, action) => {
      const findByName = (name) => {
        return state.findIndex((e)=>e.name==name)
       }
       if(state[findByName(action.payload)].qty == 1){
        let i = state.findIndex((e) => e.name==action.payload)
        state.splice(i, 1)
        //state[0].num -= 1;
       }
       else {
        state[findByName(action.payload)].qty -= 1;
        state[0].num -= 1;
       }
      
    },

    removeItem: (state, action) => {
      const findByName = (name) => {
        return state.findIndex((e)=>e.name==name)
       }
        let i = state.findIndex((e)=>e.name==action.payload)
        state[0].num -= state[findByName(action.payload)].qty - 1;
        state.splice(i, 1)
    },

    clearCart: (state, action) => {
      return [{num:0}];
    }
  },
});

export const selectCart = (state) => {
    return state.cart
  }

export const {addToCart, clearCart, increaseQty, decreaseQty, removeItem} = cartSlice.actions
export default cartSlice.reducer;