import React, { useState } from "react";
import { addCustomer } from "./CustomerSlice";
import { useDispatch } from "react-redux";
import CustomerView from "./CustomerView";

function CustomerAdd()
{
    const [input,setInput]=useState([])
  //  const [customers,setCustomers]=useState([])
    const dispatch = useDispatch()

    const handleChange = (e)=>{
        setInput(e.target.value)
    }
    const handleSubmit = ()=>{
        if(input)
            {
                dispatch(addCustomer(input))
        //setCustomers((previousState)=>[...previousState,input])
        //console.log(customers)
            }
            setInput("")
    }
    return(
        <div>

            <h2>Customer Adding</h2>

            <input type="text" onChange={handleChange} value={input}></input>
            <button type="button" onClick={handleSubmit}>Add</button>

            <CustomerView></CustomerView>
        </div>
    )
}
export default CustomerAdd