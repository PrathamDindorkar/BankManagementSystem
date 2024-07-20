import React, { useContext, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CustomerContext } from './CustomerContext';

function Transaction() {
  const { name } = useParams();
  const navigate = useNavigate();
  const { customers, updateCustomerBalance } = useContext(CustomerContext);
  const customer = customers.find((customer) => customer.name === name);

  const [balance, setBalance] = useState(customer ? customer.balance : 0);
  const [amount, setAmount] = useState('');
  const [showCustomerList, setShowCustomerList] = useState(false);

  useEffect(() => {
    if (customer) {
      setBalance(customer.balance);
    }
  }, [customer]);

  const handleDeposit = () => {
    const newBalance = balance + parseFloat(amount);
    setBalance(newBalance);
    updateCustomerBalance(name, newBalance);
    setAmount('');
  };

  const handleTransfer = (recipientName) => {
    const newBalance = balance - parseFloat(amount);
    setBalance(newBalance);
    updateCustomerBalance(name, newBalance);

    const recipient = customers.find((customer) => customer.name === recipientName);
    if (recipient) {
      const recipientNewBalance = recipient.balance + parseFloat(amount);
      updateCustomerBalance(recipientName, recipientNewBalance);
    }

    setAmount('');
    setShowCustomerList(false);
  };

  return (
    <div>
      <h1>Transaction for {name}</h1>
      <h1>Current Balance: ${balance}</h1>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Enter amount"
      />
      <button onClick={handleDeposit}>Deposit</button>
      <button onClick={() => setShowCustomerList(true)}>Transfer</button>
      <button onClick={() => navigate('/')}>Back to Customer List</button>

      {showCustomerList && (
        <div>
          <h3>Select Customer to Transfer Money To:</h3>
          <ul>
            {customers
              .filter((customer) => customer.name !== name)
              .map((customer, index) => (
                <li key={index} onClick={() => handleTransfer(customer.name)}>
                  <a>{customer.name}</a>
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Transaction;
