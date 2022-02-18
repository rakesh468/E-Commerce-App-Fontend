import React from "react";
import "./Productscreen.css";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import { useParams, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import { BasicRating } from "../BasicRating";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const API_URL="https://e-commerce-backendcode.herokuapp.com";

export function Productscreen() {
  const { id } = useParams();
  const history = useHistory();

  const [detail, setdetail] = useState({})
  useEffect(() => {
    fetch(`${API_URL}/products/${id}`, {
      method: "GET",
    })
      .then((detail) => detail.json())
      .then((dt) => setdetail(dt));
  }, [id]);

  const deleteproduct=(_id)=>{
    fetch(`${API_URL}/products/${_id}`,{
      method:"DELETE"
    }).then(()=>history.push("/products"))

      
  }
  return (
    <Card className="productscreen">
      <div className="productscreen_left">
        <div className="left_image">
          <img src={detail.imageUrl} alt="poster" />
        </div>
        <div className="left_info">
          <p className="left_name">{detail.name}</p>
          <p><b>Price</b>:${detail.price}</p>
          <p><BasicRating /></p>
          <p><b>Description</b>{detail.description}</p>
         
      
          <div className="details-btn">
           
           < IconButton onClick={()=>history.push("/edit/"+ id)} ><EditIcon  color="secondary"/></ IconButton >
           <IconButton>< DeleteIcon color="error" onClick={()=>deleteproduct(id) }/></IconButton>
           </div>
           <Button startIcon={< KeyboardBackspaceIcon/>} variant="contained" onClick={() => history.goBack("/products")}>Back</Button>
           
        </div>
        </div>
    </Card>
  );
}























 
  