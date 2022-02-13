import React from "react";
import { Product } from "../components/Product";
import "./Homescreen.css";
import { useState,useEffect } from "react";

export function Homescreen() {
  const [data,setdata]=useState([]);

  const getdata=()=>{
    fetch("https://6166c4d613aa1d00170a66f1.mockapi.io/ecommerceproducts",{
      method:"GET",
  })
  .then((data)=>data.json())
  .then((dt)=>setdata(dt));
  }

  useEffect(getdata,[]);

  return (
    <div className="homescreen">
      <h2 className="homescreen_title">Latest Products</h2>
      <div className="homescreen_products">
        {data.map(({name,imageUrl,description,price,id})=>(
          <Product 
          name={name}
          imageUrl={imageUrl}
          description={description}
          price={price}
          key={id}
          id={id}/>
        ))}
       
      </div>
    </div>
  );
}
