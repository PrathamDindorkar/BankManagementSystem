import React, { createContext, useState } from 'react';

export const CustomerContext = createContext();

export const CustomerProvider = ({ children }) => {
  const [customers, setCustomers] = useState([
    { name: 'McKenna', balance: 10000 },
    { name: 'Margot', balance: 5000 },
    { name: 'Antony', balance: 5000 },
    { name: 'Millie', balance: 5400 },
    { name: 'Ellizabeth', balance: 8000 },
    { name: 'Emma', balance: 10000 },
    { name: 'Yash', balance: 500 },
    { name: 'Sam', balance: 540 },
    { name: 'Adam', balance: 950 },
    { name: 'Jack', balance: 1000 }
  ]);

  const updateCustomerBalance = (name, newBalance) => {
    setCustomers((prevCustomers) =>
      prevCustomers.map((customer) =>
        customer.name === name ? { ...customer, balance: newBalance } : customer
      )
    );
  };

  return (
    <CustomerContext.Provider value={{ customers, updateCustomerBalance }}>
      {children}
    </CustomerContext.Provider>
  );
};
