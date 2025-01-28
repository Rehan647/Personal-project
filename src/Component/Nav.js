import React from 'react'
import { Link } from 'react-router-dom';

export default function Nav(props) {
  return (
     <nav className="navbar navbar-expand-lg navbar-light bg-light">
     <div className="container">
     <h3>{props.User}</h3>
       <div className="collapse navbar-collapse" id="navbarNav">
         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
           <li className="nav-item">
             
             <Link className="nav-link active" to="/">Home</Link> 
           </li>
           <li className="nav-item">
             
             <Link className="nav-link" to="/shop">Shop</Link> 
           </li>
           <li className="nav-item">
             
             <Link className="nav-link" to="/contact">Contact us</Link> 
           </li>
         </ul>
       </div>
     </div>
   </nav>
  )
}
