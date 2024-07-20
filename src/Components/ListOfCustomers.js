import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CustomerContext } from './CustomerContext';

function ListOfCustomers() {
  const navigate = useNavigate();
  const { customers } = useContext(CustomerContext);

  const handleCustomerClick = (name) => {
    navigate(`/transaction/${name}`);
  };

  return (
    <div className="list">
      <br />
      <h1>List of All Customers</h1>
      <ul>
        {customers.map((customer, index) => (
          <li key={index} onClick={() => handleCustomerClick(customer.name)}>
            <a>{customer.name} : &nbsp; ${customer.balance}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListOfCustomers;
