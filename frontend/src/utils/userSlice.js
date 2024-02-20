import { createSlice } from '@reduxjs/toolkit'



const userSlice = createSlice({
  name: "user",
  initialState:{
    users:null
  },
  reducers: {
    addUser:(state,action)=>{
        state.users=action.payload;
    },
    removeuser:(state,action)=>{
        state.users=null;
    }
  }
});

export const {addUser,removeuser} = userSlice.actions

export default userSlice.reducer