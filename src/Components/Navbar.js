import React from 'react'


function Navbar(){
    return(
        <>
        <div className='nav'>
            <a className='name' href='/'>BMS</a>
            <a className='navhead' href='/'>Home Page</a>
            <a className='navhead' href='/viewall'>View All Customers</a>
            <a className='navhead' href='viewall'>Transaction</a>
            <a className='navhead'>About</a>
        </div>
        </>
    )
}

export default Navbar;