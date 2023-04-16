import { configureStore, createSlice } from "@reduxjs/toolkit";
import user from './store/userSlice';


// slice 하나를 state 1개라고 부름
let stock = createSlice({
  name: 'stock',
  initialState: [10, 11, 12]
})

let cartItems = createSlice({
  name: 'cartItems',
  initialState: [
    {id : 0, name : 'White and Black', count : 2},
    {id : 2, name : 'Grey Yordan', count : 1}
  ],
  reducers: {
    addCount(state, action) {
      let item = state.find(item => item.id === action.payload);
      item.count += 1;
    }
  }
})
export let { addCount } = cartItems.actions


export default configureStore({
  reducer: {
    user: user.reducer,
    stock: stock.reducer,
    cartItems: cartItems.reducer,
  }
})
