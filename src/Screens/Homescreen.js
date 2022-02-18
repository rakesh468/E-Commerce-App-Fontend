import React from "react";
import { Product } from "../components/Product";
import "./Homescreen.css";
import { useState,useEffect } from "react";

const API_URL="https://e-commerce-backendcode.herokuapp.com"

export function Homescreen() {
  const [data,setdata]=useState([]);

  const getdata=()=>{
    fetch(`${API_URL}/products`,{
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
        {data.map(({name,imageUrl,description,price,id,_id})=>(
          <Product 
          name={name}
          imageUrl={imageUrl}
          description={description}
          price={price}
          key={id}
          id={_id}/>
        ))}
       
      </div>
    </div>
  );
}
