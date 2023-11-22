import { createSlice } from "@reduxjs/toolkit"

const cartSlice=createSlice({
    name:"cart",
    initialState:{
        items:[]
        
    },
    reducers:{
        addItem:(state,action)=>{
            state.items.push(action.payload)
        },
        

    }

}
)

export const{addItem,}=cartSlice.actions;
export default cartSlice.reducer;
  













/**
 * Observations
 * 
 *      Create Store
 *          -configureStore-RTK
 * 
 *          
 *      Slice 
 *          createSlice- RTK
 *              createSlice({
 *              name:"cart"
 *              initialStare{
 * }    
 *              }
 *              reducers:{
 *                  addItem:(state,action)=>{
 * } 
 *              })
 *              export const{additem}=createSlice.actions;
 *              export default createSlice.reducer;
 * 
 *          
 *         Put Slice to the Store
 *              -reducer:{
 *                 cart:cartSlice             
 * }
 */