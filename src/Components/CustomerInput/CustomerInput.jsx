import React, { useState } from 'react'
import "./CustomerInput.css"

const CustomerInput = ({addNewCustomer}) => {
  const [customerName, setCustomerName] = useState("")

  const handleSubmit=(event)=>{
    event.preventDefault();
    const newCustomer = {
      id: Math.random(),
      customerName,
    };
      addNewCustomer(newCustomer);
      setCustomerName("")
  };

  return (
    <form className='customer-form' onSubmit={handleSubmit}>
        <input 
        type="text"  
        className="customer-input" 
        placeholder='add a new customer'
        onChange={(e) => setCustomerName(e.target.value)}
        value={customerName}/>
        <button>
            <i className='bi bi-plus-lg'></i>
        </button>
    </form>
  )
}

export default CustomerInput