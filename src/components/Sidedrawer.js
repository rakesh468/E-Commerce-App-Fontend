import React from 'react';
import "./Sidedrawer.css"
import {Link }from "react-router-dom";


 export function Sidedrawer({show,click}) {
     const sideDrawerClass=["sidedrawer"]
     if(show){
         sideDrawerClass.push("show")
     }
  return (
      <div className={sideDrawerClass.join(" ")}>
          <ul className="sidedrawer_links" onClick={click}>
          
          <li>
              <Link to="/">Home
              </Link>
          </li>
          <li>
              <Link to="/products">Shop
              </Link>
          </li>
          <li>
              <Link to="/addproduct">Add Product</Link>
          </li>
          <li>
              <Link to="/login">Login</Link>
          </li>
          </ul>

      </div>
  )
}


