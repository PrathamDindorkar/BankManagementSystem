import React from 'react'
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";

function HomePage(){
    return(
        <>
        <div className='main'>
        <div className='clicks'>
        <NavigateButton />
        <br/>
        <button>View Balance</button>
        </div>
        </div>
        </>
    )
    function NavigateButton() {
        const navigate = useNavigate();
      
        const handleViewBut = () => {
          navigate('/viewall');
        };
      
        return (
          <button onClick={handleViewBut}>View All Customers</button>
        );
    }
}

export default HomePage;