import { useState } from 'react';
import './App.css';
import CustomerInput from './Components/CustomerInput/CustomerInput';
import CustomerList from './Components/CustomerList/CustomerList';

function App() {
  const [customers, setCustomers] = useState([]);


  const addNewCustomer = (newCustomer) =>{
    // setCustomers([...customers, newCustomer]);
    setCustomers((prevState) => [newCustomer, ...prevState]);
  }
  return (
    <div className="App">
      <h1>Customer Manage System</h1>
      <CustomerInput addNewCustomer={addNewCustomer}/>
      {customers.length === 0 && "there are no customers..."}
      <CustomerList customers={customers} setCustomers={setCustomers}/>
      
    </div>
  );
}

export default App;
