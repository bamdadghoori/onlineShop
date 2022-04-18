import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'font-awesome/css/font-awesome.min.css';
import  ShopCardRequest from './shopCardRequest'
import { useState } from 'react';
 const Navbar = ({totalCount}:{totalCount:number}) => {
  const [clicked,setCliked]=useState(false);
   const handleClick=()=>{
         setCliked(true)
   }
   const handleClose=()=>{
     setCliked(false)
   }
  return (
   <>
   <nav className="navbar navbar-light bg-light" >

      <i className='fa fa-shopping-cart' onClick={handleClick}>
      <span className="badge bg-primary bg-pill">{totalCount}</span>
      
      </i>
      {
        clicked && (
<ShopCardRequest handleClose={handleClose}/>
        )
      }
      
  <a className="navbar-brand" href="#">Navbar</a>
 
</nav>
   </>
  )
}
export default Navbar;

