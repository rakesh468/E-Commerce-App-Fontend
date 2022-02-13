import React from "react";
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import "./Product.css";
import { BasicRating } from "../BasicRating";



export function Product({ name, imageUrl, description, price, id }) {
 
  const history = useHistory();
  return (
    <Card className="product">
      <img src={imageUrl} alt={name} />
      <CardContent className="product_info">
        <p className="info_name">{name} </p>
        <p className="info_description"><b>Description:</b>{description}</p>
        <BasicRating />
        <p className="info_price"><b>Price:$</b>{price}</p>
        <CardActions className="button-width">
          <Button
            size="medium"
            className="product__btn"
            color="inherit"
            variant="contained"
            onClick={() => history.push("/product/"+id)}
          >
            View
          </Button>
          </CardActions>
        </CardContent>
    </Card>
  
  );
}
