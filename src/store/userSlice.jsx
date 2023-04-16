import { createSlice } from "@reduxjs/toolkit";

let user = createSlice({
  name: "user",
  initialState: { name: "kim", age: 20 },
  reducers: {
    changeName(state) {
      state.name = "park"; // obj, array 는 직접변경해도 봐줌
    },
    addAge(state, action) {
      console.log("n.payload", action);
      state.age += action.payload;
    },
  },
});

export let { changeName, addAge } = user.actions

export default user;