import { createSlice } from "@reduxjs/toolkit";

const  initialState = []
const customerSlice = createSlice({
    name:"customer",
    initialState,
    reducers:{
        addCustomer(state,action)
        {
            state.push(action.payload)
        },
        deleteCustomer(state,action)
        {
            const deleteIndex = action.payload
            return state.filter((val,index)=> index !== deleteIndex)
        },
        updateCustomer(state,action){
            const index = action.payload.index
            const value = action.payload.value
            //state.splice(index,1,value)
            state[index]=value 
            
        }
       
    }
})

export const {addCustomer,deleteCustomer,updateCustomer} = customerSlice.actions

export default customerSlice.reducer