import React, { useState } from "react"

import { useDispatch, useSelector } from "react-redux"
import { deleteCustomer,updateCustomer } from "./CustomerSlice"

function CustomerView()
{
    const dispatch = useDispatch()
    const [update,setUpdate]=useState(false)
    
    const handleButton = (key)=>{

        dispatch(deleteCustomer(key))
    }
    const handleUpdate = async (key)=>{
        setUpdate(true)
        const value =  document.getElementById(key).value
       
        const pays={
            index: key,
            value:value
        }
        console.log(pays)
        dispatch(updateCustomer(pays))
        // document.getElementById("update").value = " "
    }
const customers = useSelector((state)=> state.customers)

    return(
        <div>
              {
                <h2>
                    {customers.map((customer,key)=>(
                        <div>
                        <h2>{customer}</h2> 
                        <button onClick={()=>handleButton(key)}>Delete</button>
                        <button onClick={()=>handleUpdate(key)}>Update</button>

                        <input type="text" id={key}></input>
                        </div>
))}
 
 {/* {update && <input type="text" id="update"></input>} */}
                 </h2>
        }
               

                
        </div>
    )
}
export default CustomerView