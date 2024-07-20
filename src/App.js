import './App.css';
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import ListOfCustomers from './Components/ListOfCustomers';
import HomePage from "./Components/HomePage";
import Transaction from "./Components/Transaction";
import { CustomerProvider } from './Components/CustomerContext';

function App() {
  return (
    <div className='main'>
    <CustomerProvider>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path="/viewall" element={<ListOfCustomers />} />
        <Route path='/transaction/:name' element={<Transaction/>}/>
      </Routes>
    </Router>
    </CustomerProvider>
    </div>
  );
}

export default App;
